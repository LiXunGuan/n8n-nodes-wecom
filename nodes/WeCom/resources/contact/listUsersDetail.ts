import type { INodeProperties } from 'n8n-workflow';

const showOnlyListUsersDetail = {
	resource: ['contact'],
	operation: ['listUsersDetail'],
};

export const listUsersDetailDescription: INodeProperties[] = [
	{
		displayName: '部门 Name or ID',
		name: 'department_id',
		type: 'options',
		typeOptions: {
			loadOptionsMethod: 'getDepartments',
		},
		required: true,
		default: '',
		displayOptions: {
			show: showOnlyListUsersDetail,
		},
		hint: '要获取成员详情的部门 ID，默认为根部门',
		description: '从列表中选择部门，或使用表达式指定部门 ID。相比简单列表，返回成员的详细信息。<a href="https://developer.work.weixin.qq.com/document/path/90201" target="_blank">官方文档</a>.',
	},
	{
		displayName: '是否递归获取',
		name: 'fetch_child',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: showOnlyListUsersDetail,
		},
		hint: 'true - 递归获取子部门成员，false - 仅获取本部门成员',
		description: '是否递归获取子部门的成员详情。true表示递归获取所有子部门成员，false表示仅获取当前部门成员。<a href="https://developer.work.weixin.qq.com/document/path/90201" target="_blank">官方文档</a>',
	},
];

