import type { INodeProperties } from 'n8n-workflow';

const showOnlyForCreateAppChat = {
	resource: ['appChat'],
	operation: ['createAppChat'],
};

export const createAppChatDescription: INodeProperties[] = [
	{
		displayName: '群聊名称',
		name: 'name',
		type: 'string',
		displayOptions: {
			show: showOnlyForCreateAppChat,
		},
		default: '',
		placeholder: '请输入群聊名称',
		hint: '群聊名，最多50个utf8字符，超过将自动截断',
		description:
			'可选。群聊名称。<a href="https://developer.work.weixin.qq.com/document/path/90245" target="_blank">官方文档</a>',
	},
	{
		displayName: '群主ID',
		name: 'owner',
		type: 'string',
		displayOptions: {
			show: showOnlyForCreateAppChat,
		},
		default: '',
		placeholder: 'userid',
		required: true,
		description:
			'指定群主的 ID。<a href="https://developer.work.weixin.qq.com/document/path/90245" target="_blank">官方文档</a>',
		hint: '群主 ID，必须是 userlist 的成员之一',
	},
	{
		displayName: '成员列表',
		name: 'userlist',
		type: 'string',
		displayOptions: {
			show: showOnlyForCreateAppChat,
		},
		default: '',
		placeholder: 'user1,user2,user3',
		required: true,
		description:
			'群成员 ID 列表。<a href="https://developer.work.weixin.qq.com/document/path/90245" target="_blank">官方文档</a>',
		hint: '成员列表，用逗号分隔，最多2000人。至少2人',
	},
	{
		displayName: '指定群聊ID',
		name: 'chatid',
		type: 'string',
		displayOptions: {
			show: showOnlyForCreateAppChat,
		},
		default: '',
		placeholder: 'mychat001',
		description:
			'可选。群聊的唯一标识。<a href="https://developer.work.weixin.qq.com/document/path/90245" target="_blank">官方文档</a>',
		hint: '群聊id。字符串类型，最长32个字符。只允许字符0-9及字母a-zA-Z。如果不填，系统会随机生成群id',
	},
];
