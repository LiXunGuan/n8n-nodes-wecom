import type { INodeProperties } from 'n8n-workflow';

const showOnlyForCancel = {
	resource: ['meeting'],
	operation: ['cancelMeeting'],
};

export const cancelMeetingDescription: INodeProperties[] = [
	{
		displayName: '会议ID',
		name: 'meetingid',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForCancel,
		},
		default: '',
		description: '要取消的会议ID。<a href="https://developer.work.weixin.qq.com/document/path/99106" target="_blank">官方文档</a>',
		placeholder: '12345678901234567890',
	},
];

