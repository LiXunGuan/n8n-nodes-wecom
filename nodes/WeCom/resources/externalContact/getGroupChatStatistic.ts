import type { INodeProperties } from 'n8n-workflow';

const showOnly = {
	resource: ['externalContact'],
	operation: ['getGroupChatStatistic'],
};

export const getGroupChatStatisticDescription: INodeProperties[] = [
	{
		displayName: '数据日期',
		name: 'day_begin_time',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: {
			show: showOnly,
		},
		hint: '起始日期的时间戳，填当天的0时0分0秒',
		description: '统计数据的起始日期时间戳，填写当天的0时0分0秒（秒级Unix时间戳）',
	},
	{
		displayName: '数据日期（可选）',
		name: 'day_end_time',
		type: 'number',
		default: 0,
		displayOptions: {
			show: showOnly,
		},
		hint: '结束日期的时间戳，填当天的0时0分0秒',
		description: '统计数据的结束日期时间戳，填写当天的0时0分0秒（秒级Unix时间戳），可选',
	},
	{
		displayName: '群主ID列表',
		name: 'owner_filter',
		type: 'json',
		default: '{}',
		displayOptions: {
			show: showOnly,
		},
		hint: 'JSON格式，包含userid_list字段',
		description: '按群主ID过滤统计数据，JSON格式。包含userid_list字段（成员ID数组），可选',
	},
	{
		displayName: '排序方式',
		name: 'order_by',
		type: 'options',
		options: [
			{
				name: '新增群数',
				value: 1,
			},
			{
				name: '群总数',
				value: 2,
			},
			{
				name: '新增群人数',
				value: 3,
			},
			{
				name: '群总人数',
				value: 4,
			},
		],
		default: 1,
		displayOptions: {
			show: showOnly,
		},
		description: '统计数据的排序方式。1-按新增群数排序；2-按群总数排序；3-按新增群人数排序；4-按群总人数排序',
		hint: '排序方式',
	},
	{
		displayName: '升序还是降序',
		name: 'order_asc',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: showOnly,
		},
		hint: '是否升序，false为降序',
		description: '排序顺序。true表示升序，false表示降序',
	},
	{
		displayName: '偏移量',
		name: 'offset',
		type: 'number',
		default: 0,
		displayOptions: {
			show: showOnly,
		},
		hint: '分页，偏移量',
		description: '分页查询的偏移量，用于获取后续页面的数据',
	},
	{
		displayName: '每页数量',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		displayOptions: {
			show: showOnly,
		},
		hint: '分页，每页数据量，最大1000',
		description: '单次返回的数据量上限，最大支持1000',
	},
];

