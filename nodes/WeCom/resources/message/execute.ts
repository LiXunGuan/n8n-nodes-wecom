import type { IExecuteFunctions, INodeExecutionData, IDataObject } from 'n8n-workflow';
import { NodeOperationError } from 'n8n-workflow';
import { weComApiRequest, uploadMedia } from '../../shared/transport';
import { extractRecipients } from './commonFields';

export async function executeMessage(
	this: IExecuteFunctions,
	operation: string,
	items: INodeExecutionData[],
): Promise<INodeExecutionData[]> {
	const returnData: INodeExecutionData[] = [];

	for (let i = 0; i < items.length; i++) {
		try {
			const credentials = await this.getCredentials('weComApi');
			const agentId = credentials.agentId as string;

			// 获取接收人信息（支持新旧两种方式）
			let touser = '';
			let toparty = '';
			let totag = '';

			// 检查是否使用新的接收人选择方式
			const recipientType = this.getNodeParameter('recipientType', i, null) as string | null;
			
			if (recipientType !== null) {
				// 新方式：使用 recipientType 选择
				const touserArray = this.getNodeParameter('touser', i, []) as string[];
				const topartyArray = this.getNodeParameter('toparty', i, []) as string[];
				const totagArray = this.getNodeParameter('totag', i, []) as string[];
				const touserManual = this.getNodeParameter('touser_manual', i, '') as string;
				const topartyManual = this.getNodeParameter('toparty_manual', i, '') as string;
				const totagManual = this.getNodeParameter('totag_manual', i, '') as string;

				const recipients = extractRecipients(
					recipientType,
					touserArray,
					topartyArray,
					totagArray,
					touserManual,
					topartyManual,
					totagManual,
				);

				touser = recipients.touser || '';
				toparty = recipients.toparty || '';
				totag = recipients.totag || '';
			} else {
				// 旧方式：直接获取字段（向后兼容）
				touser = this.getNodeParameter('touser', i, '') as string;
				toparty = this.getNodeParameter('toparty', i, '') as string;
				totag = this.getNodeParameter('totag', i, '') as string;
			}

			if (!touser && !toparty && !totag) {
				throw new NodeOperationError(
					this.getNode(),
					'必须指定至少一个接收人（成员ID、部门ID或标签ID）',
					{ itemIndex: i },
				);
			}

			let body: IDataObject = {
				touser,
				toparty,
				totag,
				agentid: agentId,
			};

			if (operation === 'sendText') {
				const content = this.getNodeParameter('content', i) as string;
				const safe = this.getNodeParameter('safe', i, false) as boolean;
				const enable_id_trans = this.getNodeParameter('enable_id_trans', i, false) as boolean;
				const enable_duplicate_check = this.getNodeParameter(
					'enable_duplicate_check',
					i,
					false,
				) as boolean;

				body = {
					...body,
					msgtype: 'text',
					text: {
						content,
					},
					safe: safe ? 1 : 0,
					enable_id_trans: enable_id_trans ? 1 : 0,
					enable_duplicate_check: enable_duplicate_check ? 1 : 0,
				};

				if (enable_duplicate_check) {
					const duplicate_check_interval = this.getNodeParameter(
						'duplicate_check_interval',
						i,
						1800,
					) as number;
					body.duplicate_check_interval = duplicate_check_interval;
				}
			} else if (operation === 'sendMarkdown') {
				const content = this.getNodeParameter('content', i) as string;

				body = {
					...body,
					msgtype: 'markdown',
					markdown: {
						content,
					},
				};
			} else if (operation === 'sendImage') {
				const imageSource = this.getNodeParameter('imageSource', i) as string;
				let mediaId: string;

				if (imageSource === 'mediaId') {
					mediaId = this.getNodeParameter('media_ID', i) as string;
				} else {
					// 上传图片
					const binaryPropertyName = this.getNodeParameter('binaryPropertyName', i) as string;
					const binaryData = this.helpers.assertBinaryData(i, binaryPropertyName);
					const buffer = await this.helpers.getBinaryDataBuffer(i, binaryPropertyName);

					mediaId = await uploadMedia.call(
						this,
						'image',
						buffer,
						binaryData.fileName || 'image.jpg',
					);
				}

				body = {
					...body,
					msgtype: 'image',
					image: {
						media_id: mediaId,
					},
				};
			} else if (operation === 'sendFile') {
				const fileSource = this.getNodeParameter('fileSource', i) as string;
				let mediaId: string;

				if (fileSource === 'mediaId') {
					mediaId = this.getNodeParameter('media_ID', i) as string;
				} else {
					// 上传文件
					const binaryPropertyName = this.getNodeParameter('binaryPropertyName', i) as string;
					const binaryData = this.helpers.assertBinaryData(i, binaryPropertyName);
					const buffer = await this.helpers.getBinaryDataBuffer(i, binaryPropertyName);

					mediaId = await uploadMedia.call(
						this,
						'file',
						buffer,
						binaryData.fileName || 'file.bin',
					);
				}

				body = {
					...body,
					msgtype: 'file',
					file: {
						media_id: mediaId,
					},
				};
			} else if (operation === 'sendVoice') {
				const voiceSource = this.getNodeParameter('voiceSource', i) as string;
				const safe = this.getNodeParameter('safe', i, false) as boolean;
				const enable_id_trans = this.getNodeParameter('enable_id_trans', i, false) as boolean;
				const enable_duplicate_check = this.getNodeParameter(
					'enable_duplicate_check',
					i,
					false,
				) as boolean;
				let mediaId: string;

				if (voiceSource === 'mediaId') {
					mediaId = this.getNodeParameter('media_ID', i) as string;
				} else {
					// 上传语音
					const binaryPropertyName = this.getNodeParameter('binaryPropertyName', i) as string;
					const binaryData = this.helpers.assertBinaryData(i, binaryPropertyName);
					const buffer = await this.helpers.getBinaryDataBuffer(i, binaryPropertyName);

					mediaId = await uploadMedia.call(
						this,
						'voice',
						buffer,
						binaryData.fileName || 'voice.amr',
					);
				}

				body = {
					...body,
					msgtype: 'voice',
					voice: {
						media_id: mediaId,
					},
					safe: safe ? 1 : 0,
					enable_id_trans: enable_id_trans ? 1 : 0,
					enable_duplicate_check: enable_duplicate_check ? 1 : 0,
				};

				if (enable_duplicate_check) {
					const duplicate_check_interval = this.getNodeParameter(
						'duplicate_check_interval',
						i,
						1800,
					) as number;
					body.duplicate_check_interval = duplicate_check_interval;
				}
			} else if (operation === 'sendVideo') {
				const videoSource = this.getNodeParameter('videoSource', i) as string;
				const title = this.getNodeParameter('title', i, '') as string;
				const description = this.getNodeParameter('description', i, '') as string;
				const safe = this.getNodeParameter('safe', i, false) as boolean;
				const enable_id_trans = this.getNodeParameter('enable_id_trans', i, false) as boolean;
				const enable_duplicate_check = this.getNodeParameter(
					'enable_duplicate_check',
					i,
					false,
				) as boolean;
				let mediaId: string;

				if (videoSource === 'mediaId') {
					mediaId = this.getNodeParameter('media_ID', i) as string;
				} else {
					// 上传视频
					const binaryPropertyName = this.getNodeParameter('binaryPropertyName', i) as string;
					const binaryData = this.helpers.assertBinaryData(i, binaryPropertyName);
					const buffer = await this.helpers.getBinaryDataBuffer(i, binaryPropertyName);

					mediaId = await uploadMedia.call(
						this,
						'video',
						buffer,
						binaryData.fileName || 'video.mp4',
					);
				}

				body = {
					...body,
					msgtype: 'video',
					video: {
						media_id: mediaId,
						title,
						description,
					},
					safe: safe ? 1 : 0,
					enable_id_trans: enable_id_trans ? 1 : 0,
					enable_duplicate_check: enable_duplicate_check ? 1 : 0,
				};

				if (enable_duplicate_check) {
					const duplicate_check_interval = this.getNodeParameter(
						'duplicate_check_interval',
						i,
						1800,
					) as number;
					body.duplicate_check_interval = duplicate_check_interval;
				}
			} else if (operation === 'sendTextCard') {
				const title = this.getNodeParameter('title', i) as string;
				const description = this.getNodeParameter('description', i) as string;
				const url = this.getNodeParameter('url', i) as string;
				const btntxt = this.getNodeParameter('btntxt', i, '详情') as string;
				const enable_id_trans = this.getNodeParameter('enable_id_trans', i, false) as boolean;
				const enable_duplicate_check = this.getNodeParameter(
					'enable_duplicate_check',
					i,
					false,
				) as boolean;

				body = {
					...body,
					msgtype: 'textcard',
					textcard: {
						title,
						description,
						url,
						btntxt,
					},
					enable_id_trans: enable_id_trans ? 1 : 0,
					enable_duplicate_check: enable_duplicate_check ? 1 : 0,
				};

				if (enable_duplicate_check) {
					const duplicate_check_interval = this.getNodeParameter(
						'duplicate_check_interval',
						i,
						1800,
					) as number;
					body.duplicate_check_interval = duplicate_check_interval;
				}
			} else if (operation === 'sendNews') {
				const articles = this.getNodeParameter('articles', i, {}) as IDataObject;
				const enable_id_trans = this.getNodeParameter('enable_id_trans', i, false) as boolean;
				const enable_duplicate_check = this.getNodeParameter(
					'enable_duplicate_check',
					i,
					false,
				) as boolean;

				const articleList = (articles.article as IDataObject[]) || [];

				body = {
					...body,
					msgtype: 'news',
					news: {
						articles: articleList,
					},
					enable_id_trans: enable_id_trans ? 1 : 0,
					enable_duplicate_check: enable_duplicate_check ? 1 : 0,
				};

				if (enable_duplicate_check) {
					const duplicate_check_interval = this.getNodeParameter(
						'duplicate_check_interval',
						i,
						1800,
					) as number;
					body.duplicate_check_interval = duplicate_check_interval;
				}
			} else if (operation === 'sendMpNews') {
				const articles = this.getNodeParameter('articles', i, {}) as IDataObject;
				const safe = this.getNodeParameter('safe', i, false) as boolean;
				const enable_id_trans = this.getNodeParameter('enable_id_trans', i, false) as boolean;
				const enable_duplicate_check = this.getNodeParameter(
					'enable_duplicate_check',
					i,
					false,
				) as boolean;

				const articleList = (articles.article as IDataObject[]) || [];

				body = {
					...body,
					msgtype: 'mpnews',
					mpnews: {
						articles: articleList,
					},
					safe: safe ? 1 : 0,
					enable_id_trans: enable_id_trans ? 1 : 0,
					enable_duplicate_check: enable_duplicate_check ? 1 : 0,
				};

				if (enable_duplicate_check) {
					const duplicate_check_interval = this.getNodeParameter(
						'duplicate_check_interval',
						i,
						1800,
					) as number;
					body.duplicate_check_interval = duplicate_check_interval;
				}
			} else if (operation === 'sendMiniprogramNotice') {
				const appid = this.getNodeParameter('appid', i) as string;
				const page = this.getNodeParameter('page', i, '') as string;
				const title = this.getNodeParameter('title', i) as string;
				const description = this.getNodeParameter('description', i, '') as string;
				const emphasis_first_item = this.getNodeParameter(
					'emphasis_first_item',
					i,
					false,
				) as boolean;
				const content_items = this.getNodeParameter('content_items', i, {}) as IDataObject;
				const enable_id_trans = this.getNodeParameter('enable_id_trans', i, false) as boolean;
				const enable_duplicate_check = this.getNodeParameter(
					'enable_duplicate_check',
					i,
					false,
				) as boolean;

				const contentItemList = (content_items.item as IDataObject[]) || [];

				body = {
					...body,
					msgtype: 'miniprogram_notice',
					miniprogram_notice: {
						appid,
						page,
						title,
						description,
						emphasis_first_item: emphasis_first_item ? true : false,
						content_item: contentItemList,
					},
					enable_id_trans: enable_id_trans ? 1 : 0,
					enable_duplicate_check: enable_duplicate_check ? 1 : 0,
				};

				if (enable_duplicate_check) {
					const duplicate_check_interval = this.getNodeParameter(
						'duplicate_check_interval',
						i,
						1800,
					) as number;
					body.duplicate_check_interval = duplicate_check_interval;
				}
			} else if (operation === 'sendTaskCard') {
				const title = this.getNodeParameter('title', i) as string;
				const description = this.getNodeParameter('description', i) as string;
				const url = this.getNodeParameter('url', i, '') as string;
				const task_id = this.getNodeParameter('task_id', i) as string;
				const buttons = this.getNodeParameter('buttons', i, {}) as IDataObject;
				const enable_id_trans = this.getNodeParameter('enable_id_trans', i, false) as boolean;
				const enable_duplicate_check = this.getNodeParameter(
					'enable_duplicate_check',
					i,
					false,
				) as boolean;

				const buttonList = ((buttons.button as IDataObject[]) || []).map((btn) => ({
					key: btn.key,
					name: btn.name,
					replace_name: btn.replace_name || '已处理',
					color: btn.color || 'blue',
					is_bold: btn.is_bold ? true : false,
				}));

				body = {
					...body,
					msgtype: 'taskcard',
					taskcard: {
						title,
						description,
						url,
						task_id,
						btn: buttonList,
					},
					enable_id_trans: enable_id_trans ? 1 : 0,
					enable_duplicate_check: enable_duplicate_check ? 1 : 0,
				};

				if (enable_duplicate_check) {
					const duplicate_check_interval = this.getNodeParameter(
						'duplicate_check_interval',
						i,
						1800,
					) as number;
					body.duplicate_check_interval = duplicate_check_interval;
				}
			} else if (operation === 'sendTemplateCard') {
				const card_type = this.getNodeParameter('card_type', i) as string;
				const enable_id_trans = this.getNodeParameter('enable_id_trans', i, false) as boolean;
				const enable_duplicate_check = this.getNodeParameter(
					'enable_duplicate_check',
					i,
					false,
				) as boolean;

				// 获取fixedCollection字段
				const sourceData = this.getNodeParameter('source', i, {}) as IDataObject;
				const mainTitleData = this.getNodeParameter('main_title', i, {}) as IDataObject;
				const emphasisContentData = this.getNodeParameter('emphasis_content', i, {}) as IDataObject;
				const quoteAreaData = this.getNodeParameter('quote_area', i, {}) as IDataObject;
				const sub_title_text = this.getNodeParameter('sub_title_text', i, '') as string;
				const horizontalContentListData = this.getNodeParameter('horizontal_content_list', i, {}) as IDataObject;
				const jumpListData = this.getNodeParameter('jump_list', i, {}) as IDataObject;
				const cardActionData = this.getNodeParameter('card_action', i, {}) as IDataObject;
				const task_id = this.getNodeParameter('task_id', i, '') as string;
				const actionMenuData = this.getNodeParameter('action_menu', i, {}) as IDataObject;

				const template_card: IDataObject = {
					card_type,
				};

				// 添加source
				if (sourceData.sourceInfo) {
					template_card.source = sourceData.sourceInfo;
				}

				// 添加main_title
				if (mainTitleData.titleInfo) {
					template_card.main_title = mainTitleData.titleInfo;
				}

				// 添加emphasis_content
				if (emphasisContentData.emphasisInfo) {
					template_card.emphasis_content = emphasisContentData.emphasisInfo;
				}

				// 添加quote_area
				if (quoteAreaData.quoteInfo) {
					template_card.quote_area = quoteAreaData.quoteInfo;
				}

				// 添加sub_title_text
				if (sub_title_text) {
					template_card.sub_title_text = sub_title_text;
				}

				// 添加horizontal_content_list
				if (horizontalContentListData.items && Array.isArray(horizontalContentListData.items)) {
					template_card.horizontal_content_list = horizontalContentListData.items;
				}

				// 添加jump_list
				if (jumpListData.items && Array.isArray(jumpListData.items)) {
					template_card.jump_list = jumpListData.items;
				}

				// 添加card_action
				if (cardActionData.actionInfo) {
					template_card.card_action = cardActionData.actionInfo;
				}

				// 添加task_id
				if (task_id) {
					template_card.task_id = task_id;
				}

				// 针对不同卡片类型的特殊处理
				if (card_type === 'button_interaction') {
					const buttonListData = this.getNodeParameter('button_list', i, {}) as IDataObject;
					if (buttonListData.buttons && Array.isArray(buttonListData.buttons)) {
						template_card.button_list = buttonListData.buttons;
					}
				} else if (
					card_type === 'vote_interaction' ||
					card_type === 'multiple_interaction'
				) {
					const checkbox_question_key = this.getNodeParameter(
						'checkbox_question_key',
						i,
						'',
					) as string;
					const checkbox_mode = this.getNodeParameter(
						'checkbox_mode',
						i,
						'single',
					) as string;
					const optionListData = this.getNodeParameter('option_list', i, {}) as IDataObject;
					const submit_button_text = this.getNodeParameter(
						'submit_button_text',
						i,
						'提交',
					) as string;
					const submit_button_key = this.getNodeParameter('submit_button_key', i, '') as string;

					if (checkbox_question_key) {
						template_card.checkbox = {
							question_key: checkbox_question_key,
							mode: checkbox_mode,
							option_list: optionListData.options || [],
						};
					}

					if (submit_button_key) {
						template_card.submit_button = {
							text: submit_button_text,
							key: submit_button_key,
						};
					}
				} else if (card_type === 'news_notice') {
					const imageTextAreaData = this.getNodeParameter('image_text_area', i, {}) as IDataObject;
					if (imageTextAreaData.imageTextInfo) {
						template_card.image_text_area = imageTextAreaData.imageTextInfo;
					}
				}

				// 添加action_menu
				if (actionMenuData.menuInfo) {
					const menuInfo = actionMenuData.menuInfo as IDataObject;
					const menuData: IDataObject = {};
					if (menuInfo.desc) {
						menuData.desc = menuInfo.desc;
					}
					if (menuInfo.action_list) {
						const actionListData = menuInfo.action_list as IDataObject;
						if (actionListData.actions && Array.isArray(actionListData.actions)) {
							menuData.action_list = actionListData.actions;
						}
					}
					if (Object.keys(menuData).length > 0) {
						template_card.action_menu = menuData;
					}
				}

				body = {
					...body,
					msgtype: 'template_card',
					template_card,
					enable_id_trans: enable_id_trans ? 1 : 0,
					enable_duplicate_check: enable_duplicate_check ? 1 : 0,
				};

				if (enable_duplicate_check) {
					const duplicate_check_interval = this.getNodeParameter(
						'duplicate_check_interval',
						i,
						1800,
					) as number;
					body.duplicate_check_interval = duplicate_check_interval;
				}
			} else if (operation === 'updateTemplateCard') {
				const response_code = this.getNodeParameter('response_code', i) as string;
				const card_type = this.getNodeParameter('card_type', i) as string;
				const button_key = this.getNodeParameter('button_key', i, '') as string;

				// 获取fixedCollection字段
				const sourceData = this.getNodeParameter('source', i, {}) as IDataObject;
				const mainTitleData = this.getNodeParameter('main_title', i, {}) as IDataObject;
				const emphasisContentData = this.getNodeParameter('emphasis_content', i, {}) as IDataObject;
				const quoteAreaData = this.getNodeParameter('quote_area', i, {}) as IDataObject;
				const sub_title_text = this.getNodeParameter('sub_title_text', i, '') as string;
				const horizontalContentListData = this.getNodeParameter('horizontal_content_list', i, {}) as IDataObject;
				const jumpListData = this.getNodeParameter('jump_list', i, {}) as IDataObject;
				const cardActionData = this.getNodeParameter('card_action', i, {}) as IDataObject;
				const task_id = this.getNodeParameter('task_id', i, '') as string;
				const actionMenuData = this.getNodeParameter('action_menu', i, {}) as IDataObject;

				const template_card: IDataObject = {
					card_type,
				};

				// 添加source
				if (sourceData.sourceInfo) {
					template_card.source = sourceData.sourceInfo;
				}

				// 添加main_title
				if (mainTitleData.titleInfo) {
					template_card.main_title = mainTitleData.titleInfo;
				}

				// 添加emphasis_content
				if (emphasisContentData.emphasisInfo) {
					template_card.emphasis_content = emphasisContentData.emphasisInfo;
				}

				// 添加quote_area
				if (quoteAreaData.quoteInfo) {
					template_card.quote_area = quoteAreaData.quoteInfo;
				}

				// 添加sub_title_text
				if (sub_title_text) {
					template_card.sub_title_text = sub_title_text;
				}

				// 添加horizontal_content_list
				if (horizontalContentListData.items && Array.isArray(horizontalContentListData.items)) {
					template_card.horizontal_content_list = horizontalContentListData.items;
				}

				// 添加jump_list
				if (jumpListData.items && Array.isArray(jumpListData.items)) {
					template_card.jump_list = jumpListData.items;
				}

				// 添加card_action
				if (cardActionData.actionInfo) {
					template_card.card_action = cardActionData.actionInfo;
				}

				// 添加task_id
				if (task_id) {
					template_card.task_id = task_id;
				}

				// 针对不同卡片类型的特殊处理
				if (card_type === 'button_interaction') {
					const buttonListData = this.getNodeParameter('button_list', i, {}) as IDataObject;
					if (buttonListData.buttons && Array.isArray(buttonListData.buttons)) {
						template_card.button_list = buttonListData.buttons;
					}
				} else if (
					card_type === 'vote_interaction' ||
					card_type === 'multiple_interaction'
				) {
					const checkbox_question_key = this.getNodeParameter(
						'checkbox_question_key',
						i,
						'',
					) as string;
					const checkbox_mode = this.getNodeParameter(
						'checkbox_mode',
						i,
						'single',
					) as string;
					const optionListData = this.getNodeParameter('option_list', i, {}) as IDataObject;
					const submit_button_text = this.getNodeParameter(
						'submit_button_text',
						i,
						'提交',
					) as string;
					const submit_button_key = this.getNodeParameter('submit_button_key', i, '') as string;

					if (checkbox_question_key) {
						template_card.checkbox = {
							question_key: checkbox_question_key,
							mode: checkbox_mode,
							option_list: optionListData.options || [],
						};
					}

					if (submit_button_key) {
						template_card.submit_button = {
							text: submit_button_text,
							key: submit_button_key,
						};
					}
				} else if (card_type === 'news_notice') {
					const imageTextAreaData = this.getNodeParameter('image_text_area', i, {}) as IDataObject;
					if (imageTextAreaData.imageTextInfo) {
						template_card.image_text_area = imageTextAreaData.imageTextInfo;
					}
				}

				// 添加action_menu
				if (actionMenuData.menuInfo) {
					const menuInfo = actionMenuData.menuInfo as IDataObject;
					const menuData: IDataObject = {};
					if (menuInfo.desc) {
						menuData.desc = menuInfo.desc;
					}
					if (menuInfo.action_list) {
						const actionListData = menuInfo.action_list as IDataObject;
						if (actionListData.actions && Array.isArray(actionListData.actions)) {
							menuData.action_list = actionListData.actions;
						}
					}
					if (Object.keys(menuData).length > 0) {
						template_card.action_menu = menuData;
					}
				}

				// 构建更新请求body
				body = {
					...body,
					response_code,
					template_card,
				};

				// 添加button_key（如果有）
				if (button_key) {
					body.button_key = button_key;
				}

				// 使用更新接口
				const response = await weComApiRequest.call(
					this,
					'POST',
					'/cgi-bin/message/update_template_card',
					body,
				);

				returnData.push({
					json: response as IDataObject,
					pairedItem: { item: i },
				});
				continue;
			} else if (operation === 'recallMessage') {
				const msgid = this.getNodeParameter('msgid', i) as string;

				const recallBody = {
					msgid,
				};

				// 使用撤回消息接口
				const response = await weComApiRequest.call(
					this,
					'POST',
					'/cgi-bin/message/recall',
					recallBody,
				);

				returnData.push({
					json: response as IDataObject,
					pairedItem: { item: i },
				});
				continue;
			} else if (operation === 'sendSchoolNotice') {
				const schoolTouser = this.getNodeParameter('touser', i, '') as string;
				const schoolToparty = this.getNodeParameter('toparty', i, '') as string;
				const schoolTotag = this.getNodeParameter('totag', i, '') as string;
				const title = this.getNodeParameter('title', i) as string;
				const description = this.getNodeParameter('description', i) as string;
				const url = this.getNodeParameter('url', i, '') as string;
				const emphasis_first_item = this.getNodeParameter('emphasis_first_item', i, false) as boolean;
				const content_item = this.getNodeParameter('content_item', i, '[]') as string;

				const schoolBody: IDataObject = {
					touser: schoolTouser,
					toparty: schoolToparty,
					totag: schoolTotag,
					agentid: agentId,
					msgtype: 'school_notice',
					school_notice: {
						title,
						description,
					},
				};

				if (url) {
					(schoolBody.school_notice as IDataObject).url = url;
				}

				(schoolBody.school_notice as IDataObject).emphasis_first_item = emphasis_first_item;

				if (content_item && content_item !== '[]') {
					try {
						(schoolBody.school_notice as IDataObject).content_item = JSON.parse(content_item);
					} catch (error) {
						throw new NodeOperationError(
							this.getNode(),
							`content_item 必须是有效的 JSON 数组: ${error.message}`,
							{ itemIndex: i },
						);
					}
				}

				// 使用发送学校通知接口
				const response = await weComApiRequest.call(
					this,
					'POST',
					'/cgi-bin/message/send',
					schoolBody,
				);

				returnData.push({
					json: response as IDataObject,
					pairedItem: { item: i },
				});
				continue;
			}

			const response = await weComApiRequest.call(this, 'POST', '/cgi-bin/message/send', body);

			returnData.push({
				json: response as IDataObject,
				pairedItem: { item: i },
			});
		} catch (error) {
			if (this.continueOnFail()) {
				returnData.push({
					json: {
						error: error.message,
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

