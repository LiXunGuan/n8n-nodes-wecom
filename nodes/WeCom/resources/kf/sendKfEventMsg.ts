import type { INodeProperties } from 'n8n-workflow';

/**
 * 发送事件响应消息参数定义
 * 官方文档：https://developer.work.weixin.qq.com/document/path/95122
 *
 * 用于在用户进入会话等事件发生时，快速响应用户
 * 支持的消息类型：
 * - text: 文本消息
 * - msgmenu: 菜单消息
 */

const showOnlyForSendKfEventMsg = {
	resource: ['kf'],
	operation: ['sendKfEventMsg'],
};

export const sendKfEventMsgDescription: INodeProperties[] = [
	{
		displayName: '消息来源Code',
		name: 'code',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForSendKfEventMsg,
		},
		default: '',
		description: '事件响应消息对应的code，通过事件推送下发（如进入会话事件）',
		placeholder: 'CODE_FROM_EVENT',
	},
	{
		displayName: '消息类型',
		name: 'msgtype',
		type: 'options',
		required: true,
		displayOptions: {
			show: showOnlyForSendKfEventMsg,
		},
		options: [
			{
				name: '文本消息',
				value: 'text',
				description: '发送纯文本欢迎消息',
			},
			{
				name: '菜单消息',
				value: 'msgmenu',
				description: '发送菜单选项消息',
			},
		],
		default: 'text',
		description: '选择要发送的消息类型',
	},

	// ==================== 文本消息参数 ====================
	{
		displayName: '消息内容',
		name: 'text_content',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		required: true,
		displayOptions: {
			show: {
				...showOnlyForSendKfEventMsg,
				msgtype: ['text'],
			},
		},
		default: '',
		description: '文本消息内容，最长不超过2048个字节',
		placeholder: '您好，欢迎咨询！',
	},

	// ==================== 菜单消息参数 ====================
	{
		displayName: '菜单标题',
		name: 'msgmenu_head_content',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				...showOnlyForSendKfEventMsg,
				msgtype: ['msgmenu'],
			},
		},
		default: '',
		description: '菜单消息头部文案',
		placeholder: '请选择您需要的服务：',
	},
	{
		displayName: '菜单项列表',
		name: 'msgmenu_list',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		required: true,
		displayOptions: {
			show: {
				...showOnlyForSendKfEventMsg,
				msgtype: ['msgmenu'],
			},
		},
		default: {},
		description: '菜单项列表，最多3个',
		placeholder: '添加菜单项',
		options: [
			{
				name: 'items',
				displayName: '菜单项',
				values: [
					{
						displayName: '回复内容',
						name: 'reply_content',
						type: 'string',
						default: '',
						description: '点击后自动回复的内容（菜单ID）',
						placeholder: 'product_inquiry',
					},
					{
						displayName: '小程序AppID',
						name: 'appid',
						type: 'string',
						default: '',
						description: '小程序的AppID',
						placeholder: 'wx1234567890abcdef',
					},
					{
						displayName: '小程序页面路径',
						name: 'pagepath',
						type: 'string',
						default: '',
						description: '小程序的页面路径',
						placeholder: 'pages/index/index',
					},
					{
						displayName: '菜单文案',
						name: 'content',
						type: 'string',
						default: '',
						description: '菜单项显示的文字',
						placeholder: '产品咨询',
					},
					{
						displayName: '菜单项类型',
						name: 'type',
						type: 'options',
						options: [
							{
								name: '点击菜单',
								value: 'click',
								description: '点击后回复指定内容',
							},
							{
								name: '跳转链接',
								value: 'view',
								description: '点击后跳转到指定URL',
							},
							{
								name: '小程序',
								value: 'miniprogram',
								description: '点击后打开小程序',
							},
						],
						default: 'click',
						description: '菜单项的类型',
					},
					{
						displayName: '跳转URL',
						name: 'url',
						type: 'string',
						default: '',
						description: '点击后跳转的URL',
						placeholder: 'https://example.com',
					},
			],
			},
		],
	},
	{
		displayName: '菜单尾部文案',
		name: 'msgmenu_tail_content',
		type: 'string',
		displayOptions: {
			show: {
				...showOnlyForSendKfEventMsg,
				msgtype: ['msgmenu'],
			},
		},
		default: '',
		description: '菜单消息尾部文案（可选）',
		placeholder: '如有其他问题请直接回复',
	},
];
