import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGetUserInspectStat = {
	resource: ['living'],
	operation: ['getUserInspectStat'],
};

export const getUserInspectStatDescription: INodeProperties[] = [
	{
		displayName: '成员UserID',
		name: 'userid',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForGetUserInspectStat,
		},
		default: '',
		placeholder: 'zhangsan',
		description: '成员 UserID',
	},
	{
		displayName: '开始时间戳',
		name: 'start_time',
		type: 'number',
		required: true,
		displayOptions: {
			show: showOnlyForGetUserInspectStat,
		},
		default: 0,
		description: '开始时间戳（秒）',
	},
	{
		displayName: '结束时间戳',
		name: 'end_time',
		type: 'number',
		required: true,
		displayOptions: {
			show: showOnlyForGetUserInspectStat,
		},
		default: 0,
		description: '结束时间戳（秒）',
	},
];
