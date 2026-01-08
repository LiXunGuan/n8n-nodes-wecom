import type { INodeProperties } from 'n8n-workflow';

const showOnlyForDeleteGrid = {
	resource: ['living'],
	operation: ['deleteGrid'],
};

export const deleteGridDescription: INodeProperties[] = [
	{
		displayName: '网格ID',
		name: 'grid_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForDeleteGrid,
		},
		default: '',
		placeholder: 'grid_001',
		description: '要删除的网格 ID（删除会同时删除子网格）',
	},
];
