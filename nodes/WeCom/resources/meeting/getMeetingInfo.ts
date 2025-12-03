import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGet = {
	resource: ['meeting'],
	operation: ['getMeetingInfo'],
};

export const getMeetingInfoDescription: INodeProperties[] = [
	{
		displayName: '会议ID',
		name: 'meetingid',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForGet,
		},
		default: '',
		description: '会议的唯一标识ID。<a href="https://developer.work.weixin.qq.com/document/path/99107" target="_blank">官方文档</a>',
		placeholder: '12345678901234567890',
	},
];

