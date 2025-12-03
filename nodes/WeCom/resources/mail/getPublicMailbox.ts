import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGetPublicMailbox = {
	resource: ['mail'],
	operation: ['getPublicMailbox'],
};

export const getPublicMailboxDescription: INodeProperties[] = [
	{
		displayName: '邮箱地址',
		name: 'mailbox',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForGetPublicMailbox,
		},
		default: '',
		placeholder: 'public@example.com',
		description: '要查询的公共邮箱地址。<a href="https://developer.work.weixin.qq.com/document/path/95486" target="_blank">更多信息</a>',
	},
];

