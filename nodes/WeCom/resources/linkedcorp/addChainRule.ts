import type { INodeProperties } from 'n8n-workflow';

const showOnlyForAddRule = {
	resource: ['linkedcorp'],
	operation: ['addChainRule'],
};

export const addChainRuleDescription: INodeProperties[] = [
	{
		displayName: '上下游ID',
		name: 'chain_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForAddRule,
		},
		default: '',
		description: '上下游的唯一ID。<a href="https://developer.work.weixin.qq.com/document/path/93360" target="_blank">官方文档</a>',
		placeholder: 'chain_id_example',
	},
	{
		displayName: '规则名称',
		name: 'rule_name',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForAddRule,
		},
		default: '',
		description: '对接规则名称。<a href="https://developer.work.weixin.qq.com/document/path/93360" target="_blank">官方文档</a>',
		placeholder: '销售部门对接规则',
	},
	{
		displayName: '规则配置',
		name: 'rule_config',
		type: 'json',
		required: true,
		displayOptions: {
			show: showOnlyForAddRule,
		},
		default: '{"match_type": 1, "range": [{"type": 1, "userid": "zhangsan"}]}',
		description: '对接规则配置，JSON格式。包含match_type（匹配类型：1-按人员，2-按部门）、range（匹配范围）等。<a href="https://developer.work.weixin.qq.com/document/path/93360" target="_blank">官方文档</a>',
		hint: '规则配置JSON',
	},
];

