import type { INodeProperties } from 'n8n-workflow';

const showOnly = {
	resource: ['externalContact'],
	operation: ['addMsgTemplate'],
};

export const addMsgTemplateDescription: INodeProperties[] = [
	{
		displayName: '群发任务类型',
		name: 'chat_type',
		type: 'options',
		options: [
			{
				name: '单聊',
				value: 'single',
				description: '发送给客户个人',
			},
			{
				name: '群聊',
				value: 'group',
				description: '发送到客户群',
			},
		],
		default: 'single',
		displayOptions: {
			show: showOnly,
		},
		hint: '群发任务的类型：single-客户单聊，group-客户群',
		description: '群发任务的类型。single表示发送给客户，group表示发送到客户群。<a href="https://developer.work.weixin.qq.com/document/path/92135" target="_blank">官方文档</a>',
	},
	{
		displayName: '发送范围',
		name: 'sender',
		type: 'json',
		default: '{}',
		displayOptions: {
			show: showOnly,
		},
		hint: '可选。指定发送成员和客户范围的JSON对象',
		description: '指定群发的成员范围，包含sender字段（发送成员的UserID列表）和filter字段（客户筛选条件）。格式参考官方文档。<a href="https://developer.work.weixin.qq.com/document/path/92135" target="_blank">官方文档</a>',
		placeholder: '{"sender_list":["zhangsan","lisi"],"filter":{"tag_id":["xxx"]}}',
	},
	{
		displayName: '消息内容',
		name: 'text',
		type: 'json',
		required: true,
		default: '{}',
		displayOptions: {
			show: showOnly,
		},
		hint: '群发消息的内容，支持文本、图片、链接、小程序等',
		description: '群发消息内容的JSON对象，包含text文本消息和attachments附件消息。支持发送文本、图片、链接、小程序等多种类型消息。<a href="https://developer.work.weixin.qq.com/document/path/92135" target="_blank">官方文档</a>',
		placeholder: '{"text":{"content":"亲爱的客户"},"attachments":[{"msgtype":"image","image":{"media_id":"MEDIA_ID"}}]}',
	},
	{
		displayName: '是否允许成员在待发送客户列表中重新进行选择',
		name: 'allow_select',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: showOnly,
		},
		hint: '可选。是否允许成员在待发送客户列表中重新选择客户',
		description: '是否允许成员在待发送客户列表中重新进行选择，默认为false。设置为true时，成员可以在企业微信中修改要发送的客户列表。<a href="https://developer.work.weixin.qq.com/document/path/92135" target="_blank">官方文档</a>',
	},
];

