import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSetUpgradeService = {
	resource: ['kf'],
	operation: ['setUpgradeService'],
};

export const setUpgradeServiceDescription: INodeProperties[] = [
	{
		displayName: '客服账号 Name or ID',
		name: 'open_kfid',
		type: 'options',
		typeOptions: {
			loadOptionsMethod: 'getKfAccounts',
		},
		required: true,
		displayOptions: {
			show: showOnlyForSetUpgradeService,
		},
		default: '',
		description: '客服账号的唯一标识ID，格式为wkxxxx开头的字符串。<a href="https://developer.work.weixin.qq.com/document/path/94674" target="_blank">官方文档</a>.',
		hint: '客服账号',
		placeholder: 'wkxxxxxxxxxxxxxxxxxx',
	},
	{
		displayName: '升级服务配置',
		name: 'upgrade_config',
		type: 'json',
		required: true,
		displayOptions: {
			show: showOnlyForSetUpgradeService,
		},
		default: '{}',
		hint: '升级服务配置，包括专员UserID、群聊ID等信息',
		description: '升级服务配置的JSON对象，用于配置客服会话升级到专员或客户群的规则。<a href="https://developer.work.weixin.qq.com/document/path/94674" target="_blank">官方文档</a>',
		placeholder: '{"member_range":{"userid_list":["zhangsan","lisi"]}}',
	},
];

