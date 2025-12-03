import type { INodeProperties } from 'n8n-workflow';

const showOnlyForCreate = {
	resource: ['meeting'],
	operation: ['createAdvancedMeeting'],
};

export const createAdvancedMeetingDescription: INodeProperties[] = [
	{
		displayName: '会议详情',
		name: 'meeting_info',
		type: 'json',
		required: true,
		displayOptions: {
			show: showOnlyForCreate,
		},
		default: '{\n  "subject": "会议主题",\n  "start_time": 1577836800,\n  "end_time": 1577840400,\n  "invitees": [{"userid": "user1"}]\n}',
		description: '高级会议信息，JSON格式。包含subject（会议主题）、start_time（开始时间）、end_time（结束时间）、invitees（受邀成员）等字段',
		hint: '高级会议信息，JSON格式',
	},
];

