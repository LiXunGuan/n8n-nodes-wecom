import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGetTradeDetail = {
	resource: ['school'],
	operation: ['getTradeDetail'],
};

export const getTradeDetailDescription: INodeProperties[] = [
	{
		displayName: '收款单ID',
		name: 'payment_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForGetTradeDetail,
		},
		default: '',
		placeholder: 'payment_001',
	},
];
