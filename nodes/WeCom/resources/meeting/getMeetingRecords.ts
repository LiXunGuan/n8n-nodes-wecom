import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGet = {
	resource: ['meeting'],
	operation: ['getMeetingRecords'],
};

export const getMeetingRecordsDescription: INodeProperties[] = [
	{
		displayName: '开始时间',
		name: 'start_time',
		type: 'number',
		required: true,
		displayOptions: {
			show: showOnlyForGet,
		},
		default: 0,
		description: '查询起始时间，Unix时间戳（秒）',
		hint: '开始时间（Unix时间戳）',
	},
	{
		displayName: '结束时间',
		name: 'end_time',
		type: 'number',
		required: true,
		displayOptions: {
			show: showOnlyForGet,
		},
		default: 0,
		description: '查询结束时间，Unix时间戳（秒）',
		hint: '结束时间（Unix时间戳）',
	},
	{
		displayName: '用户ID',
		name: 'userid',
		type: 'string',
		displayOptions: {
			show: showOnlyForGet,
		},
		default: '',
		description: '可选。指定用户ID，查询该用户发起的会议记录',
		hint: '用户ID，可选',
	},
	{
		displayName: '游标',
		name: 'cursor',
		type: 'string',
		displayOptions: {
			show: showOnlyForGet,
		},
		default: '',
		description: '分页游标，用于获取下一页数据',
		hint: '分页游标',
	},
	{
		displayName: '限制数量',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		displayOptions: {
			show: showOnlyForGet,
		},
		default: 50,
		description: '单次返回的最大记录数量',
		hint: '返回的记录数量',
	},
];

