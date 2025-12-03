import type { INodeProperties } from 'n8n-workflow';

const showOnly = {
	resource: ['externalContact'],
	operation: ['addContactWay'],
};

export const addContactWayDescription: INodeProperties[] = [
	{
		displayName: '联系方式类型',
		name: 'type',
		type: 'options',
		options: [
			{
				name: '单人',
				value: 1,
			},
			{
				name: '多人',
				value: 2,
			},
		],
		required: true,
		default: 1,
		displayOptions: {
			show: showOnly,
		},
		hint: '联系方式类型，1-单人 2-多人',
		description: '联系方式类型。1-单人，客户添加时自动成为该成员的客户；2-多人，客户可选择其中一位成员进行添加。<a href="https://developer.work.weixin.qq.com/document/path/92228" target="_blank">官方文档</a>',
	},
	{
		displayName: '场景',
		name: 'scene',
		type: 'options',
		options: [
			{
				name: '在小程序中联系',
				value: 1,
			},
			{
				name: '通过二维码联系',
				value: 2,
			},
		],
		required: true,
		default: 2,
		displayOptions: {
			show: showOnly,
		},
		hint: '场景，1-在小程序中联系 2-通过二维码联系',
		description: '场景。1-在小程序中联系；2-通过二维码联系。<a href="https://developer.work.weixin.qq.com/document/path/92228" target="_blank">官方文档</a>',
	},
	{
		displayName: '配置的成员列表',
		name: 'user',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnly,
		},
		hint: '可选。成员的userid列表，多个用逗号分隔',
		description: '使用该联系方式的企业成员UserID列表，多个用英文逗号分隔。<a href="https://developer.work.weixin.qq.com/document/path/92228" target="_blank">官方文档</a>',
		placeholder: 'zhangsan,lisi',
	},
	{
		displayName: '备注',
		name: 'remark',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnly,
		},
		hint: '可选。联系方式的备注信息',
		description: '联系方式的备注信息，用于管理员自己识别，不展示给客户。<a href="https://developer.work.weixin.qq.com/document/path/92228" target="_blank">官方文档</a>',
		placeholder: '官网二维码',
	},
	{
		displayName: '跳过验证',
		name: 'skip_verify',
		type: 'boolean',
		default: true,
		displayOptions: {
			show: showOnly,
		},
		hint: '可选。外部客户添加时是否无需验证',
		description: '外部客户添加时是否无需验证，默认为true（自动通过）。<a href="https://developer.work.weixin.qq.com/document/path/92228" target="_blank">官方文档</a>',
	},
	{
		displayName: '结束语',
		name: 'conclusions',
		type: 'json',
		default: '{}',
		displayOptions: {
			show: showOnly,
		},
		hint: '可选。结束语，会话结束时自动发送给客户',
		description: '结束语，可以设置文本、图片、链接等，会话结束时自动发送给客户。格式参考官方文档。<a href="https://developer.work.weixin.qq.com/document/path/92228" target="_blank">官方文档</a>',
		placeholder: '{"text":{"content":"感谢您的咨询"}}',
	},
];

