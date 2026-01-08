import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGetHealthReportJobIds = {
	resource: ['school'],
	operation: ['getHealthReportJobIds'],
};

export const getHealthReportJobIdsDescription: INodeProperties[] = [
	{
		displayName: '分页起始位置',
		name: 'offset',
		type: 'number',
		displayOptions: {
			show: showOnlyForGetHealthReportJobIds,
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
			show: showOnlyForGetHealthReportJobIds,
		},
		default: 50,
		description: '每次拉取数量，默认 50，最大 100',
	},
];
