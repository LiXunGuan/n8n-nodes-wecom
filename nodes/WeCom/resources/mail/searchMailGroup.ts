import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSearchMailGroup = {
	resource: ['mail'],
	operation: ['searchMailGroup'],
};

export const searchMailGroupDescription: INodeProperties[] = [
	{
		displayName: '搜索关键词',
		name: 'fuzzy_groupid',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForSearchMailGroup,
		},
		default: '',
		placeholder: 'sales',
		description: '用于模糊搜索邮件群组的关键词，支持群组地址和名称匹配。<a href="https://developer.work.weixin.qq.com/document/path/95486" target="_blank">更多信息</a>',
	},
	{
		displayName: '返回数量',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		displayOptions: {
			show: showOnlyForSearchMailGroup,
		},
		default: 50,
		description: '返回的邮件群组数量，最大值为100。<a href="https://developer.work.weixin.qq.com/document/path/95486" target="_blank">更多信息</a>',
	},
	{
		displayName: '游标',
		name: 'cursor',
		type: 'string',
		displayOptions: {
			show: showOnlyForSearchMailGroup,
		},
		default: '',
		placeholder: 'CURSOR_STRING',
		description: '可选。用于分页查询的游标，从上次响应中获取。<a href="https://developer.work.weixin.qq.com/document/path/95486" target="_blank">更多信息</a>',
	},
];

