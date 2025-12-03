import type { INodeProperties } from 'n8n-workflow';

const showOnly = {
	resource: ['invoice'],
	operation: ['getInvoiceInfo'],
};

export const getInvoiceInfoDescription: INodeProperties[] = [
	{
		displayName: '发票卡券ID',
		name: 'card_id',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: showOnly,
		},
		description: '发票卡券的card_id。<a href="https://developer.work.weixin.qq.com/document/path/90283" target="_blank">官方文档</a>',
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
		description: '加密的发票code，从接收事件中获取。<a href="https://developer.work.weixin.qq.com/document/path/90283" target="_blank">官方文档</a>',
		placeholder: 'encrypt_code_example',
	},
];

