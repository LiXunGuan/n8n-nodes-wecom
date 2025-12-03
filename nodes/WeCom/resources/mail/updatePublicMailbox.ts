import type { INodeProperties } from 'n8n-workflow';

const showOnlyForUpdatePublicMailbox = {
	resource: ['mail'],
	operation: ['updatePublicMailbox'],
};

export const updatePublicMailboxDescription: INodeProperties[] = [
	{
		displayName: '邮箱地址',
		name: 'mailbox',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForUpdatePublicMailbox,
		},
		default: '',
		placeholder: 'public@example.com',
		description: '要更新的公共邮箱地址。<a href="https://developer.work.weixin.qq.com/document/path/95486" target="_blank">更多信息</a>',
	},
	{
		displayName: '邮箱名称',
		name: 'name',
		type: 'string',
		displayOptions: {
			show: showOnlyForUpdatePublicMailbox,
		},
		default: '',
		placeholder: '客户服务',
		description: '可选。公共邮箱的新名称。<a href="https://developer.work.weixin.qq.com/document/path/95486" target="_blank">更多信息</a>',
	},
	{
		displayName: '管理员列表',
		name: 'admin_list',
		type: 'string',
		displayOptions: {
			show: showOnlyForUpdatePublicMailbox,
		},
		default: '',
		placeholder: 'admin1@example.com,admin2@example.com',
		description: '可选。公共邮箱管理员的邮箱列表，多个邮箱用英文逗号分隔。填写后将覆盖原有管理员列表。<a href="https://developer.work.weixin.qq.com/document/path/95486" target="_blank">更多信息</a>',
	},
	{
		displayName: '成员列表',
		name: 'member_list',
		type: 'string',
		displayOptions: {
			show: showOnlyForUpdatePublicMailbox,
		},
		default: '',
		placeholder: 'user1@example.com,user2@example.com',
		description: '可选。公共邮箱成员的邮箱列表，多个邮箱用英文逗号分隔。填写后将覆盖原有成员列表。<a href="https://developer.work.weixin.qq.com/document/path/95486" target="_blank">更多信息</a>',
	},
];

