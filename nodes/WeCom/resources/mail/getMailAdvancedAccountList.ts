import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGetMailAdvancedAccountList = {
	resource: ['mail'],
	operation: ['getMailAdvancedAccountList'],
};

export const getMailAdvancedAccountListDescription: INodeProperties[] = [
	{
		displayName: '返回数量',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		displayOptions: {
			show: showOnlyForGetMailAdvancedAccountList,
		},
		default: 50,
		description: '返回的高级账号数量，最大值为100。<a href="https://developer.work.weixin.qq.com/document/path/95486" target="_blank">更多信息</a>',
	},
	{
		displayName: '游标',
		name: 'cursor',
		type: 'string',
		displayOptions: {
			show: showOnlyForGetMailAdvancedAccountList,
		},
		default: '',
		placeholder: 'CURSOR_STRING',
		description: '可选。用于分页查询的游标，从上次响应中获取。<a href="https://developer.work.weixin.qq.com/document/path/95486" target="_blank">更多信息</a>',
	},
];

