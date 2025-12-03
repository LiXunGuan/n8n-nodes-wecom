import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSearchPublicMailbox = {
	resource: ['mail'],
	operation: ['searchPublicMailbox'],
};

export const searchPublicMailboxDescription: INodeProperties[] = [
	{
		displayName: '搜索关键词',
		name: 'fuzzy_mailbox',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForSearchPublicMailbox,
		},
		default: '',
		placeholder: 'service',
		description: '用于模糊搜索公共邮箱的关键词，支持邮箱地址和名称匹配。<a href="https://developer.work.weixin.qq.com/document/path/95486" target="_blank">更多信息</a>',
	},
	{
		displayName: '返回数量',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		displayOptions: {
			show: showOnlyForSearchPublicMailbox,
		},
		default: 50,
		description: '返回的公共邮箱数量，最大值为100。<a href="https://developer.work.weixin.qq.com/document/path/95486" target="_blank">更多信息</a>',
	},
	{
		displayName: '游标',
		name: 'cursor',
		type: 'string',
		displayOptions: {
			show: showOnlyForSearchPublicMailbox,
		},
		default: '',
		placeholder: 'CURSOR_STRING',
		description: '可选。用于分页查询的游标，从上次响应中获取。<a href="https://developer.work.weixin.qq.com/document/path/95486" target="_blank">更多信息</a>',
	},
];

