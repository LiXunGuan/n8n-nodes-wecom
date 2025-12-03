import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSendImage = {
	resource: ['pushMessage'],
	operation: ['sendImage'],
};

export const sendImageDescription: INodeProperties[] = [
	{
		displayName: '图片来源',
		name: 'imageSource',
		type: 'options',
		displayOptions: {
			show: showOnlyForSendImage,
		},
		options: [
			{
				name: 'Base64',
				value: 'base64',
				description: '使用 Base64 编码的图片',
			},
			{
				name: 'MD5',
				value: 'md5',
				description: '使用图片的 MD5 值',
			},
		],
		default: 'base64',
		description: '选择图片的提供方式。<a href="https://developer.work.weixin.qq.com/document/path/99110#%E5%9B%BE%E7%89%87%E7%B1%BB%E5%9E%8B" target="_blank">官方文档</a>',
	},
	{
		displayName: 'Base64 图片',
		name: 'base64',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		displayOptions: {
			show: {
				...showOnlyForSendImage,
				imageSource: ['base64'],
			},
		},
		default: '',
		required: true,
		placeholder: 'iVBORw0KGgoAAAANSUhEUgAAAAUA...',
		description: '图片的 Base64 编码字符串（不含 data:image 前缀）。<a href="https://developer.work.weixin.qq.com/document/path/99110#%E5%9B%BE%E7%89%87%E7%B1%BB%E5%9E%8B" target="_blank">官方文档</a>',
		hint: '图片编码前大小不超过2M，支持JPG、PNG格式',
	},
	{
		displayName: 'MD5 值',
		name: 'md5',
		type: 'string',
		displayOptions: {
			show: {
				...showOnlyForSendImage,
				imageSource: ['md5'],
			},
		},
		default: '',
		required: true,
		placeholder: 'a1b2c3d4e5f6...',
		description: '图片内容的 MD5 值，用于校验图片内容的完整性。<a href="https://developer.work.weixin.qq.com/document/path/99110#%E5%9B%BE%E7%89%87%E7%B1%BB%E5%9E%8B" target="_blank">官方文档</a>',
		hint: '32位小写字符串',
	},
];

