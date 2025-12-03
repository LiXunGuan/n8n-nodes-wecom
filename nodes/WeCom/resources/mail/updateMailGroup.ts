import type { INodeProperties } from 'n8n-workflow';

const showOnlyForUpdateMailGroup = {
	resource: ['mail'],
	operation: ['updateMailGroup'],
};

export const updateMailGroupDescription: INodeProperties[] = [
	{
		displayName: '群组地址',
		name: 'groupid',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForUpdateMailGroup,
		},
		default: '',
		placeholder: 'group@example.com',
		description: '要更新的邮件群组地址。<a href="https://developer.work.weixin.qq.com/document/path/95486" target="_blank">更多信息</a>',
	},
	{
		displayName: '群组名称',
		name: 'groupname',
		type: 'string',
		displayOptions: {
			show: showOnlyForUpdateMailGroup,
		},
		default: '',
		placeholder: '销售团队',
		description: '可选。邮件群组的新名称。<a href="https://developer.work.weixin.qq.com/document/path/95486" target="_blank">更多信息</a>',
	},
	{
		displayName: '成员列表',
		name: 'userlist',
		type: 'string',
		displayOptions: {
			show: showOnlyForUpdateMailGroup,
		},
		default: '',
		placeholder: 'user1@example.com,user2@example.com',
		description: '可选。群组成员邮箱列表，多个邮箱用英文逗号分隔。填写后将覆盖原有成员列表。<a href="https://developer.work.weixin.qq.com/document/path/95486" target="_blank">更多信息</a>',
	},
	{
		displayName: '允许外部成员',
		name: 'allow_type',
		type: 'options',
		displayOptions: {
			show: showOnlyForUpdateMailGroup,
		},
		options: [
			{
				name: '仅内部成员',
				value: 0,
			},
			{
				name: '允许外部成员',
				value: 1,
			},
		],
		default: 0,
		description: '是否允许群组包含外部成员。<a href="https://developer.work.weixin.qq.com/document/path/95486" target="_blank">更多信息</a>',
	},
];

