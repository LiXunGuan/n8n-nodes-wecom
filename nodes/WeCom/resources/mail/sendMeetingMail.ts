import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSendMeetingMail = {
	resource: ['mail'],
	operation: ['sendMeetingMail'],
};

export const sendMeetingMailDescription: INodeProperties[] = [
	{
		displayName: '发件人邮箱',
		name: 'sender',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForSendMeetingMail,
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
			show: showOnlyForSendMeetingMail,
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
			show: showOnlyForSendMeetingMail,
		},
		default: '',
		placeholder: '会议邀请',
		description: '会议邮件的主题。<a href="https://developer.work.weixin.qq.com/document/path/97445" target="_blank">更多信息</a>',
	},
	{
		displayName: '会议信息',
		name: 'meeting_content',
		type: 'json',
		required: true,
		displayOptions: {
			show: showOnlyForSendMeetingMail,
		},
		default: '{}',
		description: '会议内容信息，包含会议标题、开始时间、结束时间、地点、参与人等。<a href="https://developer.work.weixin.qq.com/document/path/97445" target="_blank">更多信息</a>',
		hint: '示例：{"title": "周会", "start_time": 1609459200, "end_time": 1609462800}',
	},
	{
		displayName: '附件',
		name: 'attachment_list',
		type: 'json',
		displayOptions: {
			show: showOnlyForSendMeetingMail,
		},
		default: '[]',
		description: '可选。附件列表。<a href="https://developer.work.weixin.qq.com/document/path/97445" target="_blank">更多信息</a>',
		hint: '示例：[{"type": 1, "media_id": "xxx"}]',
	},
];

