import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSendScheduleMail = {
	resource: ['mail'],
	operation: ['sendScheduleMail'],
};

export const sendScheduleMailDescription: INodeProperties[] = [
	{
		displayName: '发件人邮箱',
		name: 'sender',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForSendScheduleMail,
		},
		default: '',
		placeholder: 'user@example.com',
		description: '发件人的企业邮箱地址。<a href="https://developer.work.weixin.qq.com/document/path/97445" target="_blank">更多信息</a>',
	},
	{
		displayName: '收件人',
		name: 'receiver',
		type: 'json',
		required: true,
		displayOptions: {
			show: showOnlyForSendScheduleMail,
		},
		default: '{"to_list": [], "cc_list": [], "bcc_list": []}',
		description: '收件人信息，包含to_list（收件人列表）、cc_list（抄送列表）、bcc_list（密送列表）。<a href="https://developer.work.weixin.qq.com/document/path/97445" target="_blank">更多信息</a>',
		hint: '示例：{"to_list": ["user1@example.com"], "cc_list": [], "bcc_list": []}',
	},
	{
		displayName: '邮件主题',
		name: 'subject',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForSendScheduleMail,
		},
		default: '',
		placeholder: '日程提醒',
		description: '日程邮件的主题。<a href="https://developer.work.weixin.qq.com/document/path/97445" target="_blank">更多信息</a>',
	},
	{
		displayName: '日程信息',
		name: 'cal_content',
		type: 'json',
		required: true,
		displayOptions: {
			show: showOnlyForSendScheduleMail,
		},
		default: '{}',
		description: '日程内容信息，包含标题、开始时间、结束时间、地点、描述等。<a href="https://developer.work.weixin.qq.com/document/path/97445" target="_blank">更多信息</a>',
		hint: '示例：{"title": "项目评审", "start_time": 1609459200, "end_time": 1609462800, "location": "会议室A"}',
	},
	{
		displayName: '附件',
		name: 'attachment_list',
		type: 'json',
		displayOptions: {
			show: showOnlyForSendScheduleMail,
		},
		default: '[]',
		description: '可选。附件列表。<a href="https://developer.work.weixin.qq.com/document/path/97445" target="_blank">更多信息</a>',
		hint: '示例：[{"type": 1, "media_id": "xxx"}]',
	},
];

