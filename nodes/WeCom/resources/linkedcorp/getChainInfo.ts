import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGetChain = {
	resource: ['linkedcorp'],
	operation: ['getChainInfo'],
};

export const getChainInfoDescription: INodeProperties[] = [
	{
		displayName: '上下游ID',
		name: 'chain_id',
		type: 'string',
		displayOptions: {
			show: showOnlyForGetChain,
		},
		default: '',
		description: '可选。上下游的唯一ID。不填则返回该企业作为上游企业的所有上下游列表。<a href="https://developer.work.weixin.qq.com/document/path/93360" target="_blank">官方文档</a>',
		placeholder: 'chain_id_example',
	},
];

