import type { INodeProperties } from 'n8n-workflow';

const showOnlyForMute = {
	resource: ['meeting'],
	operation: ['muteMember'],
};

export const muteMemberDescription: INodeProperties[] = [
	{
		displayName: '会议ID',
		name: 'meetingid',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForMute,
		},
		default: '',
		description: '要进行静音操作的会议唯一标识ID',
		hint: '会议ID',
	},
	{
		displayName: '操作类型',
		name: 'action',
		type: 'options',
		required: true,
		displayOptions: {
			show: showOnlyForMute,
		},
		options: [
			{ name: '静音', value: 'mute' },
			{ name: '取消静音', value: 'unmute' },
		],
		default: 'mute',
		description: '静音操作类型。mute表示静音，unmute表示取消静音',
		hint: '静音操作类型',
	},
	{
		displayName: '用户ID列表',
		name: 'userids',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForMute,
		},
		default: '',
		description: '要进行静音或取消静音操作的用户ID列表，多个用户ID用逗号分隔',
		hint: '要静音/取消静音的用户ID列表，用逗号分隔',
	},
];

