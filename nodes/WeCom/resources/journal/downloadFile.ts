import type { INodeProperties } from 'n8n-workflow';

const showOnlyForDownloadFile = {
	resource: ['journal'],
	operation: ['downloadFile'],
};

export const downloadFileDescription: INodeProperties[] = [
	{
		displayName: '文件ID',
		name: 'fileid',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForDownloadFile,
		},
		default: '',
		placeholder: 'FILE_ID_STRING',
		description: '汇报中附件的文件ID，从汇报详情接口获取。<a href="https://developer.work.weixin.qq.com/document/path/93496" target="_blank">更多信息</a>',
	},
];

