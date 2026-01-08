import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSendFile = {
	resource: ['appChat'],
	operation: ['sendFile'],
};

export const sendFileDescription: INodeProperties[] = [
	{
		displayName: '群聊ID',
		name: 'chatid',
		type: 'string',
		displayOptions: {
			show: showOnlyForSendFile,
		},
		default: '',
		placeholder: 'mychat001',
		required: true,
		description:
			'群聊的唯一标识。<a href="https://developer.work.weixin.qq.com/document/path/90248" target="_blank">官方文档</a>',
		hint: '群聊会话的 chatid',
	},
	{
		displayName: 'Media ID',
		name: 'media_ID',
		type: 'string',
		displayOptions: {
			show: showOnlyForSendFile,
		},
		default: '',
		placeholder: 'MEDIA_ID',
		required: true,
		description:
			'文件的 media_ID。<a href="https://developer.work.weixin.qq.com/document/path/90248" target="_blank">官方文档</a>',
		hint: '通过素材管理接口上传文件获得',
	},
	{
		displayName: '保密消息',
		name: 'safe',
		type: 'boolean',
		displayOptions: {
			show: showOnlyForSendFile,
		},
		default: false,
		description:
			'可选。表示是否是保密消息。<a href="https://developer.work.weixin.qq.com/document/path/90248" target="_blank">官方文档</a>',
		hint: '保密消息会话中的消息在发送后不会显示在聊天记录中',
	},
];
