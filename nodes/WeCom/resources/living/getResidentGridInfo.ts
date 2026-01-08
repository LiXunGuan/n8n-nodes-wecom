import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGetResidentGridInfo = {
	resource: ['living'],
	operation: ['getResidentGridInfo'],
};

export const getResidentGridInfoDescription: INodeProperties[] = [
	{
		displayName: '提示',
		name: 'notice',
		type: 'notice',
		displayOptions: {
			show: showOnlyForGetResidentGridInfo,
		},
		default: '无需额外参数，直接获取居民网格与负责人信息。',
	},
];
