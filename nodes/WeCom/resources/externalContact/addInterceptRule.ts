import type { INodeProperties } from 'n8n-workflow';

const showOnly = {
	resource: ['externalContact'],
	operation: ['addInterceptRule'],
};

export const addInterceptRuleDescription: INodeProperties[] = [
	{
		displayName: '规则名称',
		name: 'rule_name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: showOnly,
		},
		description: '拦截规则的名称，用于标识此规则',
		hint: '规则名称',
	},
	{
		displayName: '敏感词列表',
		name: 'word_list',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: showOnly,
		},
		description: '要拦截的敏感词列表，多个敏感词用逗号分隔',
		hint: '敏感词列表，用逗号分隔',
	},
	{
		displayName: '适用范围',
		name: 'semantics_list',
		type: 'json',
		default: '[]',
		displayOptions: {
			show: showOnly,
		},
		description: '规则适用的语义范围，JSON数组格式',
		hint: 'JSON数组格式的适用范围',
	},
];

