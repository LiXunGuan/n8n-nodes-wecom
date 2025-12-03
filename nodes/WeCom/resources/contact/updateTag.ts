import type { INodeProperties } from 'n8n-workflow';

const showOnlyForUpdateTag = {
	resource: ['contact'],
	operation: ['updateTag'],
};

export const updateTagDescription: INodeProperties[] = [
	{
		displayName: '标签ID',
		name: 'tagid',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForUpdateTag,
		},
		default: '',
		placeholder: '100',
		description: '标签 ID。<a href="https://developer.work.weixin.qq.com/document/path/90211" target="_blank">官方文档</a>',
		hint: '要更新的标签 ID',
	},
	{
		displayName: '标签名称',
		name: 'tagname',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForUpdateTag,
		},
		default: '',
		placeholder: '销售团队',
		description: '标签名称，长度限制为32个字以内（汉字或英文字母）。<a href="https://developer.work.weixin.qq.com/document/path/90211" target="_blank">官方文档</a>',
	},
];

