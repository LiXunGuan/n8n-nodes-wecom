import type { IExecuteFunctions, INodeExecutionData, IDataObject } from 'n8n-workflow';
import { NodeOperationError } from 'n8n-workflow';
import {
	WeComCrypto,
	generateReplyMessageXML,
	generateEncryptedResponseXML,
} from '../../shared/crypto';

export async function executePassiveReply(
	this: IExecuteFunctions,
	operation: string,
	items: INodeExecutionData[],
): Promise<INodeExecutionData[]> {
	const returnData: INodeExecutionData[] = [];

	for (let i = 0; i < items.length; i++) {
		try {
			if (operation === 'reply') {
				const item = items[i];

				// 从输入数据中获取加密信息
				const wecomCrypto = item.json._wecomCrypto as {
					token: string;
					encodingAESKey: string;
					corpId: string;
				};

				if (!wecomCrypto || !wecomCrypto.token || !wecomCrypto.encodingAESKey || !wecomCrypto.corpId) {
					throw new NodeOperationError(
						this.getNode(),
						'缺少企业微信加密信息，请确保此节点连接到「企业微信消息接收（被动回复）触发器」节点之后',
						{ itemIndex: i },
					);
				}

				// 获取消息发送者和接收者信息
				const fromUserName = item.json.FromUserName as string;
				const toUserName = item.json.ToUserName as string;

				if (!fromUserName || !toUserName) {
					throw new NodeOperationError(
						this.getNode(),
						'缺少消息发送者或接收者信息，请确保输入数据来自「企业微信消息接收（被动回复）触发器」',
						{ itemIndex: i },
					);
				}

				// 获取回复类型
				const replyType = this.getNodeParameter('replyType', i) as 'text' | 'image' | 'voice' | 'video' | 'news';

				// 根据消息类型构建回复内容
				let replyContent: Record<string, unknown> = {};

				switch (replyType) {
					case 'text': {
						const textContent = this.getNodeParameter('textContent', i) as string;
						if (!textContent) {
							throw new NodeOperationError(
								this.getNode(),
								'文本内容不能为空',
								{ itemIndex: i },
							);
						}
						replyContent = { Content: textContent };
						break;
					}

					case 'image':
					case 'voice':
					case 'video': {
						const mediaId = this.getNodeParameter('mediaId', i) as string;
						if (!mediaId) {
							throw new NodeOperationError(
								this.getNode(),
								'媒体ID不能为空',
								{ itemIndex: i },
							);
						}
						replyContent = { MediaId: mediaId };

						if (replyType === 'video') {
							const videoTitle = this.getNodeParameter('videoTitle', i, '') as string;
							const videoDescription = this.getNodeParameter('videoDescription', i, '') as string;
							if (videoTitle) replyContent.Title = videoTitle;
							if (videoDescription) replyContent.Description = videoDescription;
						}
						break;
					}

					case 'news': {
						const articlesData = this.getNodeParameter('articles', i) as {
							article?: Array<{
								title: string;
								description?: string;
								url: string;
								picUrl?: string;
							}>;
						};

						const articles = articlesData.article || [];

						if (articles.length === 0) {
							throw new NodeOperationError(
								this.getNode(),
								'至少需要添加一篇图文消息',
								{ itemIndex: i },
							);
						}

						// 转换为企业微信格式
						const formattedArticles = articles.map(article => ({
							Title: article.title,
							Description: article.description || '',
							Url: article.url,
							PicUrl: article.picUrl || '',
						}));

						replyContent = { Articles: formattedArticles };
						break;
					}
				}

				// 创建加密实例
				const crypto = new WeComCrypto(wecomCrypto.encodingAESKey, wecomCrypto.corpId);

				// 生成回复消息 XML
				const replyMessageXML = generateReplyMessageXML(
					fromUserName,  // ToUserName: 发送给消息的发送者
					toUserName,    // FromUserName: 来自应用
					replyType,
					replyContent,
				);

				// 生成加密的响应 XML
				const encryptedResponseXML = generateEncryptedResponseXML(
					crypto,
					wecomCrypto.token,
					replyMessageXML,
					this.getNode(),
				);

				// 返回加密的 XML 作为 webhook 响应
				// n8n 的 responseMode: 'lastNode' 会检查 body/headers/statusCode 字段
				returnData.push({
					json: {
						body: encryptedResponseXML,
						headers: {
							'content-type': 'application/xml; charset=utf-8',
						},
						statusCode: 200,
						// 保留原始消息信息供调试
						_debug: {
							fromUserName,
							toUserName,
							replyType,
						},
					} as IDataObject,
					pairedItem: { item: i },
				});
			}
		} catch (error) {
			if (this.continueOnFail()) {
				returnData.push({
					json: {
						error: (error as Error).message,
					},
					pairedItem: { item: i },
				});
				continue;
			}
			throw error;
		}
	}

	return returnData;
}

