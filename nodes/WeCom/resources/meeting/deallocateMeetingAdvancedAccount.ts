import type { INodeProperties } from 'n8n-workflow';

const showOnlyForDeallocate = {
	resource: ['meeting'],
	operation: ['deallocateMeetingAdvancedAccount'],
};

export const deallocateMeetingAdvancedAccountDescription: INodeProperties[] = [
	{
		displayName: '用户ID列表',
		name: 'userids',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForDeallocate,
		},
		default: '',
		description: '需要回收会议高级账号的用户ID列表，多个用户ID用逗号分隔',
		hint: '用户ID列表，用逗号分隔',
	},
];

