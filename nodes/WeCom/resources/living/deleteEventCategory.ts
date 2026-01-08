import type { INodeProperties } from 'n8n-workflow';

const showOnlyForDeleteEventCategory = {
	resource: ['living'],
	operation: ['deleteEventCategory'],
};

export const deleteEventCategoryDescription: INodeProperties[] = [
	{
		displayName: '类别ID',
		name: 'category_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForDeleteEventCategory,
		},
		default: '',
		placeholder: 'cat_001',
		description: '要删除的事件类别 ID',
	},
];
