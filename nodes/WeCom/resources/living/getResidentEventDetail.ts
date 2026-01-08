import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGetResidentEventDetail = {
	resource: ['living'],
	operation: ['getResidentEventDetail'],
};

export const getResidentEventDetailDescription: INodeProperties[] = [
	{
		displayName: '事件ID',
		name: 'event_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForGetResidentEventDetail,
		},
		default: '',
		placeholder: 'evt_res_001',
		description: '居民上报事件 ID',
	},
];
