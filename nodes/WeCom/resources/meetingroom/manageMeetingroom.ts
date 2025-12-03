import type { INodeProperties } from 'n8n-workflow';

const showOnlyForManageMeetingroom = {
	resource: ['meetingroom'],
	operation: ['manageMeetingroom'],
};

export const manageMeetingroomDescription: INodeProperties[] = [
	{
		displayName: '操作类型',
		name: 'action',
		type: 'options',
		required: true,
		displayOptions: {
			show: showOnlyForManageMeetingroom,
		},
		 
		options: [
			{ name: '添加会议室', value: 'add' },
			{ name: '编辑会议室', value: 'edit' },
			{ name: '删除会议室', value: 'delete' },
			{ name: '查询会议室', value: 'get' },
			{ name: '查询会议室列表', value: 'list' },
		],
		default: 'list',
		description: '选择对会议室进行的管理操作。<a href="https://developer.work.weixin.qq.com/document/path/93618" target="_blank">更多信息</a>',
	},
	{
		displayName: '会议室数据',
		name: 'roomData',
		type: 'json',
		displayOptions: {
			show: showOnlyForManageMeetingroom,
		},
		default: '{}',
		description: '会议室相关数据，JSON格式。根据操作类型不同，需要提供的字段也不同。<a href="https://developer.work.weixin.qq.com/document/path/93618" target="_blank">更多信息</a>',
		hint: '示例：{"meetingroom_id": "room001", "name": "会议室A", "capacity": 10}',
	},
];

