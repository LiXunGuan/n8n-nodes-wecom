import type { INodeProperties } from 'n8n-workflow';

const showOnlyForUpdateEventCategory = {
	resource: ['living'],
	operation: ['updateEventCategory'],
};

export const updateEventCategoryDescription: INodeProperties[] = [
	{
		displayName: '类别ID',
		name: 'category_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForUpdateEventCategory,
		},
		default: '',
		placeholder: 'cat_001',
		description: '要更新的类别 ID',
	},
	{
		displayName: '类别名称',
		name: 'category_name',
		type: 'string',
		displayOptions: {
			show: showOnlyForUpdateEventCategory,
		},
		default: '',
		placeholder: '环境卫生管理',
		description: '新的类别名称，不填表示不更新',
	},
	{
		displayName: '类别描述',
		name: 'description',
		type: 'string',
		displayOptions: {
			show: showOnlyForUpdateEventCategory,
		},
		default: '',
		placeholder: '更新后的描述',
		description: '新的类别描述，不填表示不更新',
	},
];
