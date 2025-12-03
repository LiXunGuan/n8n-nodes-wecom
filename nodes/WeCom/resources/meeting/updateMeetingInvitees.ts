import type { INodeProperties } from 'n8n-workflow';

const showOnlyForUpdate = {
	resource: ['meeting'],
	operation: ['updateMeetingInvitees'],
};

export const updateMeetingInviteesDescription: INodeProperties[] = [
	{
		displayName: '会议ID',
		name: 'meetingid',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForUpdate,
		},
		default: '',
		description: '要更新受邀成员的会议唯一标识ID',
		hint: '会议ID',
	},
	{
		displayName: '受邀成员',
		name: 'invitees',
		type: 'json',
		required: true,
		displayOptions: {
			show: showOnlyForUpdate,
		},
		default: '[{"userid": "user1"}]',
		description: '要添加或删除的受邀成员列表，JSON格式数组。包含userid字段',
		hint: '要添加或删除的受邀成员，JSON格式数组',
	},
];

