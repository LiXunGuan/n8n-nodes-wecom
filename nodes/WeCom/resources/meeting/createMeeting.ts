import type { INodeProperties } from 'n8n-workflow';

const showOnlyForCreate = {
	resource: ['meeting'],
	operation: ['createMeeting'],
};

export const createMeetingDescription: INodeProperties[] = [
	{
		displayName: '会议主题',
		name: 'subject',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForCreate,
		},
		default: '',
		description: '会议主题，长度限制128个字符。<a href="https://developer.work.weixin.qq.com/document/path/99104" target="_blank">官方文档</a>',
		placeholder: '产品需求评审会',
	},
	{
		displayName: '会议开始时间',
		name: 'start_time',
		type: 'number',
		required: true,
		displayOptions: {
			show: showOnlyForCreate,
		},
		default: 0,
		description: '会议开始时间，秒级Unix时间戳。<a href="https://developer.work.weixin.qq.com/document/path/99104" target="_blank">官方文档</a>',
		placeholder: '1640000000',
		typeOptions: {
			minValue: 0,
		},
	},
	{
		displayName: '会议结束时间',
		name: 'end_time',
		type: 'number',
		required: true,
		displayOptions: {
			show: showOnlyForCreate,
		},
		default: 0,
		description: '会议结束时间，秒级Unix时间戳。必须大于开始时间。<a href="https://developer.work.weixin.qq.com/document/path/99104" target="_blank">官方文档</a>',
		placeholder: '1640003600',
		typeOptions: {
			minValue: 0,
		},
	},
	{
		displayName: '会议类型',
		name: 'type',
		type: 'options',
		displayOptions: {
			show: showOnlyForCreate,
		},
		options: [
			{ name: '预约会议', value: 0, description: '预约未来时间的会议' },
			{ name: '快速会议', value: 1, description: '立即开始的会议' },
		],
		default: 0,
		description: '会议类型。<a href="https://developer.work.weixin.qq.com/document/path/99104" target="_blank">官方文档</a>',
	},
	{
		displayName: '参会人员',
		name: 'attendees',
		type: 'json',
		displayOptions: {
			show: showOnlyForCreate,
		},
		default: '[{"userid":"zhangsan"}]',
		description: '可选。参会人员，JSON数组格式，每项包含userid字段。最多支持2000人。<a href="https://developer.work.weixin.qq.com/document/path/99104" target="_blank">官方文档</a>',
		hint: '参会人员，JSON格式数组',
	},
];

