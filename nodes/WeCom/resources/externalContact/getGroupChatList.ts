import type { INodeProperties } from 'n8n-workflow';

const showOnly = {
	resource: ['externalContact'],
	operation: ['getGroupChatList'],
};

export const getGroupChatListDescription: INodeProperties[] = [
	{
		displayName: '状态过滤',
		name: 'status_filter',
		type: 'options',
		options: [
			{
				name: '所有群',
				value: 0,
			},
			{
				name: '正常群',
				value: 1,
			},
			{
				name: '离职成员群',
				value: 2,
			},
			{
				name: '离职成员和离职继承的群',
				value: 3,
			},
		],
		default: 0,
		displayOptions: {
			show: showOnly,
		},
		hint: '可选。客户群跟进状态过滤',
		description: '客户群跟进状态过滤。0-所有群 1-正常群 2-离职成员群 3-离职成员和离职继承的群。<a href="https://developer.work.weixin.qq.com/document/path/92120" target="_blank">官方文档</a>',
	},
	{
		displayName: '群主UserID列表',
		name: 'owner_filter',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnly,
		},
		hint: '可选。群主的userid列表，多个用逗号分隔',
		description: '群主过滤，可以指定一个或多个成员的UserID，多个用英文逗号分隔。如果不填，表示不限。<a href="https://developer.work.weixin.qq.com/document/path/92120" target="_blank">官方文档</a>',
		placeholder: 'zhangsan,lisi',
	},
	{
		displayName: 'Cursor',
		name: 'cursor',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnly,
		},
		hint: '可选。分页查询游标',
		description: '用于分页查询的游标，首次请求留空，后续请求传入上次返回的next_cursor值。<a href="https://developer.work.weixin.qq.com/document/path/92120" target="_blank">官方文档</a>',
		placeholder: '',
	},
	{
		displayName: '每页数量',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
			maxValue: 1000,
		},
		default: 50,
		displayOptions: {
			show: showOnly,
		},
		hint: '可选。每页返回的记录数，取值范围1~1000',
		description: '每页返回的记录数量，默认50，最大1000。<a href="https://developer.work.weixin.qq.com/document/path/92120" target="_blank">官方文档</a>',
	},
];

