import type { INodeProperties } from 'n8n-workflow';

const showOnlyForToggleMailboxStatus = {
	resource: ['mail'],
	operation: ['toggleMailboxStatus'],
};

export const toggleMailboxStatusDescription: INodeProperties[] = [
	{
		displayName: '邮箱地址',
		name: 'mailbox',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForToggleMailboxStatus,
		},
		default: '',
		placeholder: 'user@example.com',
		description: '要启用或禁用的邮箱地址。<a href="https://developer.work.weixin.qq.com/document/path/95486" target="_blank">更多信息</a>',
	},
	{
		displayName: '操作',
		name: 'operation_type',
		type: 'options',
		required: true,
		displayOptions: {
			show: showOnlyForToggleMailboxStatus,
		},
		options: [
			{
				name: '启用',
				value: 1,
			},
			{
				name: '禁用',
				value: 2,
			},
		],
		default: 1,
		description: '选择启用或禁用邮箱。启用后邮箱可正常使用，禁用后邮箱将无法收发邮件。<a href="https://developer.work.weixin.qq.com/document/path/95486" target="_blank">更多信息</a>',
	},
];

