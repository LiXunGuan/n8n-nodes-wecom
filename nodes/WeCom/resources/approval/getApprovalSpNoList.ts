import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGetApprovalSpNoList = {
	resource: ['approval'],
	operation: ['getApprovalSpNoList'],
};

export const getApprovalSpNoListDescription: INodeProperties[] = [
	{
		displayName: '开始时间',
		name: 'starttime',
		type: 'number',
		required: true,
		displayOptions: {
			show: showOnlyForGetApprovalSpNoList,
		},
		default: 0,
		description: '查询的起始时间，Unix时间戳（秒）',
		hint: '查询的起始时间（Unix时间戳）',
	},
	{
		displayName: '结束时间',
		name: 'endtime',
		type: 'number',
		required: true,
		displayOptions: {
			show: showOnlyForGetApprovalSpNoList,
		},
		default: 0,
		description: '查询的结束时间，Unix时间戳（秒）',
		hint: '查询的结束时间（Unix时间戳）',
	},
	{
		displayName: '游标',
		name: 'cursor',
		type: 'number',
		displayOptions: {
			show: showOnlyForGetApprovalSpNoList,
		},
		default: 0,
		description: '分页游标，用于获取下一页数据，从0开始',
		hint: '分页游标，从0开始',
	},
	{
		displayName: '每次拉取数量',
		name: 'size',
		type: 'number',
		displayOptions: {
			show: showOnlyForGetApprovalSpNoList,
		},
		default: 100,
		description: '单次拉取的审批单号数量，最大100',
		hint: '每次拉取的数量，最大100',
	},
	{
		displayName: '筛选条件',
		name: 'filters',
		type: 'json',
		displayOptions: {
			show: showOnlyForGetApprovalSpNoList,
		},
		default: '[]',
		description: '审批申请的筛选条件，JSON格式数组',
		hint: '筛选条件，JSON格式数组',
	},
];

