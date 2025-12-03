import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGetRecordDetail = {
	resource: ['journal'],
	operation: ['getRecordDetail'],
};

export const getRecordDetailDescription: INodeProperties[] = [
	{
		displayName: '汇报ID',
		name: 'journalid',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForGetRecordDetail,
		},
		default: '',
		placeholder: 'JOURNAL_ID_STRING',
		description: '汇报记录的唯一标识ID，从汇报列表接口获取。<a href="https://developer.work.weixin.qq.com/document/path/93496" target="_blank">更多信息</a>',
	},
];

