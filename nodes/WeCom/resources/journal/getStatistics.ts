import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGetStatistics = {
	resource: ['journal'],
	operation: ['getStatistics'],
};

export const getStatisticsDescription: INodeProperties[] = [
	{
		displayName: '模板类型',
		name: 'template_type',
		type: 'options',
		required: true,
		displayOptions: {
			show: showOnlyForGetStatistics,
		},
		options: [
			{ name: '日报', value: 0 },
			{ name: '周报', value: 1 },
			{ name: '月报', value: 2 },
		],
		default: 0,
		description: '汇报的模板类型：0-日报、1-周报、2-月报。<a href="https://developer.work.weixin.qq.com/document/path/93496" target="_blank">更多信息</a>',
	},
	{
		displayName: '开始时间',
		name: 'starttime',
		type: 'number',
		required: true,
		displayOptions: {
			show: showOnlyForGetStatistics,
		},
		default: 0,
		placeholder: '1609459200',
		description: '统计的起始时间，Unix时间戳（秒）。<a href="https://developer.work.weixin.qq.com/document/path/93496" target="_blank">更多信息</a>',
	},
	{
		displayName: '结束时间',
		name: 'endtime',
		type: 'number',
		required: true,
		displayOptions: {
			show: showOnlyForGetStatistics,
		},
		default: 0,
		placeholder: '1609545600',
		description: '统计的结束时间，Unix时间戳（秒）。<a href="https://developer.work.weixin.qq.com/document/path/93496" target="_blank">更多信息</a>',
	},
	{
		displayName: '成员UserID列表',
		name: 'useridlist',
		type: 'string',
		displayOptions: {
			show: showOnlyForGetStatistics,
		},
		default: '',
		placeholder: 'zhangsan,lisi',
		description: '可选。要统计的成员UserID列表，多个用英文逗号分隔。不传则统计全部成员。<a href="https://developer.work.weixin.qq.com/document/path/93496" target="_blank">更多信息</a>',
	},
];

