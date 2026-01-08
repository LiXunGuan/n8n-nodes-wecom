import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGetResidentEventList = {
	resource: ['living'],
	operation: ['getResidentEventList'],
};

export const getResidentEventListDescription: INodeProperties[] = [
	{
		displayName: '开始时间戳',
		name: 'start_time',
		type: 'number',
		required: true,
		displayOptions: {
			show: showOnlyForGetResidentEventList,
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
			show: showOnlyForGetResidentEventList,
		},
		default: 0,
		description: '结束时间戳（秒）',
	},
	{
		displayName: '网格ID',
		name: 'grid_id',
		type: 'string',
		displayOptions: {
			show: showOnlyForGetResidentEventList,
		},
		default: '',
		placeholder: 'grid_001',
		description: '网格 ID',
	},
	{
		displayName: '类别ID',
		name: 'category_id',
		type: 'string',
		displayOptions: {
			show: showOnlyForGetResidentEventList,
		},
		default: '',
		placeholder: 'cat_001',
		description: '事件类别 ID',
	},
	{
		displayName: '状态',
		name: 'status',
		type: 'number',
		displayOptions: {
			show: showOnlyForGetResidentEventList,
		},
		default: 0,
		description: '事件状态：1-待处理 2-处理中 3-已完成',
	},
	{
		displayName: '分页偏移',
		name: 'offset',
		type: 'number',
		displayOptions: {
			show: showOnlyForGetResidentEventList,
		},
		default: 0,
		description: '分页偏移，默认 0',
	},
	{
		displayName: '返回数量',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		displayOptions: {
			show: showOnlyForGetResidentEventList,
		},
		default: 50,
		description: '返回数量，默认 20，最大 100',
	},
];
