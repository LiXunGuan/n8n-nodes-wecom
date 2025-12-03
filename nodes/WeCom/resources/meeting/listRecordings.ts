import type { INodeProperties } from 'n8n-workflow';

const showOnlyForList = {
	resource: ['meeting'],
	operation: ['listRecordings'],
};

export const listRecordingsDescription: INodeProperties[] = [
	{
		displayName: '会议ID',
		name: 'meetingid',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForList,
		},
		default: '',
		description: '要查询录制文件的会议ID',
		hint: '会议ID',
	},
];

