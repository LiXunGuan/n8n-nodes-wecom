import type { INodeProperties } from 'n8n-workflow';

const showOnlyForAddCheckinRecord = {
	resource: ['checkin'],
	operation: ['addCheckinRecord'],
};

export const addCheckinRecordDescription: INodeProperties[] = [
	{
		displayName: '打卡记录',
		name: 'record',
		type: 'json',
		required: true,
		displayOptions: {
			show: showOnlyForAddCheckinRecord,
		},
		default: '{}',
		description: '打卡记录详情，JSON格式。包含userid（成员ID）、checkin_time（打卡时间）、checkin_type（打卡类型）等字段',
		hint: '打卡记录详情，包含userid、checkin_time、checkin_type等字段',
	},
];

