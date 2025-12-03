import type { INodeProperties } from 'n8n-workflow';

const showOnlyForManageBooking = {
	resource: ['meetingroom'],
	operation: ['manageBooking'],
};

export const manageBookingDescription: INodeProperties[] = [
	{
		displayName: '操作类型',
		name: 'action',
		type: 'options',
		required: true,
		displayOptions: {
			show: showOnlyForManageBooking,
		},
		options: [
			{ name: '预定会议室', value: 'book' },
			{ name: '取消预定', value: 'cancel' },
			{ name: '查询预定', value: 'get' },
			{ name: '查询预定列表', value: 'list' },
		],
		default: 'book',
		description: '选择对会议室预定进行的操作。<a href="https://developer.work.weixin.qq.com/document/path/93618" target="_blank">更多信息</a>',
	},
	{
		displayName: '预定数据',
		name: 'bookingData',
		type: 'json',
		displayOptions: {
			show: showOnlyForManageBooking,
		},
		default: '{}',
		description: '会议室预定相关数据，JSON格式。根据操作类型不同，需要提供的字段也不同。<a href="https://developer.work.weixin.qq.com/document/path/93618" target="_blank">更多信息</a>',
		hint: '示例：{"meetingroom_id": "room001", "start_time": 1609459200, "end_time": 1609462800, "subject": "团队会议"}',
	},
];

