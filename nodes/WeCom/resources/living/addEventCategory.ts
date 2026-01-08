import type { INodeProperties } from 'n8n-workflow';

const showOnlyForAddEventCategory = {
	resource: ['living'],
	operation: ['addEventCategory'],
};

export const addEventCategoryDescription: INodeProperties[] = [
	{
		displayName: '类别名称',
		name: 'category_name',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForAddEventCategory,
		},
		default: '',
		placeholder: '环境卫生',
		description: '事件类别名称，最长 32 个字符',
	},
	{
		displayName: '父类别ID',
		name: 'parent_category_id',
		type: 'string',
		displayOptions: {
			show: showOnlyForAddEventCategory,
		},
		default: '',
		placeholder: 'cat_001',
		description: '父类别 ID，支持二级分类，不填表示一级分类',
	},
	{
		displayName: '类别描述',
		name: 'description',
		type: 'string',
		displayOptions: {
			show: showOnlyForAddEventCategory,
		},
		default: '',
		placeholder: '环境卫生相关事件',
		description: '类别描述，最长 128 个字符',
	},
];
