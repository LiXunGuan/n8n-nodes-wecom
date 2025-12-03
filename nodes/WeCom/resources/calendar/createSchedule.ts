import type { INodeProperties } from 'n8n-workflow';

const showOnlyForCreate = {
	resource: ['calendar'],
	operation: ['createSchedule'],
};

export const createScheduleDescription: INodeProperties[] = [
	{
		displayName: '日程详情',
		name: 'schedule',
		type: 'json',
		required: true,
		displayOptions: {
			show: showOnlyForCreate,
		},
		default: '{\n  "organizer": "zhangsan",\n  "start_time": 1577836800,\n  "end_time": 1577840400,\n  "summary": "周例会",\n  "attendees": [{"userid": "lisi"}]\n}',
		description: '日程详情，JSON格式。必填字段：organizer（组织者UserID）、start_time（开始时间，秒级Unix时间戳）、end_time（结束时间，秒级Unix时间戳）、summary（日程主题，最长128字符）、attendees（参与者列表）。<a href="https://developer.work.weixin.qq.com/document/path/93648" target="_blank">官方文档</a>',
		hint: '日程详情，JSON格式',
	},
	{
		displayName: '应用ID',
		name: 'agentid',
		type: 'number',
		displayOptions: {
			show: showOnlyForCreate,
		},
		default: 0,
		description: '可选。应用ID，不填则默认使用当前应用。<a href="https://developer.work.weixin.qq.com/document/path/93648" target="_blank">官方文档</a>',
		placeholder: '1000001',
		typeOptions: {
			minValue: 0,
		},
	},
];

