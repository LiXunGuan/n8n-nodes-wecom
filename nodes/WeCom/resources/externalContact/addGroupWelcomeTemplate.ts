import type { INodeProperties } from 'n8n-workflow';

const showOnly = {
	resource: ['externalContact'],
	operation: ['addGroupWelcomeTemplate'],
};

export const addGroupWelcomeTemplateDescription: INodeProperties[] = [
	{
		displayName: '消息内容',
		name: 'text',
		type: 'json',
		required: true,
		default: '{}',
		displayOptions: {
			show: showOnly,
		},
		hint: '入群欢迎语的消息内容JSON对象',
		description: '入群欢迎语的消息内容，包含text文本消息、image图片消息、link图文链接和miniprogram小程序等附件。具体格式参考官方文档。<a href="https://developer.work.weixin.qq.com/document/path/92366" target="_blank">官方文档</a>',
		placeholder: '{"text":{"content":"欢迎加入我们的客户群！"},"image":{"media_id":"MEDIA_ID"}}',
	},
	{
		displayName: '适用成员',
		name: 'agentid',
		type: 'number',
		default: 0,
		displayOptions: {
			show: showOnly,
		},
		hint: '可选。授权方安装的应用agentid',
		description: '授权方安装的应用agentid，仅旧的第三方多应用套件需要填写此参数。普通企业和服务商应用不需要填写。<a href="https://developer.work.weixin.qq.com/document/path/92366" target="_blank">官方文档</a>',
	},
	{
		displayName: '是否通知',
		name: 'notify',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: showOnly,
		},
		hint: '可选。是否通知成员将欢迎语应用到客户群',
		description: '是否通知成员将这条入群欢迎语应用到客户群中，默认为false。设置为true时，会通过企业微信通知相关成员。<a href="https://developer.work.weixin.qq.com/document/path/92366" target="_blank">官方文档</a>',
	},
];

