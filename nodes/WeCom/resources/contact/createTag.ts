import type { INodeProperties } from 'n8n-workflow';

const showOnlyForCreateTag = {
	resource: ['contact'],
	operation: ['createTag'],
};

export const createTagDescription: INodeProperties[] = [
	{
		displayName: '标签名称',
		name: 'tagname',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForCreateTag,
		},
		default: '',
		placeholder: '销售团队',
		description: '标签名称，长度限制为32个字以内（汉字或英文字母）。<a href="https://developer.work.weixin.qq.com/document/path/90210" target="_blank">官方文档</a>',
	},
	{
		displayName: '标签ID',
		name: 'tagid',
		type: 'string',
		displayOptions: {
			show: showOnlyForCreateTag,
		},
		default: '',
		placeholder: '100',
		description: '可选。标签 ID，非负整型，指定此参数时新增的标签会生成对应的标签 ID，不指定时则以目前最大的 ID 自增。<a href="https://developer.work.weixin.qq.com/document/path/90210" target="_blank">官方文档</a>',
		hint: '不指定则系统自动分配',
	},
];

