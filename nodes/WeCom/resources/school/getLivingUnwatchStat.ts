import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGetLivingUnwatchStat = {
	resource: ['school'],
	operation: ['getLivingUnwatchStat'],
};

export const getLivingUnwatchStatDescription: INodeProperties[] = [
	{
		displayName: '直播ID',
		name: 'livingid',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForGetLivingUnwatchStat,
		},
		default: '',
		placeholder: 'living_001',
	},
	{
		displayName: '分页游标',
		name: 'next_key',
		type: 'string',
		displayOptions: {
			show: showOnlyForGetLivingUnwatchStat,
		},
		default: '',
		description: '上次请求返回的 next_key',
	},
];
