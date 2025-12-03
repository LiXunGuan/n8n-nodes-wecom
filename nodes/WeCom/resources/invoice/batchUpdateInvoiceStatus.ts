import type { INodeProperties } from 'n8n-workflow';

const showOnly = {
	resource: ['invoice'],
	operation: ['batchUpdateInvoiceStatus'],
};

export const batchUpdateInvoiceStatusDescription: INodeProperties[] = [
	{
		displayName: 'OpenID',
		name: 'openid',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: showOnly,
		},
		description: '用户的openid。<a href="https://developer.work.weixin.qq.com/document/path/90286" target="_blank">官方文档</a>',
		placeholder: 'oxxxxxxxxxxxxxxxxxxxx',
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
		description: '发票报销状态。<a href="https://developer.work.weixin.qq.com/document/path/90286" target="_blank">官方文档</a>',
	},
	{
		displayName: '发票列表',
		name: 'invoice_list',
		type: 'json',
		required: true,
		default: '[{"card_id": "pXXXXXXXXXXXXXXXX", "encrypt_code": "encrypt_code_example"}]',
		displayOptions: {
			show: showOnly,
		},
		description: '发票列表，JSON数组格式，每项包含card_id（发票卡券ID）和encrypt_code（加密code）。最多支持100张发票。<a href="https://developer.work.weixin.qq.com/document/path/90286" target="_blank">官方文档</a>',
		hint: 'JSON数组，包含card_id和encrypt_code',
	},
];

