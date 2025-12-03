import type { INodeProperties } from 'n8n-workflow';

const showOnlyForUpdateAppChat = {
	resource: ['appChat'],
	operation: ['updateAppChat'],
};

export const updateAppChatDescription: INodeProperties[] = [
	{
		displayName: '群聊ID',
		name: 'chatid',
		type: 'string',
		displayOptions: {
			show: showOnlyForUpdateAppChat,
		},
		default: '',
		placeholder: 'mychat001',
		required: true,
		description:
			'群聊的唯一标识。<a href="https://developer.work.weixin.qq.com/document/path/90246" target="_blank">官方文档</a>',
		hint: '群聊会话的 chatid',
	},
	{
		displayName: '更新类型',
		name: 'updateType',
		type: 'options',
		displayOptions: {
			show: showOnlyForUpdateAppChat,
		},
		options: [
		{
			name: '删除成员',
			value: 'delUsers',
		},
		{
			name: '添加成员',
			value: 'addUsers',
		},
		{
			name: '修改群名称',
			value: 'name',
		},
		{
			name: '修改群主',
			value: 'owner',
		},
		{
			name: '组合更新',
			value: 'combined',
		},
	],
		default: 'name',
		description:
			'选择要更新的内容。<a href="https://developer.work.weixin.qq.com/document/path/90246" target="_blank">官方文档</a>',
		hint: '可以单独更新或组合更新多个字段',
	},
	{
		displayName: '群聊名称',
		name: 'name',
		type: 'string',
		displayOptions: {
			show: {
				...showOnlyForUpdateAppChat,
				updateType: ['name', 'combined'],
			},
		},
		default: '',
		placeholder: '请输入新的群聊名称',
		description:
			'可选。新的群聊名称。<a href="https://developer.work.weixin.qq.com/document/path/90246" target="_blank">官方文档</a>',
		hint: '群聊名，最多50个utf8字符，超过将自动截断',
	},
	{
		displayName: '群主ID',
		name: 'owner',
		type: 'string',
		displayOptions: {
			show: {
				...showOnlyForUpdateAppChat,
				updateType: ['owner', 'combined'],
			},
		},
		default: '',
		placeholder: 'userid',
		description:
			'可选。新的群主 ID。<a href="https://developer.work.weixin.qq.com/document/path/90246" target="_blank">官方文档</a>',
		hint: '群主 ID，必须是群成员之一',
	},
	{
		displayName: '添加成员列表',
		name: 'add_user_list',
		type: 'string',
		displayOptions: {
			show: {
				...showOnlyForUpdateAppChat,
				updateType: ['addUsers', 'combined'],
			},
		},
		default: '',
		placeholder: 'user1,user2,user3',
		description:
			'可选。要添加的成员 ID 列表。<a href="https://developer.work.weixin.qq.com/document/path/90246" target="_blank">官方文档</a>',
		hint: '成员列表，用逗号分隔',
	},
	{
		displayName: '删除成员列表',
		name: 'del_user_list',
		type: 'string',
		displayOptions: {
			show: {
				...showOnlyForUpdateAppChat,
				updateType: ['delUsers', 'combined'],
			},
		},
		default: '',
		placeholder: 'user4,user5',
		description:
			'可选。要删除的成员 ID 列表。<a href="https://developer.work.weixin.qq.com/document/path/90246" target="_blank">官方文档</a>',
		hint: '成员列表，用逗号分隔',
	},
];
