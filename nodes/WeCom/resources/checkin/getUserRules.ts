import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGetUserRules = {
	resource: ['checkin'],
	operation: ['getUserRules'],
};

export const getUserRulesDescription: INodeProperties[] = [
	{
		displayName: '成员UserID',
		name: 'userid',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForGetUserRules,
		},
		default: '',
		description: '员工的UserID。<a href="https://developer.work.weixin.qq.com/document/path/90263" target="_blank">官方文档</a>',
		placeholder: 'zhangsan',
	},
];

