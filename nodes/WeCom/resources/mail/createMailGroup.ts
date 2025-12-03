import type { INodeProperties } from 'n8n-workflow';

const showOnlyForCreateMailGroup = {
	resource: ['mail'],
	operation: ['createMailGroup'],
};

export const createMailGroupDescription: INodeProperties[] = [
	{
		displayName: '群组地址',
		name: 'groupid',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForCreateMailGroup,
		},
		default: '',
		placeholder: 'group@example.com',
		description: '邮件群组的邮箱地址，作为群组的唯一标识。<a href="https://developer.work.weixin.qq.com/document/path/95486" target="_blank">更多信息</a>',
	},
	{
		displayName: '群组名称',
		name: 'groupname',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForCreateMailGroup,
		},
		default: '',
		placeholder: '销售团队',
		description: '邮件群组的显示名称。<a href="https://developer.work.weixin.qq.com/document/path/95486" target="_blank">更多信息</a>',
	},
	{
		displayName: '成员列表',
		name: 'userlist',
		type: 'string',
		displayOptions: {
			show: showOnlyForCreateMailGroup,
		},
		default: '',
		placeholder: 'user1@example.com,user2@example.com',
		description: '可选。群组成员邮箱列表，多个邮箱用英文逗号分隔。<a href="https://developer.work.weixin.qq.com/document/path/95486" target="_blank">更多信息</a>',
	},
	{
		displayName: '允许外部成员',
		name: 'allow_type',
		type: 'options',
		displayOptions: {
			show: showOnlyForCreateMailGroup,
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

