import type { INodeProperties } from 'n8n-workflow';

const showOnlyGetTag = {
	resource: ['contact'],
	operation: ['getTag'],
};

export const getTagDescription: INodeProperties[] = [
	{
		displayName: '标签 Name or ID',
		name: 'tagid',
		type: 'options',
		typeOptions: {
			loadOptionsMethod: 'getTags',
		},
		required: true,
		default: '',
		displayOptions: {
			show: showOnlyGetTag,
		},
		hint: '标签 ID',
		description: '从列表中选择标签，或使用表达式指定标签 ID。<a href="https://developer.work.weixin.qq.com/document/path/90213" target="_blank">官方文档</a>。Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
	},
];

