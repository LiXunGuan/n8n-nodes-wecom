import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGetUserResidentStat = {
	resource: ['living'],
	operation: ['getUserResidentStat'],
};

export const getUserResidentStatDescription: INodeProperties[] = [
	{
		displayName: '成员UserID',
		name: 'userid',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForGetUserResidentStat,
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
			show: showOnlyForGetUserResidentStat,
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
			show: showOnlyForGetUserResidentStat,
		},
		default: 0,
		description: '结束时间戳（秒）',
	},
];
