import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGetInspectGridInfo = {
	resource: ['living'],
	operation: ['getInspectGridInfo'],
};

export const getInspectGridInfoDescription: INodeProperties[] = [
	{
		displayName: '提示',
		name: 'notice',
		type: 'notice',
		displayOptions: {
			show: showOnlyForGetInspectGridInfo,
		},
		default: '无需额外参数，直接获取巡查网格与负责人信息。',
	},
];
