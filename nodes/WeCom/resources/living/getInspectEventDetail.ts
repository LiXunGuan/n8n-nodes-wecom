import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGetInspectEventDetail = {
	resource: ['living'],
	operation: ['getInspectEventDetail'],
};

export const getInspectEventDetailDescription: INodeProperties[] = [
	{
		displayName: '事件ID',
		name: 'event_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForGetInspectEventDetail,
		},
		default: '',
		placeholder: 'evt_001',
		description: '巡查上报事件 ID',
	},
];
