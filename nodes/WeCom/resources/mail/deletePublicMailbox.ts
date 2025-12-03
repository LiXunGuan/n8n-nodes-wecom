import type { INodeProperties } from 'n8n-workflow';

const showOnlyForDeletePublicMailbox = {
	resource: ['mail'],
	operation: ['deletePublicMailbox'],
};

export const deletePublicMailboxDescription: INodeProperties[] = [
	{
		displayName: '邮箱地址',
		name: 'mailbox',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForDeletePublicMailbox,
		},
		default: '',
		placeholder: 'public@example.com',
		description: '要删除的公共邮箱地址。<a href="https://developer.work.weixin.qq.com/document/path/95486" target="_blank">更多信息</a>',
	},
];

