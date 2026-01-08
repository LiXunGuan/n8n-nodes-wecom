import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGetHealthReportAnswer = {
	resource: ['school'],
	operation: ['getHealthReportAnswer'],
};

export const getHealthReportAnswerDescription: INodeProperties[] = [
	{
		displayName: '任务ID',
		name: 'jobid',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForGetHealthReportAnswer,
		},
		default: '',
		placeholder: 'jobid_1',
		description: '健康上报任务ID',
	},
	{
		displayName: '上报日期',
		name: 'date',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForGetHealthReportAnswer,
		},
		default: '',
		placeholder: '2020-03-27',
		description: '上报日期，格式：YYYY-MM-DD',
	},
	{
		displayName: '分页起始位置',
		name: 'offset',
		type: 'number',
		displayOptions: {
			show: showOnlyForGetHealthReportAnswer,
		},
		default: 0,
		description: '分页起始位置，默认 0',
	},
	{
		displayName: '返回数量',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
			maxValue: 100,
		},
		displayOptions: {
			show: showOnlyForGetHealthReportAnswer,
		},
		default: 50,
		description: '每次拉取数量，默认 50，最大 100',
	},
];
