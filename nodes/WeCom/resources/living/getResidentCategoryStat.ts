import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGetResidentCategoryStat = {
	resource: ['living'],
	operation: ['getResidentCategoryStat'],
};

export const getResidentCategoryStatDescription: INodeProperties[] = [
	{
		displayName: '开始时间戳',
		name: 'start_time',
		type: 'number',
		required: true,
		displayOptions: {
			show: showOnlyForGetResidentCategoryStat,
		},
		default: 0,
		description: '开始时间戳（秒）',
	},
	{
		displayName: '结束时间戳',
		name: 'end_time',
		type: 'number',
		required: true,
		displayOptions: {
			show: showOnlyForGetResidentCategoryStat,
		},
		default: 0,
		description: '结束时间戳（秒）',
	},
	{
		displayName: '网格ID',
		name: 'grid_id',
		type: 'string',
		displayOptions: {
			show: showOnlyForGetResidentCategoryStat,
		},
		default: '',
		placeholder: 'grid_001',
		description: '网格 ID，不填统计全部网格',
	},
];
