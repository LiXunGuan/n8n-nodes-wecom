import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGetLivingInfo = {
	resource: ['school'],
	operation: ['getLivingInfo'],
};

export const getLivingInfoDescription: INodeProperties[] = [
	{
		displayName: '直播ID',
		name: 'livingid',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForGetLivingInfo,
		},
		default: '',
		placeholder: 'living_001',
	},
];
