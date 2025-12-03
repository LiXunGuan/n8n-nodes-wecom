import type { INodeProperties } from 'n8n-workflow';

const showOnlyForManageKnowledgeGroup = {
	resource: ['kf'],
	operation: ['manageKnowledgeGroup'],
};

export const manageKnowledgeGroupDescription: INodeProperties[] = [
	{
		displayName: '操作类型',
		name: 'action_type',
		type: 'options',
		required: true,
		displayOptions: {
			show: showOnlyForManageKnowledgeGroup,
		},
		options: [
			{
				name: '新增分组',
				value: 'add',
				description: '创建新的知识库分组',
			},
			{
				name: '删除分组',
				value: 'del',
				description: '删除已存在的知识库分组',
			},
			{
				name: '修改分组',
				value: 'mod',
				description: '修改知识库分组的名称或其他属性',
			},
			{
				name: '获取分组列表',
				value: 'list',
				description: '查询所有知识库分组',
			},
		],
		default: 'list',
		hint: '选择对知识库分组进行的管理操作',
		description: '知识库分组管理的操作类型，用于管理微信客服的知识库分组结构。<a href="https://developer.work.weixin.qq.com/document/path/95971" target="_blank">官方文档</a>',
	},
	{
		displayName: '操作参数',
		name: 'params',
		type: 'json',
		displayOptions: {
			show: showOnlyForManageKnowledgeGroup,
		},
		default: '{}',
		hint: '根据操作类型提供相应的参数JSON对象',
		description: '操作参数的JSON对象，不同操作类型需要不同的参数结构。如新增分组需要name字段，修改分组需要group_id和name字段等。<a href="https://developer.work.weixin.qq.com/document/path/95971" target="_blank">官方文档</a>',
		placeholder: '{"name":"产品问题","parent_id":""}',
	},
];

