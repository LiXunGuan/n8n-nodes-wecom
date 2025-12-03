import type { INodeProperties } from 'n8n-workflow';

const showOnlyForBatchDelete = {
	resource: ['contact'],
	operation: ['batchDeleteUser'],
};

export const batchDeleteUserDescription: INodeProperties[] = [
	{
		displayName: 'UserID列表',
		name: 'useridlist',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForBatchDelete,
		},
		default: '',
		placeholder: 'zhangsan,lisi,wangwu',
		description: '成员 UserID 列表，多个 UserID 用逗号分隔，最多支持200个。<a href="https://developer.work.weixin.qq.com/document/path/90199" target="_blank">官方文档</a>',
		hint: '批量删除，最多200个',
	},
];

