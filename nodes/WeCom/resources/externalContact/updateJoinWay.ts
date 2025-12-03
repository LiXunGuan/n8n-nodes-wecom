import type { INodeProperties } from 'n8n-workflow';

const showOnly = {
	resource: ['externalContact'],
	operation: ['updateJoinWay'],
};

export const updateJoinWayDescription: INodeProperties[] = [
	{
		displayName: '配置ID',
		name: 'config_id',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: showOnly,
		},
		hint: '加入群聊的配置id',
		description: '要更新的加入群聊配置的唯一标识ID',
	},
	{
		displayName: '群聊ID列表',
		name: 'chat_id_list',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnly,
		},
		hint: '客户群ID列表，用逗号分隔',
		description: '客户群ID列表，多个群ID用逗号分隔',
	},
	{
		displayName: '自动创建群',
		name: 'auto_create_room',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: showOnly,
		},
		hint: '当群满了后，是否自动新建群',
		description: '当群满员后，是否自动新建群。设置为true时会自动创建新群',
	},
];

