import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGetUserMailAttribute = {
	resource: ['mail'],
	operation: ['getUserMailAttribute'],
};

export const getUserMailAttributeDescription: INodeProperties[] = [
	{
		displayName: '邮箱地址',
		name: 'mailbox',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForGetUserMailAttribute,
		},
		default: '',
		placeholder: 'user@example.com',
		description: '要查询功能属性的用户邮箱地址。<a href="https://developer.work.weixin.qq.com/document/path/95486" target="_blank">更多信息</a>',
	},
];

