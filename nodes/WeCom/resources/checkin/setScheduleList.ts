import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSetScheduleList = {
	resource: ['checkin'],
	operation: ['setScheduleList'],
};

export const setScheduleListDescription: INodeProperties[] = [
	{
		displayName: '排班信息',
		name: 'items',
		type: 'json',
		required: true,
		displayOptions: {
			show: showOnlyForSetScheduleList,
		},
		default: '[]',
		description: '排班信息列表，JSON格式数组。每项包含userid（成员ID）、day（日期）、schedule_id（排班ID）等字段',
		hint: '排班信息数组，包含userid、day、schedule_id等字段',
	},
	{
		displayName: '年月',
		name: 'yearmonth',
		type: 'number',
		required: true,
		displayOptions: {
			show: showOnlyForSetScheduleList,
		},
		default: 0,
		description: 'Year and month in format: YYYYMM (e.g., 202501)',
		hint: '排班的年月，格式为YYYYMM，如202501',
	},
];

