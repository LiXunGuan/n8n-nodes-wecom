import type { INodeProperties } from 'n8n-workflow';

const showOnlyForUpdateGrid = {
	resource: ['living'],
	operation: ['updateGrid'],
};

export const updateGridDescription: INodeProperties[] = [
	{
		displayName: '网格ID',
		name: 'grid_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForUpdateGrid,
		},
		default: '',
		placeholder: 'grid_001',
		description: '要更新的网格 ID',
	},
	{
		displayName: '网格名称',
		name: 'grid_name',
		type: 'string',
		displayOptions: {
			show: showOnlyForUpdateGrid,
		},
		default: '',
		placeholder: '更新后的网格名称',
		description: '新的网格名称，不填表示不更新',
	},
	{
		displayName: '负责人UserID列表',
		name: 'leader_userid_list',
		type: 'string',
		displayOptions: {
			show: showOnlyForUpdateGrid,
		},
		default: '',
		placeholder: 'zhangsan,lisi',
		description: '负责人 UserID 列表，多个用逗号分隔，传入表示全量覆盖',
	},
	{
		displayName: '网格员UserID列表',
		name: 'member_userid_list',
		type: 'string',
		displayOptions: {
			show: showOnlyForUpdateGrid,
		},
		default: '',
		placeholder: 'wangwu,zhaoliu',
		description: '网格员 UserID 列表，多个用逗号分隔，传入表示全量覆盖',
	},
];
