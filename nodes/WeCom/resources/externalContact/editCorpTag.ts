import type { INodeProperties } from 'n8n-workflow';

const showOnly = {
	resource: ['externalContact'],
	operation: ['editCorpTag'],
};

export const editCorpTagDescription: INodeProperties[] = [
	{
		displayName: '标签ID',
		name: 'id',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: showOnly,
		},
		hint: '标签或标签组的id',
		description: '标签或标签组的ID，用于指定要编辑的对象。<a href="https://developer.work.weixin.qq.com/document/path/92117" target="_blank">官方文档</a>',
		placeholder: 'etXXXXXXXXXX',
	},
	{
		displayName: '新名称',
		name: 'name',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnly,
		},
		hint: '可选。新的标签或标签组名称，最长30个字符',
		description: '新的标签或标签组名称。<a href="https://developer.work.weixin.qq.com/document/path/92117" target="_blank">官方文档</a>',
		placeholder: '重要客户',
	},
	{
		displayName: '新排序',
		name: 'order',
		type: 'number',
		default: 0,
		displayOptions: {
			show: showOnly,
		},
		hint: '可选。标签/标签组的次序值，值越大排序越靠前',
		description: '标签/标签组的次序值，order值大的排序靠前。<a href="https://developer.work.weixin.qq.com/document/path/92117" target="_blank">官方文档</a>',
	},
];

