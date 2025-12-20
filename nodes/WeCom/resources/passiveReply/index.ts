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
		description: '此节点生成并返回加密的XML响应。使用步骤：连接「企业微信消息接收（被动回复）触发器」→ 中间处理节点（可选）→ 本节点。本节点必须是工作流的最后一个节点。',
	},
];

