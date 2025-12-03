import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSendMail = {
	resource: ['mail'],
	operation: ['sendMail'],
};

export const sendMailDescription: INodeProperties[] = [
	{
		displayName: '发件人邮箱',
		name: 'sender',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForSendMail,
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
			show: showOnlyForSendMail,
		},
		default: '{"to_list": [], "cc_list": [], "bcc_list": []}',
		description: '收件人信息，包含to_list（收件人列表）、cc_list（抄送列表）、bcc_list（密送列表），每个列表包含邮箱地址字符串。<a href="https://developer.work.weixin.qq.com/document/path/97445" target="_blank">更多信息</a>',
		hint: '示例：{"to_list": ["user1@example.com"], "cc_list": [], "bcc_list": []}',
	},
	{
		displayName: '邮件主题',
		name: 'subject',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForSendMail,
		},
		default: '',
		placeholder: '邮件主题',
		description: '邮件的主题。<a href="https://developer.work.weixin.qq.com/document/path/97445" target="_blank">更多信息</a>',
	},
	{
		displayName: '邮件正文',
		name: 'doc_content',
		type: 'json',
		required: true,
		displayOptions: {
			show: showOnlyForSendMail,
		},
		default: '{"content_type": 1, "content": ""}',
		description: '邮件正文内容，content_type: 1-纯文本 2-HTML格式。<a href="https://developer.work.weixin.qq.com/document/path/97445" target="_blank">更多信息</a>',
		hint: '示例：{"content_type": 1, "content": "邮件正文内容"}',
	},
	{
		displayName: '附件',
		name: 'attachment_list',
		type: 'json',
		displayOptions: {
			show: showOnlyForSendMail,
		},
		default: '[]',
		description: '可选。附件列表，包含附件ID和文件名等信息。附件需要先通过上传接口获取media_id。<a href="https://developer.work.weixin.qq.com/document/path/97445" target="_blank">更多信息</a>',
		hint: '示例：[{"type": 1, "media_id": "xxx"}]',
	},
];

