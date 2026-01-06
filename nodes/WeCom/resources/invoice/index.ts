import type { INodeProperties } from 'n8n-workflow';
import { getInvoiceInfoDescription } from './getInvoiceInfo';
import { updateInvoiceStatusDescription } from './updateInvoiceStatus';
import { batchUpdateInvoiceStatusDescription } from './batchUpdateInvoiceStatus';
import { batchGetInvoiceInfoDescription } from './batchGetInvoiceInfo';

const showOnlyForInvoice = {
	resource: ['invoice'],
};

export const invoiceDescription: INodeProperties[] = [
	{
		displayName: '操作',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForInvoice,
		},
		 
		options: [
			{
				name: '查询电子发票',
				value: 'getInvoiceInfo',
				action: '查询电子发票',
				description: '查询单张电子发票的详细信息',
			},
			{
				name: '更新发票状态',
				value: 'updateInvoiceStatus',
				action: '更新发票状态',
				description: '更新单张发票的报销状态',
			},
			{
				name: '批量更新发票状态',
				value: 'batchUpdateInvoiceStatus',
				action: '批量更新发票状态',
				description: '批量更新多张发票的报销状态',
			},
			{
				name: '批量查询电子发票',
				value: 'batchGetInvoiceInfo',
				action: '批量查询电子发票',
				description: '批量查询多张电子发票的详细信息',
			},
		],
		default: 'getInvoiceInfo',
	},
	...getInvoiceInfoDescription,
	...updateInvoiceStatusDescription,
	...batchUpdateInvoiceStatusDescription,
	...batchGetInvoiceInfoDescription,
];

