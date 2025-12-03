import type { INodeProperties } from 'n8n-workflow';

const showOnlyForDelTagUsers = {
	resource: ['contact'],
	operation: ['delTagUsers'],
};

export const delTagUsersDescription: INodeProperties[] = [
	{
		displayName: '标签ID',
		name: 'tagid',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForDelTagUsers,
		},
		default: '',
		placeholder: '100',
		description: '标签 ID。<a href="https://developer.work.weixin.qq.com/document/path/90215" target="_blank">官方文档</a>',
		hint: '要删除成员的标签 ID',
	},
	{
		displayName: 'UserID列表',
		name: 'userlist',
		type: 'string',
		displayOptions: {
			show: showOnlyForDelTagUsers,
		},
		default: '',
		placeholder: 'zhangsan,lisi,wangwu',
		description: '可选。企业成员 ID 列表，多个成员 ID 用逗号分隔。注意：userlist、partylist 不能同时为空。<a href="https://developer.work.weixin.qq.com/document/path/90215" target="_blank">官方文档</a>',
		hint: '要从标签中移除的成员列表',
	},
	{
		displayName: '部门ID列表',
		name: 'partylist',
		type: 'string',
		displayOptions: {
			show: showOnlyForDelTagUsers,
		},
		default: '',
		placeholder: '1,2,3',
		description: '可选。企业部门 ID 列表，多个部门 ID 用逗号分隔。注意：userlist、partylist 不能同时为空。<a href="https://developer.work.weixin.qq.com/document/path/90215" target="_blank">官方文档</a>',
		hint: '要从标签中移除的部门列表',
	},
];

