import type { INodeProperties } from 'n8n-workflow';
import { uploadTempDescription } from './uploadTemp';
import { getTempDescription } from './getTemp';
import { uploadImageDescription } from './uploadImage';
import { getHighQualityVoiceDescription } from './getHighQualityVoice';
import { uploadTempAsyncDescription } from './uploadTempAsync';

const showOnlyForMaterial = {
	resource: ['material'],
};

export const materialDescription: INodeProperties[] = [
	{
		displayName: '操作',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForMaterial,
		},
		 
		options: [
			{ name: '上传临时素材', value: 'uploadTemp', action: '上传临时素材', description: '上传临时素材（图片、语音、视频、文件）' },
			{ name: '上传图片', value: 'uploadImage', action: '上传图片', description: '上传图片素材（永久有效）' },
			{ name: '异步上传临时素材', value: 'uploadTempAsync', action: '异步上传临时素材', description: '异步上传临时素材（大文件）' },
			{ name: '获取临时素材', value: 'getTemp', action: '获取临时素材', description: '下载已上传的临时素材文件' },
			{ name: '获取高清语音素材', value: 'getHighQualityVoice', action: '获取高清语音素材', description: '下载高清语音素材文件' },
		],
		default: 'uploadTemp',
	},
	...uploadTempDescription,
	...getTempDescription,
	...uploadImageDescription,
	...getHighQualityVoiceDescription,
	...uploadTempAsyncDescription,
];

