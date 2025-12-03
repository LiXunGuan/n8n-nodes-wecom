import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGetRecordList = {
	resource: ['journal'],
	operation: ['getRecordList'],
};

export const getRecordListDescription: INodeProperties[] = [
	{
		displayName: '开始时间',
		name: 'starttime',
		type: 'number',
		required: true,
		displayOptions: {
			show: showOnlyForGetRecordList,
		},
		default: 0,
		placeholder: '1609459200',
		description: '查询的起始时间，Unix时间戳（秒）。<a href="https://developer.work.weixin.qq.com/document/path/93496" target="_blank">更多信息</a>',
	},
	{
		displayName: '结束时间',
		name: 'endtime',
		type: 'number',
		required: true,
		displayOptions: {
			show: showOnlyForGetRecordList,
		},
		default: 0,
		placeholder: '1609545600',
		description: '查询的结束时间，Unix时间戳（秒）。<a href="https://developer.work.weixin.qq.com/document/path/93496" target="_blank">更多信息</a>',
	},
	{
		displayName: '游标',
		name: 'cursor',
		type: 'number',
		displayOptions: {
			show: showOnlyForGetRecordList,
		},
		default: 0,
		placeholder: '0',
		description: '可选。分页游标，首次请求传0，后续请求使用上次响应中的next_cursor值。<a href="https://developer.work.weixin.qq.com/document/path/93496" target="_blank">更多信息</a>',
	},
	{
		displayName: '每次拉取数量',
		name: 'limit',
		type: 'number',
		typeOptions: {
			maxValue: 100,
		},
		displayOptions: {
			show: showOnlyForGetRecordList,
		},
		default: 50,
		description: '每次拉取的汇报记录数量，最大值为100。<a href="https://developer.work.weixin.qq.com/document/path/93496" target="_blank">更多信息</a>',
	},
	{
		displayName: '筛选条件',
		name: 'filters',
		type: 'json',
		displayOptions: {
			show: showOnlyForGetRecordList,
		},
		default: '[]',
		description: '可选。筛选条件数组，可按汇报人、接收人等条件筛选。<a href="https://developer.work.weixin.qq.com/document/path/93496" target="_blank">更多信息</a>',
		hint: '示例：[{"key": "reporter", "value": "zhangsan"}]',
	},
];

