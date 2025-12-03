import type { INodeProperties } from 'n8n-workflow';

const showOnly = {
	resource: ['externalContact'],
	operation: ['updateContactWay'],
};

export const updateContactWayDescription: INodeProperties[] = [
	{
		displayName: '联系方式配置ID',
		name: 'config_id',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: showOnly,
		},
		hint: '联系方式的配置id',
		description: '联系方式的配置ID，要更新的联系方式的唯一标识。<a href="https://developer.work.weixin.qq.com/document/path/92228" target="_blank">官方文档</a>',
		placeholder: 'xxxxxxxxxxxxxxx',
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
		description: '外部客户添加时是否无需验证，true表示自动通过好友申请。<a href="https://developer.work.weixin.qq.com/document/path/92228" target="_blank">官方文档</a>',
	},
];

