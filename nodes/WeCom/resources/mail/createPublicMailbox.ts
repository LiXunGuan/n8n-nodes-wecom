import type { INodeProperties } from 'n8n-workflow';

const showOnlyForCreatePublicMailbox = {
	resource: ['mail'],
	operation: ['createPublicMailbox'],
};

export const createPublicMailboxDescription: INodeProperties[] = [
	{
		displayName: '邮箱地址',
		name: 'mailbox',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForCreatePublicMailbox,
		},
		default: '',
		placeholder: 'public@example.com',
		description: '公共邮箱的邮箱地址，作为公共邮箱的唯一标识。<a href="https://developer.work.weixin.qq.com/document/path/95486" target="_blank">更多信息</a>',
	},
	{
		displayName: '邮箱名称',
		name: 'name',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForCreatePublicMailbox,
		},
		default: '',
		placeholder: '客户服务',
		description: '公共邮箱的显示名称。<a href="https://developer.work.weixin.qq.com/document/path/95486" target="_blank">更多信息</a>',
	},
	{
		displayName: '管理员列表',
		name: 'admin_list',
		type: 'string',
		displayOptions: {
			show: showOnlyForCreatePublicMailbox,
		},
		default: '',
		placeholder: 'admin1@example.com,admin2@example.com',
		description: '可选。公共邮箱管理员的邮箱列表，多个邮箱用英文逗号分隔。<a href="https://developer.work.weixin.qq.com/document/path/95486" target="_blank">更多信息</a>',
	},
	{
		displayName: '成员列表',
		name: 'member_list',
		type: 'string',
		displayOptions: {
			show: showOnlyForCreatePublicMailbox,
		},
		default: '',
		placeholder: 'user1@example.com,user2@example.com',
		description: '可选。公共邮箱成员的邮箱列表，多个邮箱用英文逗号分隔。<a href="https://developer.work.weixin.qq.com/document/path/95486" target="_blank">更多信息</a>',
	},
];

