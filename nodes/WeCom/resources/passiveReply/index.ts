import type { INodeProperties } from 'n8n-workflow';

const showOnlyForPassiveReply = {
	resource: ['passiveReply'],
};

export const passiveReplyDescription: INodeProperties[] = [
	{
		displayName: '操作',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForPassiveReply,
		},
		options: [
			{
				name: '被动回复消息',
				value: 'reply',
				action: '被动回复企业微信消息',
				description: '被动回复企业微信消息（需配合「企业微信消息接收（被动回复）触发器」使用）',
			},
		],
		default: 'reply',
	},
	{
		displayName: '回复消息类型',
		name: 'replyType',
		type: 'options',
		displayOptions: {
			show: {
				...showOnlyForPassiveReply,
				operation: ['reply'],
			},
		},
		options: [
			{
				name: '文本消息',
				value: 'text',
				description: '回复文本消息',
			},
			{
				name: '图片消息',
				value: 'image',
				description: '回复图片消息',
			},
			{
				name: '语音消息',
				value: 'voice',
				description: '回复语音消息',
			},
			{
				name: '视频消息',
				value: 'video',
				description: '回复视频消息',
			},
			{
				name: '图文消息',
				value: 'news',
				description: '回复图文消息',
			},
			{
				name: '模板卡片更新消息',
				value: 'update_template_card',
				description: '更新模板卡片消息',
			},
		],
		default: 'text',
		description: '被动回复的消息类型',
	},
	{
		displayName: '文本内容',
		name: 'textContent',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		displayOptions: {
			show: {
				...showOnlyForPassiveReply,
				operation: ['reply'],
				replyType: ['text'],
			},
		},
		default: '',
		required: true,
		description: '回复的文本内容',
		placeholder: '感谢您的消息！',
	},
	{
		displayName: '媒体ID',
		name: 'mediaId',
		type: 'string',
		displayOptions: {
			show: {
				...showOnlyForPassiveReply,
				operation: ['reply'],
				replyType: ['image', 'voice', 'video'],
			},
		},
		default: '',
		required: true,
		description: '媒体文件ID（需先通过素材管理接口上传获得）',
		hint: '可以使用表达式从前面节点获取，如：{{$json.media_id}}',
	},
	{
		displayName: '视频标题',
		name: 'videoTitle',
		type: 'string',
		displayOptions: {
			show: {
				...showOnlyForPassiveReply,
				operation: ['reply'],
				replyType: ['video'],
			},
		},
		default: '',
		description: '视频标题（可选）',
	},
	{
		displayName: '视频描述',
		name: 'videoDescription',
		type: 'string',
		typeOptions: {
			rows: 2,
		},
		displayOptions: {
			show: {
				...showOnlyForPassiveReply,
				operation: ['reply'],
				replyType: ['video'],
			},
		},
		default: '',
		description: '视频描述（可选）',
	},
	{
		displayName: '图文消息',
		name: 'articles',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		displayOptions: {
			show: {
				...showOnlyForPassiveReply,
				operation: ['reply'],
				replyType: ['news'],
			},
		},
		default: {},
		placeholder: '添加图文',
		options: [
			{
				name: 'article',
				displayName: '图文',
				values: [
					{
						displayName: '标题',
						name: 'title',
						type: 'string',
						default: '',
						required: true,
						description: '图文标题',
					},
					{
						displayName: '描述',
						name: 'description',
						type: 'string',
						typeOptions: {
							rows: 2,
						},
						default: '',
						description: '图文描述',
					},
					{
						displayName: '链接',
						name: 'url',
						type: 'string',
						default: '',
						required: true,
						description: '点击后跳转的链接',
					},
					{
						displayName: '封面图片链接',
						name: 'picUrl',
						type: 'string',
						default: '',
						description: '图文封面图片URL',
					},
				],
			},
		],
		description: '图文消息列表',
	},
	{
		displayName: '模板卡片类型',
		name: 'cardType',
		type: 'options',
		options: [
			{
				name: '文本通知型',
				value: 'text_notice',
				description: '文本通知型模板卡片',
			},
			{
				name: '图文展示型',
				value: 'news_notice',
				description: '图文展示型模板卡片',
			},
			{
				name: '按钮交互型',
				value: 'button_interaction',
				description: '按钮交互型模板卡片',
			},
			{
				name: '投票选择型',
				value: 'vote_interaction',
				description: '投票选择型模板卡片',
			},
			{
				name: '多项选择型',
				value: 'multiple_interaction',
				description: '多项选择型模板卡片',
			},
		],
		displayOptions: {
			show: {
				...showOnlyForPassiveReply,
				operation: ['reply'],
				replyType: ['update_template_card'],
			},
		},
		default: 'text_notice',
		required: true,
		description: '选择模板卡片的类型',
	},
	{
		displayName: '卡片来源',
		name: 'cardSource',
		type: 'json',
		default: '{}',
		placeholder: '{"icon_url": "https://...", "desc": "来源描述"}',
		displayOptions: {
			show: {
				...showOnlyForPassiveReply,
				operation: ['reply'],
				replyType: ['update_template_card'],
			},
		},
		description: '可选。模板卡片来源样式信息',
	},
	{
		displayName: '一级标题',
		name: 'cardMainTitle',
		type: 'json',
		default: '{"title": ""}',
		placeholder: '{"title": "欢迎使用", "desc": "副标题"}',
		displayOptions: {
			show: {
				...showOnlyForPassiveReply,
				operation: ['reply'],
				replyType: ['update_template_card'],
			},
		},
		required: true,
		description: '模板卡片的主要内容，包含一级标题和标题辅助信息',
	},
	{
		displayName: '关键数据样式',
		name: 'cardEmphasisContent',
		type: 'json',
		default: '{}',
		placeholder: '{"title": "100", "desc": "数据描述"}',
		displayOptions: {
			show: {
				...showOnlyForPassiveReply,
				operation: ['reply'],
				replyType: ['update_template_card'],
			},
		},
		description: '可选。关键数据样式',
	},
	{
		displayName: '引用文献样式',
		name: 'cardQuoteArea',
		type: 'json',
		default: '{}',
		placeholder: '{"type": 1, "title": "引用标题", "quote_text": "引用内容"}',
		displayOptions: {
			show: {
				...showOnlyForPassiveReply,
				operation: ['reply'],
				replyType: ['update_template_card'],
			},
		},
		description: '可选。引用文献样式，建议不与关键数据共用',
	},
	{
		displayName: '二级普通文本',
		name: 'cardSubTitleText',
		type: 'string',
		default: '',
		placeholder: '请输入二级文本内容',
		displayOptions: {
			show: {
				...showOnlyForPassiveReply,
				operation: ['reply'],
				replyType: ['update_template_card'],
			},
		},
		description: '可选。二级普通文本（支持ID转译），建议不超过160个字',
	},
	{
		displayName: '二级标题+文本列表',
		name: 'cardHorizontalContentList',
		type: 'json',
		typeOptions: {
			rows: 4,
		},
		default: '[]',
		placeholder: '[{"keyname": "姓名", "value": "张三"}, {"keyname": "部门", "value": "技术部"}]',
		displayOptions: {
			show: {
				...showOnlyForPassiveReply,
				operation: ['reply'],
				replyType: ['update_template_card'],
			},
		},
		description: '可选。二级标题+文本列表，列表长度不超过6',
	},
	{
		displayName: '跳转指引样式列表',
		name: 'cardJumpList',
		type: 'json',
		typeOptions: {
			rows: 4,
		},
		default: '[]',
		placeholder: '[{"type": 1, "title": "查看详情", "url": "https://..."}]',
		displayOptions: {
			show: {
				...showOnlyForPassiveReply,
				operation: ['reply'],
				replyType: ['update_template_card'],
			},
		},
		description: '可选。跳转指引样式的列表，列表长度不超过3',
	},
	{
		displayName: '整体卡片点击跳转',
		name: 'cardAction',
		type: 'json',
		default: '{}',
		placeholder: '{"type": 1, "url": "https://..."}',
		displayOptions: {
			show: {
				...showOnlyForPassiveReply,
				operation: ['reply'],
				replyType: ['update_template_card'],
				cardType: ['text_notice'],
			},
		},
		description: '文本通知型必填。整体卡片的点击跳转事件',
	},
	{
		displayName: '任务ID',
		name: 'cardTaskId',
		type: 'string',
		default: '',
		placeholder: 'task_001',
		displayOptions: {
			show: {
				...showOnlyForPassiveReply,
				operation: ['reply'],
				replyType: ['update_template_card'],
			},
		},
		description: '可选。任务ID，同一个应用任务ID不能重复',
	},
	{
		displayName: '按钮列表',
		name: 'cardButtonList',
		type: 'json',
		typeOptions: {
			rows: 4,
		},
		default: '[]',
		placeholder: '[{"text": "按钮1", "style": 1, "key": "btn1"}, {"text": "按钮2", "style": 2, "key": "btn2"}]',
		displayOptions: {
			show: {
				...showOnlyForPassiveReply,
				operation: ['reply'],
				replyType: ['update_template_card'],
				cardType: ['button_interaction'],
			},
		},
		description: '按钮交互型卡片的按钮列表，列表长度不超过6',
	},
	{
		displayName: '选择题Key值',
		name: 'cardCheckboxQuestionKey',
		type: 'string',
		default: '',
		placeholder: 'question_001',
		displayOptions: {
			show: {
				...showOnlyForPassiveReply,
				operation: ['reply'],
				replyType: ['update_template_card'],
				cardType: ['vote_interaction', 'multiple_interaction'],
			},
		},
		description: '可选。选择题key值，用户提交选项后会产生回调事件',
	},
	{
		displayName: '选择题模式',
		name: 'cardCheckboxMode',
		type: 'options',
		options: [
			{
				name: '单选',
				value: 'single',
			},
			{
				name: '多选',
				value: 'multiple',
			},
		],
		default: 'single',
		displayOptions: {
			show: {
				...showOnlyForPassiveReply,
				operation: ['reply'],
				replyType: ['update_template_card'],
				cardType: ['vote_interaction', 'multiple_interaction'],
			},
		},
		description: '可选。选择题模式，单选或多选',
	},
	{
		displayName: '选项列表',
		name: 'cardOptionList',
		type: 'json',
		typeOptions: {
			rows: 4,
		},
		default: '[]',
		placeholder: '[{"id": "option1", "text": "选项1"}, {"id": "option2", "text": "选项2"}]',
		displayOptions: {
			show: {
				...showOnlyForPassiveReply,
				operation: ['reply'],
				replyType: ['update_template_card'],
				cardType: ['vote_interaction', 'multiple_interaction'],
			},
		},
		required: true,
		description: '选项列表，列表长度不超过10',
	},
	{
		displayName: '提交按钮文案',
		name: 'cardSubmitButtonText',
		type: 'string',
		default: '提交',
		placeholder: '提交',
		displayOptions: {
			show: {
				...showOnlyForPassiveReply,
				operation: ['reply'],
				replyType: ['update_template_card'],
				cardType: ['vote_interaction', 'multiple_interaction'],
			},
		},
		description: '可选。提交按钮文案，建议不超过10个字',
	},
	{
		displayName: '提交按钮Key值',
		name: 'cardSubmitButtonKey',
		type: 'string',
		default: '',
		placeholder: 'submit_001',
		displayOptions: {
			show: {
				...showOnlyForPassiveReply,
				operation: ['reply'],
				replyType: ['update_template_card'],
				cardType: ['vote_interaction', 'multiple_interaction'],
			},
		},
		required: true,
		description: '提交按钮key值，用户提交选项后会产生回调事件',
	},
	{
		displayName: '图片样式',
		name: 'cardImageTextArea',
		type: 'json',
		default: '{}',
		placeholder: '{"type": 1, "url": "https://...", "title": "图片标题", "desc": "图片描述"}',
		displayOptions: {
			show: {
				...showOnlyForPassiveReply,
				operation: ['reply'],
				replyType: ['update_template_card'],
				cardType: ['news_notice'],
			},
		},
		description: '可选。左图右文样式',
	},
	{
		displayName: '卡片右上角更多操作按钮',
		name: 'cardActionMenu',
		type: 'json',
		default: '{}',
		placeholder: '{"desc": "操作菜单", "action_list": [{"text": "操作1", "key": "action1"}]}',
		displayOptions: {
			show: {
				...showOnlyForPassiveReply,
				operation: ['reply'],
				replyType: ['update_template_card'],
			},
		},
		description: '可选。卡片右上角更多操作按钮',
	},
	{
		displayName: '按钮替换名称',
		name: 'buttonReplaceName',
		type: 'string',
		displayOptions: {
			show: {
				...showOnlyForPassiveReply,
				operation: ['reply'],
				replyType: ['update_template_card'],
			},
		},
		default: '',
		description: '可选。按钮替换名称，用于简单的按钮状态更新',
		placeholder: 'replace_name',
		hint: '如果只需要更新按钮状态，可以只填写此字段而不填写完整卡片内容',
	},
	{
		displayName: '使用说明',
		name: 'passiveReplyNotice',
		type: 'notice',
		displayOptions: {
			show: {
				...showOnlyForPassiveReply,
				operation: ['reply'],
			},
		},
		default: '',
		description: '工作流结构：企业微信消息接收（被动回复）触发器 → 处理节点（可选）→ 本节点。本节点必须是最后一个节点，须在 5 秒内返回响应。',
	},
];

