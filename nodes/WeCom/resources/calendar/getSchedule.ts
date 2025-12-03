import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGet = {
	resource: ['calendar'],
	operation: ['getSchedule'],
};

export const getScheduleDescription: INodeProperties[] = [
	{
		displayName: '日程ID列表',
		name: 'schedule_id_list',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForGet,
		},
		default: '',
		description: '日程ID列表，用逗号分隔，最多支持1000个日程ID。<a href="https://developer.work.weixin.qq.com/document/path/93650" target="_blank">官方文档</a>',
		placeholder: '17c7d2bd-8062-4d73-b2e1-e4e8b8f8c7c8,27c7d2bd-8062-4d73-b2e1-e4e8b8f8c7c9',
	},
];

