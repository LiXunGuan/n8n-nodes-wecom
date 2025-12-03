import type { INodeProperties } from 'n8n-workflow';

const showOnlyForDeleteClientPassword = {
	resource: ['mail'],
	operation: ['deleteClientPassword'],
};

export const deleteClientPasswordDescription: INodeProperties[] = [
	{
		displayName: '邮箱地址',
		name: 'mailbox',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForDeleteClientPassword,
		},
		default: '',
		placeholder: 'user@example.com',
		description: '邮箱地址。<a href="https://developer.work.weixin.qq.com/document/path/95486" target="_blank">更多信息</a>',
	},
	{
		displayName: '密码ID',
		name: 'password_id',
		type: 'string',
		typeOptions: { password: true },
		required: true,
		displayOptions: {
			show: showOnlyForDeleteClientPassword,
		},
		default: '',
		placeholder: 'PASSWORD_ID',
		description: '要删除的客户端专用密码的唯一标识ID。<a href="https://developer.work.weixin.qq.com/document/path/95486" target="_blank">更多信息</a>',
	},
];

