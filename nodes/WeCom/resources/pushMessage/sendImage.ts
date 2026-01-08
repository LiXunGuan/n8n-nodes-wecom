import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSendImage = {
	resource: ['pushMessage'],
	operation: ['sendImage'],
};

export const sendImageDescription: INodeProperties[] = [
	{
		displayName: 'Base64 图片',
		name: 'base64',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		displayOptions: {
			show: showOnlyForSendImage,
		},
		default: '',
		required: true,
		placeholder: 'iVBORw0KGgoAAAANSUhEUgAAAAUA...',
		description: '图片内容的 Base64 编码（不含 data:image 前缀）。<a href="https://developer.work.weixin.qq.com/document/path/99110#%E5%9B%BE%E7%89%87%E7%B1%BB%E5%9E%8B" target="_blank">官方文档</a>',
		hint: '图片（Base64编码前）最大不超过2M，支持JPG、PNG格式',
	},
	{
		displayName: 'MD5 值',
		name: 'md5',
		type: 'string',
		displayOptions: {
			show: showOnlyForSendImage,
		},
		default: '',
		required: true,
		placeholder: 'a1b2c3d4e5f6g7h8i9j0...',
		description: '图片内容（Base64编码前）的 MD5 值。<a href="https://developer.work.weixin.qq.com/document/path/99110#%E5%9B%BE%E7%89%87%E7%B1%BB%E5%9E%8B" target="_blank">官方文档</a>',
		hint: '32位小写字符串，用于校验图片完整性',
	},
];

