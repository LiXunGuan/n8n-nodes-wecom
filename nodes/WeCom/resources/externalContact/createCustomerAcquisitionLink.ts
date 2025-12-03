import type { INodeProperties } from 'n8n-workflow';

const showOnly = {
	resource: ['externalContact'],
	operation: ['createCustomerAcquisitionLink'],
};

export const createCustomerAcquisitionLinkDescription: INodeProperties[] = [
	{
		displayName: '链接名称',
		name: 'link_name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: showOnly,
		},
		hint: '获客链接名称',
		description: '获客链接的名称，用于标识和管理',
	},
	{
		displayName: '使用人员',
		name: 'range',
		type: 'json',
		required: true,
		default: '[]',
		displayOptions: {
			show: showOnly,
		},
		hint: 'JSON数组格式，包含user_list或department_list',
		description: '可使用此获客链接的人员范围，JSON格式。可包含user_list（成员列表）或department_list（部门列表）',
	},
	{
		displayName: '跳过验证',
		name: 'skip_verify',
		type: 'boolean',
		default: true,
		displayOptions: {
			show: showOnly,
		},
		hint: '外部客户添加时是否无需验证',
		description: '外部客户通过此链接添加时是否无需验证，默认为true（自动通过）',
	},
];

