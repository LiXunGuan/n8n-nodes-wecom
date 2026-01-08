import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGetHealthReportJobInfo = {
	resource: ['school'],
	operation: ['getHealthReportJobInfo'],
};

export const getHealthReportJobInfoDescription: INodeProperties[] = [
	{
		displayName: '任务ID',
		name: 'jobid',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForGetHealthReportJobInfo,
		},
		default: '',
		placeholder: 'jobid_1',
		description: '健康上报任务ID',
	},
];
