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

				const wecomCrypto = item.json._wecomCrypto as {
					token: string;
					encodingAESKey: string;
					corpId: string;
				};

				if (!wecomCrypto || !wecomCrypto.token || !wecomCrypto.encodingAESKey || !wecomCrypto.corpId) {
					throw new NodeOperationError(
						this.getNode(),
						'缺少企业微信加密信息。请确保工作流结构为：企业微信消息接收（被动回复）触发器 → 本节点',
						{ itemIndex: i },
					);
				}

				const fromUserName = item.json.FromUserName as string;
				const toUserName = item.json.ToUserName as string;

				if (!fromUserName || !toUserName) {
					throw new NodeOperationError(
						this.getNode(),
						'缺少消息发送者或接收者信息，请确保输入数据来自「企业微信消息接收（被动回复）触发器」',
						{ itemIndex: i },
					);
				}

				const replyType = this.getNodeParameter('replyType', i) as 'text' | 'image' | 'voice' | 'video' | 'news' | 'update_template_card';
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

						const formattedArticles = articles.map(article => ({
							Title: article.title,
							Description: article.description || '',
							Url: article.url,
							PicUrl: article.picUrl || '',
						}));

						replyContent = { Articles: formattedArticles };
						break;
					}

					case 'update_template_card': {
						const buttonReplaceName = this.getNodeParameter('buttonReplaceName', i, '') as string;

						if (buttonReplaceName) {
							replyContent = { Button: { ReplaceName: buttonReplaceName } };
						} else {
							const cardType = this.getNodeParameter('cardType', i) as string;
							const cardSource = this.getNodeParameter('cardSource', i, '{}') as string;
							const cardMainTitle = this.getNodeParameter('cardMainTitle', i, '{"title": ""}') as string;
							const cardEmphasisContent = this.getNodeParameter('cardEmphasisContent', i, '{}') as string;
							const cardQuoteArea = this.getNodeParameter('cardQuoteArea', i, '{}') as string;
							const cardSubTitleText = this.getNodeParameter('cardSubTitleText', i, '') as string;
							const cardHorizontalContentList = this.getNodeParameter('cardHorizontalContentList', i, '[]') as string;
							const cardJumpList = this.getNodeParameter('cardJumpList', i, '[]') as string;
							const cardAction = this.getNodeParameter('cardAction', i, '{}') as string;
							const cardTaskId = this.getNodeParameter('cardTaskId', i, '') as string;
							const cardActionMenu = this.getNodeParameter('cardActionMenu', i, '{}') as string;

							const templateCard: Record<string, unknown> = {
								CardType: cardType,
							};

							try {
								const sourceObj = JSON.parse(cardSource);
								if (Object.keys(sourceObj).length > 0) {
									templateCard.Source = sourceObj;
								}
							} catch {
								// 忽略解析错误
							}

							try {
								templateCard.MainTitle = JSON.parse(cardMainTitle);
							} catch {
								templateCard.MainTitle = { title: '' };
							}

							try {
								const emphasisObj = JSON.parse(cardEmphasisContent);
								if (Object.keys(emphasisObj).length > 0) {
									templateCard.EmphasisContent = emphasisObj;
								}
							} catch {
								// 忽略解析错误
							}

							try {
								const quoteObj = JSON.parse(cardQuoteArea);
								if (Object.keys(quoteObj).length > 0) {
									templateCard.QuoteArea = quoteObj;
								}
							} catch {
								// 忽略解析错误
							}

							if (cardSubTitleText) {
								templateCard.SubTitleText = cardSubTitleText;
							}

							try {
								const horizontalList = JSON.parse(cardHorizontalContentList);
								if (Array.isArray(horizontalList) && horizontalList.length > 0) {
									templateCard.HorizontalContentList = horizontalList;
								}
							} catch {
								// 忽略解析错误
							}

							try {
								const jumpListObj = JSON.parse(cardJumpList);
								if (Array.isArray(jumpListObj) && jumpListObj.length > 0) {
									templateCard.JumpList = jumpListObj;
								}
							} catch {
								// 忽略解析错误
							}

							try {
								const cardActionObj = JSON.parse(cardAction);
								if (Object.keys(cardActionObj).length > 0) {
									templateCard.CardAction = cardActionObj;
								}
							} catch {
								// 忽略解析错误
							}

							if (cardTaskId) {
								templateCard.TaskId = cardTaskId;
							}

							try {
								const actionMenuObj = JSON.parse(cardActionMenu);
								if (Object.keys(actionMenuObj).length > 0) {
									templateCard.ActionMenu = actionMenuObj;
								}
							} catch {
								// 忽略解析错误
							}

							if (cardType === 'button_interaction') {
								const cardButtonList = this.getNodeParameter('cardButtonList', i, '[]') as string;
								try {
									const buttonListObj = JSON.parse(cardButtonList);
									if (Array.isArray(buttonListObj) && buttonListObj.length > 0) {
										templateCard.ButtonList = buttonListObj;
									}
								} catch {
									// 忽略解析错误
								}
							} else if (cardType === 'vote_interaction' || cardType === 'multiple_interaction') {
								const cardCheckboxQuestionKey = this.getNodeParameter('cardCheckboxQuestionKey', i, '') as string;
								const cardCheckboxMode = this.getNodeParameter('cardCheckboxMode', i, 'single') as string;
								const cardOptionList = this.getNodeParameter('cardOptionList', i, '[]') as string;
								const cardSubmitButtonText = this.getNodeParameter('cardSubmitButtonText', i, '提交') as string;
								const cardSubmitButtonKey = this.getNodeParameter('cardSubmitButtonKey', i) as string;

								if (cardCheckboxQuestionKey) {
									templateCard.Checkbox = {
										QuestionKey: cardCheckboxQuestionKey,
										Mode: cardCheckboxMode,
										OptionList: JSON.parse(cardOptionList),
									};
								}

								templateCard.SubmitButton = {
									Text: cardSubmitButtonText,
									Key: cardSubmitButtonKey,
								};
							} else if (cardType === 'news_notice') {
								const cardImageTextArea = this.getNodeParameter('cardImageTextArea', i, '{}') as string;
								try {
									const imageTextObj = JSON.parse(cardImageTextArea);
									if (Object.keys(imageTextObj).length > 0) {
										templateCard.ImageTextArea = imageTextObj;
									}
								} catch {
									// 忽略解析错误
								}
							}

							replyContent = { TemplateCard: templateCard };
						}
						break;
					}
				}

				const crypto = new WeComCrypto(wecomCrypto.encodingAESKey, wecomCrypto.corpId);

				const replyMessageXML = generateReplyMessageXML(
					fromUserName,
					toUserName,
					replyType,
					replyContent,
				);

				const encryptedResponseXML = generateEncryptedResponseXML(
					crypto,
					wecomCrypto.token,
					replyMessageXML,
					this.getNode(),
				);

				this.sendResponse({
					body: encryptedResponseXML,
					headers: {
						'content-type': 'application/xml; charset=utf-8',
					},
					statusCode: 200,
				});

				returnData.push({
					json: {
						success: true,
						repliedAt: new Date().toISOString(),
					} as IDataObject,
					pairedItem: { item: i },
				});
			}
		} catch (error) {
			if (this.continueOnFail()) {
				returnData.push({
					json: {
						error: (error as Error).message,
						success: false,
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

