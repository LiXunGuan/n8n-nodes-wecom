import type { INodeProperties } from 'n8n-workflow';

export const createSpaceDescription: INodeProperties[] = [
	{
		displayName: '空间名称',
		name: 'spaceName',
		type: 'string',
		required: true,
		default: '',
		placeholder: '项目文档空间',
		description: '微盘空间的名称。<a href="https://developer.work.weixin.qq.com/document/path/93654" target="_blank">更多信息</a>',
		displayOptions: {
			show: {
				resource: ['wefile'],
				operation: ['createSpace'],
			},
		},
	},
	{
		displayName: '权限信息',
		name: 'authInfo',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: false,
		},
		default: {},
		description: '可选。空间的权限配置，指定哪些成员或部门可以访问该空间。<a href="https://developer.work.weixin.qq.com/document/path/93654" target="_blank">更多信息</a>',
		displayOptions: {
			show: {
				resource: ['wefile'],
				operation: ['createSpace'],
			},
		},
		options: [
			{
				name: 'auth',
				displayName: '权限',
				values: [
					{
						displayName: '成员列表',
						name: 'userid',
						type: 'string',
						default: '',
						description: '成员ID列表，多个用逗号分隔',
					},
					{
						displayName: '部门列表',
						name: 'departmentid',
						type: 'string',
						default: '',
						description: '部门ID列表，多个用逗号分隔',
					},
					{
						displayName: '权限类型',
						name: 'auth',
						type: 'options',
						default: 1,
						options: [
							{
								name: '可下载',
								value: 1,
							},
							{
								name: '可预览',
								value: 2,
							},
							{
								name: '可编辑',
								value: 3,
							},
							{
								name: '可管理',
								value: 4,
							},
						],
					},
				],
			},
		],
	},
];