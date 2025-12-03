import type { INodeProperties } from 'n8n-workflow';

const showOnlyForDeleteMailGroup = {
	resource: ['mail'],
	operation: ['deleteMailGroup'],
};

export const deleteMailGroupDescription: INodeProperties[] = [
	{
		displayName: '群组地址',
		name: 'groupid',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForDeleteMailGroup,
		},
		default: '',
		placeholder: 'group@example.com',
		description: '要删除的邮件群组地址。<a href="https://developer.work.weixin.qq.com/document/path/95486" target="_blank">更多信息</a>',
	},
];

