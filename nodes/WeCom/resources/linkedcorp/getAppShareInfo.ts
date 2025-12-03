import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGetAppShareInfo = {
	resource: ['linkedcorp'],
	operation: ['getAppShareInfo'],
};

export const getAppShareInfoDescription: INodeProperties[] = [
	{
		displayName: '应用AgentID',
		name: 'agentid',
		type: 'string',
		displayOptions: {
			show: showOnlyForGetAppShareInfo,
		},
		default: '',
		description: '可选。上级/上游企业应用的agentid。如果不填，默认使用凭证中的agentid。<a href="https://developer.work.weixin.qq.com/document/path/93360" target="_blank">官方文档</a>',
		placeholder: '1000001',
	},
	{
		displayName: '企业CorpID',
		name: 'corpid',
		type: 'string',
		displayOptions: {
			show: showOnlyForGetAppShareInfo,
		},
		default: '',
		description: '可选。下级/下游企业的corpid。若需要获取自身企业的应用共享信息，则不需要填写。<a href="https://developer.work.weixin.qq.com/document/path/93360" target="_blank">官方文档</a>',
		placeholder: 'ww1234567890abcdef',
	},
];

