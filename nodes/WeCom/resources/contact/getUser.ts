import type { INodeProperties } from 'n8n-workflow';

const showOnlyGetUser = {
	resource: ['contact'],
	operation: ['getUser'],
};

export const getUserDescription: INodeProperties[] = [
	{
		displayName: '成员 Name or ID',
		name: 'userid',
		type: 'options',
		typeOptions: {
			loadOptionsMethod: 'getAllUsers',
		},
		required: true,
		default: '',
		displayOptions: {
			show: showOnlyGetUser,
		},
		hint: '成员 UserID，对应管理端的账号，企业内必须唯一',
		description: '从列表中选择成员，或使用表达式指定 UserID。<a href="https://developer.work.weixin.qq.com/document/path/90196" target="_blank">官方文档</a>。Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
	},
];

