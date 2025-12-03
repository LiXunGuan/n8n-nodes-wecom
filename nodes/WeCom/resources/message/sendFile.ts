import type { INodeProperties } from 'n8n-workflow';
import { getRecipientFields } from './commonFields';

const showOnlySendFile = {
	resource: ['message'],
	operation: ['sendFile'],
};

export const sendFileDescription: INodeProperties[] = [
	...getRecipientFields('sendFile'),
	{
		displayName: '文件来源',
		name: 'fileSource',
		type: 'options',
		required: true,
		default: 'mediaId',
		displayOptions: {
			show: showOnlySendFile,
		},
		options: [
			{
				name: 'Media ID',
				value: 'mediaId',
				description: '使用已上传的文件媒体ID',
			},
			{
				name: '上传文件',
				value: 'upload',
				description: '从工作流输入数据中上传文件',
			},
		],
		description:
			'选择文件来源方式。<a href="https://developer.work.weixin.qq.com/document/path/90236#文件消息" target="_blank">官方文档</a>',
	},
	{
		displayName: 'Media ID',
		name: 'media_ID',
		type: 'string',
		default: '',
		required: true,
		placeholder: '请输入文件的Media ID',
		displayOptions: {
			show: {
				...showOnlySendFile,
				fileSource: ['mediaId'],
			},
		},
		description:
			'文件媒体文件ID，可以通过素材管理接口上传文件获取。<a href="https://developer.work.weixin.qq.com/document/path/90236#文件消息" target="_blank">官方文档</a>',
	},
	{
		displayName: '输入数据字段名',
		name: 'binaryPropertyName',
		type: 'string',
		default: 'data',
		required: true,
		placeholder: 'data',
		displayOptions: {
			show: {
				...showOnlySendFile,
				fileSource: ['upload'],
			},
		},
		hint: '二进制数据属性名，通常为 data',
		description:
			'包含文件数据的二进制属性名称。文件最大20MB。<a href="https://developer.work.weixin.qq.com/document/path/90236#文件消息" target="_blank">官方文档</a>',
	},
];

