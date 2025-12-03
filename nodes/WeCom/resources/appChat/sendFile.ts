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
		displayName: '文件来源',
		name: 'fileSource',
		type: 'options',
		displayOptions: {
			show: showOnlyForSendFile,
		},
		options: [
			{
				name: '使用 Media ID',
				value: 'mediaId',
			},
			{
				name: '上传二进制文件',
				value: 'binary',
			},
		],
		default: 'binary',
		description:
			'选择文件来源方式。<a href="https://developer.work.weixin.qq.com/document/path/90248" target="_blank">官方文档</a>',
		hint: '可以直接提供 media_ID 或上传二进制文件',
	},
	{
		displayName: 'Media ID',
		name: 'media_ID',
		type: 'string',
		displayOptions: {
			show: {
				...showOnlyForSendFile,
				fileSource: ['mediaId'],
			},
		},
		default: '',
		placeholder: 'MEDIA_ID',
		required: true,
		description:
			'文件的 media_ID。<a href="https://developer.work.weixin.qq.com/document/path/90248" target="_blank">官方文档</a>',
		hint: '通过素材管理接口上传文件获得',
	},
	{
		displayName: '二进制属性',
		name: 'binaryPropertyName',
		type: 'string',
		displayOptions: {
			show: {
				...showOnlyForSendFile,
				fileSource: ['binary'],
			},
		},
		default: 'data',
		placeholder: 'data',
		required: true,
		description:
			'包含文件数据的二进制属性名。<a href="https://developer.work.weixin.qq.com/document/path/90248" target="_blank">官方文档</a>',
		hint: '存储文件的二进制属性',
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
