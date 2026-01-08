import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGetTradeResult = {
	resource: ['school'],
	operation: ['getTradeResult'],
};

export const getTradeResultDescription: INodeProperties[] = [
	{
		displayName: '收款单ID',
		name: 'payment_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForGetTradeResult,
		},
		default: '',
		placeholder: 'payment_001',
	},
	{
		displayName: '分页游标',
		name: 'next_key',
		type: 'string',
		displayOptions: {
			show: showOnlyForGetTradeResult,
		},
		default: '',
		description: '上次请求返回的 next_key',
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
			show: showOnlyForGetTradeResult,
		},
		default: 50,
		description: '每次拉取数量，默认 50，最大 100',
	},
];
