import type { INodeProperties } from 'n8n-workflow';

const showOnly = {
	resource: ['invoice'],
	operation: ['updateInvoiceStatus'],
};

export const updateInvoiceStatusDescription: INodeProperties[] = [
	{
		displayName: '发票卡券ID',
		name: 'card_id',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: showOnly,
		},
		description: '发票卡券的card_id。<a href="https://developer.work.weixin.qq.com/document/path/90284" target="_blank">官方文档</a>',
		placeholder: 'pXXXXXXXXXXXXXXXX',
	},
	{
		displayName: '加密Code',
		name: 'encrypt_code',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: showOnly,
		},
		description: '加密的发票code，从接收事件中获取。<a href="https://developer.work.weixin.qq.com/document/path/90284" target="_blank">官方文档</a>',
		placeholder: 'encrypt_code_example',
	},
	{
		displayName: '发票状态',
		name: 'reimburse_status',
		type: 'options',
		options: [
			{
				name: '发票已锁定',
				value: 'INVOICE_REIMBURSE_INIT',
				description: '发票初始状态，已锁定待报销',
			},
			{
				name: '发票已核销',
				value: 'INVOICE_REIMBURSE_LOCK',
				description: '发票已被核销，不可重复使用',
			},
			{
				name: '发票已完成报销',
				value: 'INVOICE_REIMBURSE_CLOSURE',
				description: '发票已完成报销流程',
			},
		],
		required: true,
		default: 'INVOICE_REIMBURSE_INIT',
		displayOptions: {
			show: showOnly,
		},
		description: '发票报销状态。<a href="https://developer.work.weixin.qq.com/document/path/90284" target="_blank">官方文档</a>',
	},
];

