import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGetLivingWatchStat = {
	resource: ['school'],
	operation: ['getLivingWatchStat'],
};

export const getLivingWatchStatDescription: INodeProperties[] = [
	{
		displayName: '直播ID',
		name: 'livingid',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForGetLivingWatchStat,
		},
		default: '',
		placeholder: 'living_001',
	},
	{
		displayName: '分页游标',
		name: 'next_key',
		type: 'string',
		displayOptions: {
			show: showOnlyForGetLivingWatchStat,
		},
		default: '',
		description: '上次请求返回的 next_key',
	},
];
