import type { INodeProperties } from 'n8n-workflow';

const showOnlyForAllocateMailAdvancedAccount = {
	resource: ['mail'],
	operation: ['allocateMailAdvancedAccount'],
};

export const allocateMailAdvancedAccountDescription: INodeProperties[] = [
	{
		displayName: '邮箱列表',
		name: 'mailbox_list',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForAllocateMailAdvancedAccount,
		},
		default: '',
		placeholder: 'user1@example.com,user2@example.com',
		description: '要分配高级功能账号的邮箱地址列表，多个邮箱用英文逗号分隔。<a href="https://developer.work.weixin.qq.com/document/path/95486" target="_blank">更多信息</a>',
	},
];

