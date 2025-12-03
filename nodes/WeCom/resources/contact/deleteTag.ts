import type { INodeProperties } from 'n8n-workflow';

const showOnlyForDeleteTag = {
	resource: ['contact'],
	operation: ['deleteTag'],
};

export const deleteTagDescription: INodeProperties[] = [
	{
		displayName: '标签ID',
		name: 'tagid',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForDeleteTag,
		},
		default: '',
		placeholder: '100',
		description: '标签 ID。<a href="https://developer.work.weixin.qq.com/document/path/90212" target="_blank">官方文档</a>',
		hint: '要删除的标签 ID',
	},
];

