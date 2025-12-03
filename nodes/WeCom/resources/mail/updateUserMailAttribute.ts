import type { INodeProperties } from 'n8n-workflow';

const showOnlyForUpdateUserMailAttribute = {
	resource: ['mail'],
	operation: ['updateUserMailAttribute'],
};

export const updateUserMailAttributeDescription: INodeProperties[] = [
	{
		displayName: '邮箱地址',
		name: 'mailbox',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForUpdateUserMailAttribute,
		},
		default: '',
		placeholder: 'user@example.com',
		description: '要更新功能属性的用户邮箱地址。<a href="https://developer.work.weixin.qq.com/document/path/95486" target="_blank">更多信息</a>',
	},
	{
		displayName: '功能属性',
		name: 'attribute',
		type: 'json',
		required: true,
		displayOptions: {
			show: showOnlyForUpdateUserMailAttribute,
		},
		default: '{}',
		description: '邮箱功能属性设置，包括自动转发、自动回复等配置。<a href="https://developer.work.weixin.qq.com/document/path/95486" target="_blank">更多信息</a>',
		hint: '示例：{"auto_reply": {"enabled": true, "text": "自动回复内容"}}',
	},
];

