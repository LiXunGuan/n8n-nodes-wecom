import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGetMailList = {
	resource: ['mail'],
	operation: ['getMailList'],
};

export const getMailListDescription: INodeProperties[] = [
	{
		displayName: '邮箱地址',
		name: 'mailbox',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForGetMailList,
		},
		default: '',
		placeholder: 'user@example.com',
		description: '要查询的企业邮箱地址。<a href="https://developer.work.weixin.qq.com/document/path/97369" target="_blank">更多信息</a>',
	},
	{
		displayName: '开始时间',
		name: 'begin_time',
		type: 'number',
		required: true,
		displayOptions: {
			show: showOnlyForGetMailList,
		},
		default: 0,
		placeholder: '1609459200',
		description: '查询的开始时间，Unix时间戳（秒）。<a href="https://developer.work.weixin.qq.com/document/path/97369" target="_blank">更多信息</a>',
	},
	{
		displayName: '结束时间',
		name: 'end_time',
		type: 'number',
		required: true,
		displayOptions: {
			show: showOnlyForGetMailList,
		},
		default: 0,
		placeholder: '1609545600',
		description: '查询的结束时间，Unix时间戳（秒）。<a href="https://developer.work.weixin.qq.com/document/path/97369" target="_blank">更多信息</a>',
	},
	{
		displayName: '邮件数量',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		displayOptions: {
			show: showOnlyForGetMailList,
		},
		default: 50,
		description: '返回的邮件数量，最大值为100。<a href="https://developer.work.weixin.qq.com/document/path/97369" target="_blank">更多信息</a>',
	},
	{
		displayName: '游标',
		name: 'cursor',
		type: 'string',
		displayOptions: {
			show: showOnlyForGetMailList,
		},
		default: '',
		placeholder: 'CURSOR_STRING',
		description: '可选。用于分页查询的游标，从上次响应中获取。<a href="https://developer.work.weixin.qq.com/document/path/97369" target="_blank">更多信息</a>',
	},
];

