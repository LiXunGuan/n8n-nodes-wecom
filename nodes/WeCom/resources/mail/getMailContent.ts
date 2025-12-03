import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGetMailContent = {
	resource: ['mail'],
	operation: ['getMailContent'],
};

export const getMailContentDescription: INodeProperties[] = [
	{
		displayName: '邮箱地址',
		name: 'mailbox',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForGetMailContent,
		},
		default: '',
		placeholder: 'user@example.com',
		description: '要查询邮件的企业邮箱地址。<a href="https://developer.work.weixin.qq.com/document/path/97979" target="_blank">更多信息</a>',
	},
	{
		displayName: '邮件ID',
		name: 'mailid',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForGetMailContent,
		},
		default: '',
		placeholder: 'MAIL_ID_STRING',
		description: '邮件的唯一标识ID，从邮件列表接口获取。<a href="https://developer.work.weixin.qq.com/document/path/97979" target="_blank">更多信息</a>',
	},
];

