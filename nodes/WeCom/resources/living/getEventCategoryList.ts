import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGetEventCategoryList = {
	resource: ['living'],
	operation: ['getEventCategoryList'],
};

export const getEventCategoryListDescription: INodeProperties[] = [
	{
		displayName: '提示',
		name: 'notice',
		type: 'notice',
		displayOptions: {
			show: showOnlyForGetEventCategoryList,
		},
		default: '无需额外参数，直接获取事件类别列表。',
	},
];
