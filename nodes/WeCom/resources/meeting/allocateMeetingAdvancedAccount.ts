import type { INodeProperties } from 'n8n-workflow';

const showOnlyForAllocate = {
	resource: ['meeting'],
	operation: ['allocateMeetingAdvancedAccount'],
};

export const allocateMeetingAdvancedAccountDescription: INodeProperties[] = [
	{
		displayName: '用户ID列表',
		name: 'userids',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForAllocate,
		},
		default: '',
		description: '需要分配会议高级账号的用户ID列表，多个用户ID用逗号分隔',
		hint: '用户ID列表，用逗号分隔',
	},
];

