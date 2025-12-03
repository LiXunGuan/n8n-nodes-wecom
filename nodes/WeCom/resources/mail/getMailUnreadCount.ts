import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGetMailUnreadCount = {
	resource: ['mail'],
	operation: ['getMailUnreadCount'],
};

export const getMailUnreadCountDescription: INodeProperties[] = [
	{
		displayName: '邮箱地址',
		name: 'mailbox',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForGetMailUnreadCount,
		},
		default: '',
		placeholder: 'user@example.com',
		description: '要查询未读邮件数量的邮箱地址。<a href="https://developer.work.weixin.qq.com/document/path/95486" target="_blank">更多信息</a>',
	},
];

