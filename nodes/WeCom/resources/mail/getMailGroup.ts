import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGetMailGroup = {
	resource: ['mail'],
	operation: ['getMailGroup'],
};

export const getMailGroupDescription: INodeProperties[] = [
	{
		displayName: '群组地址',
		name: 'groupid',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForGetMailGroup,
		},
		default: '',
		placeholder: 'group@example.com',
		description: '要查询的邮件群组地址。<a href="https://developer.work.weixin.qq.com/document/path/95486" target="_blank">更多信息</a>',
	},
];

