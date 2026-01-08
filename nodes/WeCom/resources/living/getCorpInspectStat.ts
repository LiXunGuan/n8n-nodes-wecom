import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGetCorpInspectStat = {
	resource: ['living'],
	operation: ['getCorpInspectStat'],
};

export const getCorpInspectStatDescription: INodeProperties[] = [
	{
		displayName: '开始时间戳',
		name: 'start_time',
		type: 'number',
		required: true,
		displayOptions: {
			show: showOnlyForGetCorpInspectStat,
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
			show: showOnlyForGetCorpInspectStat,
		},
		default: 0,
		description: '结束时间戳（秒）',
	},
	{
		displayName: '网格ID',
		name: 'grid_id',
		type: 'string',
		displayOptions: {
			show: showOnlyForGetCorpInspectStat,
		},
		default: '',
		placeholder: 'grid_001',
		description: '网格 ID，不填统计全部网格',
	},
];
