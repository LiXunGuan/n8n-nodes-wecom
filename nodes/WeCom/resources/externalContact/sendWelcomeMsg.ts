import type { INodeProperties } from 'n8n-workflow';

const showOnly = {
	resource: ['externalContact'],
	operation: ['sendWelcomeMsg'],
};

export const sendWelcomeMsgDescription: INodeProperties[] = [
	{
		displayName: '欢迎语Code',
		name: 'welcome_code',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: showOnly,
		},
		hint: '从添加外部联系人事件回调中获取的welcome_code',
		description: '通过添加外部联系人事件推送获取的welcome_code，该code有效期为20秒，过期后无法使用。需要在收到事件后立即调用此接口。<a href="https://developer.work.weixin.qq.com/document/path/92137" target="_blank">官方文档</a>',
		placeholder: 'CODE_FROM_EVENT',
	},
	{
		displayName: '消息内容',
		name: 'text',
		type: 'json',
		default: '{}',
		displayOptions: {
			show: showOnly,
		},
		hint: '可选。欢迎语的消息内容JSON对象',
		description: '欢迎语的消息内容，包含text文本消息和attachments附件消息。支持发送文本、图片、链接、小程序等。具体格式参考官方文档。<a href="https://developer.work.weixin.qq.com/document/path/92137" target="_blank">官方文档</a>',
		placeholder: '{"text":{"content":"你好，欢迎！"},"attachments":[{"msgtype":"image","image":{"media_id":"MEDIA_ID"}}]}',
	},
];

