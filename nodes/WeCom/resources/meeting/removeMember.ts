import type { INodeProperties } from 'n8n-workflow';

const showOnlyForRemove = {
	resource: ['meeting'],
	operation: ['removeMember'],
};

export const removeMemberDescription: INodeProperties[] = [
	{
		displayName: '会议ID',
		name: 'meetingid',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForRemove,
		},
		default: '',
		description: '要移出成员的会议唯一标识ID',
		hint: '会议ID',
	},
	{
		displayName: '用户ID列表',
		name: 'userids',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForRemove,
		},
		default: '',
		description: '要从会议中移出的用户ID列表，多个用户ID用逗号分隔',
		hint: '要移出的用户ID列表，用逗号分隔',
	},
];

