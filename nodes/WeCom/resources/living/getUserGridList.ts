import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGetUserGridList = {
	resource: ['living'],
	operation: ['getUserGridList'],
};

export const getUserGridListDescription: INodeProperties[] = [
	{
		displayName: '成员UserID',
		name: 'userid',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForGetUserGridList,
		},
		default: '',
		placeholder: 'zhangsan',
		description: '成员 UserID',
	},
];
