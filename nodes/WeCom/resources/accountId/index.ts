import type { INodeProperties } from 'n8n-workflow';

export const accountIdDescription: INodeProperties[] = [
	{
		displayName: '操作',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['accountId'],
			},
		},
		options: [
			{
				name: 'userid转换',
				value: 'openuseridToUserid',
				description: '将代开发应用或第三方应用获取的密文open_userid转换为明文userid',
				action: 'userid转换',
			},
			{
				name: 'external_userid转换',
				value: 'fromServiceExternalUserid',
				description: '将代开发应用或第三方应用获取的externaluserid转换成自建应用的externaluserid',
				action: 'external_userid转换',
			},
			{
				name: 'tmp_external_userid转换',
				value: 'convertTmpExternalUserid',
				description: '将应用获取的外部用户临时ID转换为external_userid',
				action: 'tmp_external_userid转换',
			},
		],
		default: 'openuseridToUserid',
	},
	{
		displayName: '源应用ID',
		name: 'sourceAgentid',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['accountId'],
				operation: ['openuseridToUserid', 'fromServiceExternalUserid'],
			},
		},
		default: 0,
		description: '企业授权的代开发自建应用或第三方应用的agentid',
		hint: '企业授权的代开发自建应用或第三方应用的agentid',
	},
	{
		displayName: 'Open Userid列表',
		name: 'openUseridList',
		type: 'string',
		typeOptions: {
			multipleValues: true,
		},
		required: true,
		displayOptions: {
			show: {
				resource: ['accountId'],
				operation: ['openuseridToUserid'],
			},
		},
		default: [],
		description: 'Open_userid列表，最多不超过1000个',
		hint: '必须是source_agentid对应的应用所获取的open_userid，多个值请使用"Add Value"按钮添加',
	},
	{
		displayName: 'External Userid',
		name: 'externalUserid',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['accountId'],
				operation: ['fromServiceExternalUserid'],
			},
		},
		default: '',
		description: '服务商主体的external_userid',
		hint: '必须是source_agentid对应的应用所获取的external_userid',
	},
	{
		displayName: '业务类型',
		name: 'businessType',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['accountId'],
				operation: ['convertTmpExternalUserid'],
			},
		},
		options: [
			{
				name: '会议',
				value: 1,
				description: '获取会议详情',
			},
			{
				name: '收集表',
				value: 2,
				description: '收集表的统计信息查询、读取收集表答案',
			},
			{
				name: '文档',
				value: 3,
				description: '获取记录',
			},
		],
		default: 1,
		hint: '1-会议 2-收集表 3-智能表',
	},
	{
		displayName: '用户类型',
		name: 'userType',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['accountId'],
				operation: ['convertTmpExternalUserid'],
			},
		},
		options: [
			{
				name: '客户',
				value: 1,
				description: '应用可见范围内，配置了客户联系功能的企业成员所添加的外部联系人',
			},
			{
				name: '企业互联',
				value: 2,
				description: '共享应用配置共享范围内的成员',
			},
			{
				name: '上下游',
				value: 3,
				description: '共享应用配置共享范围内的成员',
			},
			{
				name: '互联企业（圈子）',
				value: 4,
				description: '管理后台配置的应用可见范围内的成员',
			},
		],
		default: 1,
		description: '转换的目标用户类型',
		hint: '1-客户 2-企业互联 3-上下游 4-互联企业（圈子）',
	},
	{
		displayName: 'Tmp External Userid列表',
		name: 'tmpExternalUseridList',
		type: 'string',
		typeOptions: {
			multipleValues: true,
		},
		required: true,
		displayOptions: {
			show: {
				resource: ['accountId'],
				operation: ['convertTmpExternalUserid'],
			},
		},
		default: [],
		description: '外部用户临时ID列表，最多不超过100个',
		hint: '外部用户临时id，多个值请使用"Add Value"按钮添加',
	},
];
