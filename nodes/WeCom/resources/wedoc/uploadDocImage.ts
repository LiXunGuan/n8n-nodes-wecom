import type { INodeProperties } from 'n8n-workflow';
const showOnly = { resource: ['wedoc'], operation: ['uploadDocImage'] };
export const uploadDocImageDescription: INodeProperties[] = [
	{
		displayName: '文档ID',
		name: 'docid',
		type: 'string',
		required: true,
		displayOptions: { show: showOnly },
		default: '',
		description: '文档ID，通过新建文档接口创建后获得',
		placeholder: 'doc_xxxxxx',
	},
	{
		displayName: '图片来源',
		name: 'imageSource',
		type: 'options',
		required: true,
		displayOptions: { show: showOnly },
		options: [
			{
				name: '二进制数据',
				value: 'binary',
				description: '从二进制数据属性读取图片并自动转换为base64',
			},
			{
				name: 'Base64字符串',
				value: 'base64',
				description: '直接输入base64编码的图片内容',
			},
		],
		default: 'binary',
		description: '选择图片数据的来源方式',
	},
	{
		displayName: '二进制数据属性',
		name: 'binaryProperty',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				...showOnly,
				imageSource: ['binary'],
			},
		},
		default: 'data',
		description: '要上传的图片文件的二进制属性名称',
		placeholder: 'data',
	},
	{
		displayName: 'Base64内容',
		name: 'base64Content',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				...showOnly,
				imageSource: ['base64'],
			},
		},
		default: '',
		description: 'Base64编码后的图片内容',
		typeOptions: {
			rows: 4,
		},
	},
];
