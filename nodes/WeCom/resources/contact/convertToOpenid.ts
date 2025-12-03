import type { INodeProperties } from 'n8n-workflow';

const showOnlyConvertToOpenid = {
	resource: ['contact'],
	operation: ['convertToOpenid'],
};

export const convertToOpenidDescription: INodeProperties[] = [
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
			show: showOnlyConvertToOpenid,
		},
		hint: '企业成员的 userid',
		description: '从列表中选择成员，或使用表达式指定 UserID。Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
	},
];

