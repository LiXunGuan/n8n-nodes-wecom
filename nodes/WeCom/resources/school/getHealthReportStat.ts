import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGetHealthReportStat = {
	resource: ['school'],
	operation: ['getHealthReportStat'],
};

export const getHealthReportStatDescription: INodeProperties[] = [
	{
		displayName: '日期',
		name: 'date',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForGetHealthReportStat,
		},
		default: '',
		placeholder: '2020-03-27',
		description: '统计日期，格式：YYYY-MM-DD，最多支持30天前数据',
	},
];
