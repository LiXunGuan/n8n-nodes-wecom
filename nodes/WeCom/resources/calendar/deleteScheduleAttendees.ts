import type { INodeProperties } from 'n8n-workflow';

const showOnlyForDelete = {
	resource: ['calendar'],
	operation: ['deleteScheduleAttendees'],
};

export const deleteScheduleAttendeesDescription: INodeProperties[] = [
	{
		displayName: '日程ID',
		name: 'schedule_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForDelete,
		},
		default: '',
		description: '要删除参与者的日程唯一标识ID',
		hint: '日程ID',
	},
	{
		displayName: '参与者',
		name: 'attendees',
		type: 'json',
		required: true,
		displayOptions: {
			show: showOnlyForDelete,
		},
		default: '[{"userid": "userid1"}]',
		description: '要删除的参与者列表，JSON格式数组。可包含userid（成员ID）等字段。示例：[{"userid": "userid1"}]',
		hint: '要删除的参与者，JSON格式数组',
	},
];

