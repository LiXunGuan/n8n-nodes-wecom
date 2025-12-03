import type { INodeProperties } from 'n8n-workflow';

const showOnlyForUpdateAppMailbox = {
	resource: ['mail'],
	operation: ['updateAppMailbox'],
};

export const updateAppMailboxDescription: INodeProperties[] = [
	{
		displayName: '邮箱地址',
		name: 'mailbox',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForUpdateAppMailbox,
		},
		default: '',
		placeholder: 'app@example.com',
		description: '要更新的应用邮箱地址。<a href="https://developer.work.weixin.qq.com/document/path/95486" target="_blank">更多信息</a>',
	},
	{
		displayName: '邮箱名称',
		name: 'name',
		type: 'string',
		displayOptions: {
			show: showOnlyForUpdateAppMailbox,
		},
		default: '',
		placeholder: '应用邮箱',
		description: '可选。应用邮箱的新名称。<a href="https://developer.work.weixin.qq.com/document/path/95486" target="_blank">更多信息</a>',
	},
	{
		displayName: '邮箱描述',
		name: 'remark',
		type: 'string',
		displayOptions: {
			show: showOnlyForUpdateAppMailbox,
		},
		default: '',
		placeholder: '用于系统通知',
		description: '可选。应用邮箱的备注信息。<a href="https://developer.work.weixin.qq.com/document/path/95486" target="_blank">更多信息</a>',
	},
];

