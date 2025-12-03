import type { INodeProperties } from 'n8n-workflow';

const showOnlyForManageKnowledgeIntent = {
	resource: ['kf'],
	operation: ['manageKnowledgeIntent'],
};

export const manageKnowledgeIntentDescription: INodeProperties[] = [
	{
		displayName: '操作类型',
		name: 'action_type',
		type: 'options',
		required: true,
		displayOptions: {
			show: showOnlyForManageKnowledgeIntent,
		},
		options: [
			{
				name: '新增问答',
				value: 'add',
				description: '创建新的知识库问答对',
			},
			{
				name: '删除问答',
				value: 'del',
				description: '删除已存在的知识库问答',
			},
			{
				name: '修改问答',
				value: 'mod',
				description: '修改知识库问答的内容',
			},
			{
				name: '获取问答列表',
				value: 'list',
				description: '查询知识库中的问答列表',
			},
		],
		default: 'list',
		hint: '选择对知识库问答进行的管理操作',
		description: '知识库问答管理的操作类型，用于管理微信客服智能助手的问答内容。<a href="https://developer.work.weixin.qq.com/document/path/95972" target="_blank">官方文档</a>',
	},
	{
		displayName: '操作参数',
		name: 'params',
		type: 'json',
		displayOptions: {
			show: showOnlyForManageKnowledgeIntent,
		},
		default: '{}',
		hint: '根据操作类型提供相应的参数JSON对象',
		description: '操作参数的JSON对象，不同操作类型需要不同的参数结构。如新增问答需要question、answer、group_id等字段。<a href="https://developer.work.weixin.qq.com/document/path/95972" target="_blank">官方文档</a>',
		placeholder: '{"group_id":"xxx","question":{"text":"如何退款"},"answer":[{"msgtype":"text","text":"请联系客服"}]}',
	},
];

