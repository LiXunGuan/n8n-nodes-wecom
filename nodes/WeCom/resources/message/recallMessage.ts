import type { INodeProperties } from 'n8n-workflow';

const showOnlyRecallMessage = {
	resource: ['message'],
	operation: ['recallMessage'],
};

export const recallMessageDescription: INodeProperties[] = [
	{
		displayName: 'Msgid',
		name: 'msgid',
		type: 'string',
		required: true,
		default: '',
		placeholder: 'msg_xxxxxxxxxxxx',
		displayOptions: {
			show: showOnlyRecallMessage,
		},
		hint: '只能撤回24小时内发送的消息',
		description:
			'消息 ID。从发送消息接口返回的 msgid。<a href="https://developer.work.weixin.qq.com/document/path/94867" target="_blank">官方文档</a>',
	},
];

