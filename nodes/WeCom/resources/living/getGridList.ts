import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGetGridList = {
	resource: ['living'],
	operation: ['getGridList'],
};

export const getGridListDescription: INodeProperties[] = [
	{
		displayName: '父网格ID',
		name: 'parent_grid_id',
		type: 'string',
		displayOptions: {
			show: showOnlyForGetGridList,
		},
		default: '',
		placeholder: 'parent_001',
		description: '父网格 ID，不填返回顶级网格列表',
	},
];
