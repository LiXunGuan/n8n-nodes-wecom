import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGetAppMailbox = {
	resource: ['mail'],
	operation: ['getAppMailbox'],
};

export const getAppMailboxDescription: INodeProperties[] = [
	{
		displayName: '邮箱地址',
		name: 'mailbox',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForGetAppMailbox,
		},
		default: '',
		placeholder: 'app@example.com',
		description: '要查询的应用邮箱地址。<a href="https://developer.work.weixin.qq.com/document/path/95486" target="_blank">更多信息</a>',
	},
];

