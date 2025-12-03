import type { INodeProperties } from 'n8n-workflow';
import { getRecipientFields } from './commonFields';

const showOnlySendImage = {
	resource: ['message'],
	operation: ['sendImage'],
};

export const sendImageDescription: INodeProperties[] = [
	...getRecipientFields('sendImage'),
	{
		displayName: '图片来源',
		name: 'imageSource',
		type: 'options',
		required: true,
		default: 'mediaId',
		displayOptions: {
			show: showOnlySendImage,
		},
		options: [
			{
				name: 'Media ID',
				value: 'mediaId',
				description: '使用已上传的图片媒体文件ID',
			},
			{
				name: '上传文件',
				value: 'upload',
				description: '从工作流输入数据中上传图片文件',
			},
		],
		description:
			'选择图片来源方式。<a href="https://developer.work.weixin.qq.com/document/path/90236#图片消息" target="_blank">官方文档</a>',
	},
	{
		displayName: 'Media ID',
		name: 'media_ID',
		type: 'string',
		default: '',
		required: true,
		placeholder: '请输入图片的Media ID',
		displayOptions: {
			show: {
				...showOnlySendImage,
				imageSource: ['mediaId'],
			},
		},
		description:
			'图片媒体文件ID，可以通过素材管理接口上传图片获取。<a href="https://developer.work.weixin.qq.com/document/path/90236#图片消息" target="_blank">官方文档</a>',
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
				...showOnlySendImage,
				imageSource: ['upload'],
			},
		},
		hint: '二进制数据属性名，通常为 data',
		description:
			'包含图片文件数据的二进制属性名称。图片最大2MB，支持JPG、PNG格式。<a href="https://developer.work.weixin.qq.com/document/path/90236#图片消息" target="_blank">官方文档</a>',
	},
];

