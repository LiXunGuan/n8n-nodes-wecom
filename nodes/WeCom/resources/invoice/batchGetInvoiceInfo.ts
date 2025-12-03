import type { INodeProperties } from 'n8n-workflow';

const showOnly = {
	resource: ['invoice'],
	operation: ['batchGetInvoiceInfo'],
};

export const batchGetInvoiceInfoDescription: INodeProperties[] = [
	{
		displayName: '发票项列表',
		name: 'item_list',
		type: 'json',
		required: true,
		default: '[{"card_id": "pXXXXXXXXXXXXXXXX", "encrypt_code": "encrypt_code_example"}]',
		displayOptions: {
			show: showOnly,
		},
		description: '发票项列表，JSON数组格式，每项包含card_id（发票卡券ID）和encrypt_code（加密code）。最多支持100张发票。<a href="https://developer.work.weixin.qq.com/document/path/90285" target="_blank">官方文档</a>',
		hint: 'JSON数组，包含card_id和encrypt_code',
	},
];

