import type { INodeProperties } from 'n8n-workflow';

export const uploadFileDescription: INodeProperties[] = [
	{
		displayName: '空间ID',
		name: 'spaceId',
		type: 'string',
		required: true,
		default: '',
		placeholder: 'space_id_123',
		description: '要上传文件的微盘空间ID。<a href="https://developer.work.weixin.qq.com/document/path/93662" target="_blank">更多信息</a>',
		displayOptions: {
			show: {
				resource: ['wefile'],
				operation: ['uploadFile'],
			},
		},
	},
	{
		displayName: '父文件夹ID',
		name: 'fatherId',
		type: 'string',
		default: '',
		placeholder: 'folder_id_123',
		description: '可选。父文件夹的ID，不填则上传到空间根目录。<a href="https://developer.work.weixin.qq.com/document/path/93662" target="_blank">更多信息</a>',
		displayOptions: {
			show: {
				resource: ['wefile'],
				operation: ['uploadFile'],
			},
		},
	},
	{
		displayName: '文件名',
		name: 'fileName',
		type: 'string',
		required: true,
		default: '',
		placeholder: 'document.pdf',
		description: '上传文件的名称，包含文件扩展名。<a href="https://developer.work.weixin.qq.com/document/path/93662" target="_blank">更多信息</a>',
		displayOptions: {
			show: {
				resource: ['wefile'],
				operation: ['uploadFile'],
			},
		},
	},
	{
		displayName: '二进制数据',
		name: 'binaryPropertyName',
		type: 'string',
		default: 'data',
		required: true,
		description: '包含要上传文件数据的二进制属性名称。<a href="https://developer.work.weixin.qq.com/document/path/93662" target="_blank">更多信息</a>',
		displayOptions: {
			show: {
				resource: ['wefile'],
				operation: ['uploadFile'],
			},
		},
	},
];