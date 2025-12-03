import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGetClientPasswordList = {
	resource: ['mail'],
	operation: ['getClientPasswordList'],
};

export const getClientPasswordListDescription: INodeProperties[] = [
	{
		displayName: '邮箱地址',
		name: 'mailbox',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForGetClientPasswordList,
		},
		default: '',
		placeholder: 'user@example.com',
		description: '要查询客户端专用密码列表的邮箱地址。<a href="https://developer.work.weixin.qq.com/document/path/95486" target="_blank">更多信息</a>',
	},
];

