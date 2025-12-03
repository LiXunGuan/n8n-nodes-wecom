import type { INodeProperties } from 'n8n-workflow';

const showOnlyListUsers = {
	resource: ['contact'],
	operation: ['listUsers'],
};

export const listUsersDescription: INodeProperties[] = [
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
			show: showOnlyListUsers,
		},
		hint: '要获取成员的部门 ID，默认为根部门',
		description: '从列表中选择部门，或使用表达式指定部门 ID。<a href="https://developer.work.weixin.qq.com/document/path/90200" target="_blank">官方文档</a>.',
	},
	{
		displayName: '是否递归获取',
		name: 'fetch_child',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: showOnlyListUsers,
		},
		hint: 'true - 递归获取子部门成员，false - 仅获取本部门成员',
		description: '是否递归获取子部门的成员。true表示递归获取所有子部门成员，false表示仅获取当前部门成员。<a href="https://developer.work.weixin.qq.com/document/path/90200" target="_blank">官方文档</a>',
	},
];

