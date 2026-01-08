import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGetLivingWatchStatV2 = {
	resource: ['school'],
	operation: ['getLivingWatchStatV2'],
};

export const getLivingWatchStatV2Description: INodeProperties[] = [
	{
		displayName: '直播ID',
		name: 'livingid',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForGetLivingWatchStatV2,
		},
		default: '',
		placeholder: 'living_001',
	},
	{
		displayName: '分页游标',
		name: 'next_key',
		type: 'string',
		displayOptions: {
			show: showOnlyForGetLivingWatchStatV2,
		},
		default: '',
		description: '上次请求返回的 next_key',
	},
	{
		displayName: '返回数量',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
			maxValue: 100,
		},
		displayOptions: {
			show: showOnlyForGetLivingWatchStatV2,
		},
		default: 50,
		description: '每次拉取数量，默认 50，最大 100',
	},
];
