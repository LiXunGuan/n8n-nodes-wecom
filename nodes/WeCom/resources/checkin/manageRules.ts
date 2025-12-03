import type { INodeProperties } from 'n8n-workflow';

const showOnlyForManageRules = {
	resource: ['checkin'],
	operation: ['manageRules'],
};

export const manageRulesDescription: INodeProperties[] = [
	{
		displayName: '操作类型',
		name: 'action',
		type: 'options',
		required: true,
		displayOptions: {
			show: showOnlyForManageRules,
		},
		options: [
			{ name: '创建规则', value: 'create' },
			{ name: '更新规则', value: 'update' },
			{ name: '删除规则', value: 'delete' },
		],
		default: 'create',
		description: '管理打卡规则的操作类型。create表示创建新规则，update表示更新现有规则，delete表示删除规则',
		hint: '管理打卡规则的操作类型',
	},
	{
		displayName: '规则信息',
		name: 'ruleInfo',
		type: 'json',
		required: true,
		displayOptions: {
			show: showOnlyForManageRules,
		},
		default: '{}',
		description: '打卡规则信息，JSON格式。包含规则名称、打卡时间、地点等配置信息',
		hint: '打卡规则信息，JSON格式',
	},
];

