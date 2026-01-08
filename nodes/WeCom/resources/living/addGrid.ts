import type { INodeProperties } from 'n8n-workflow';

const showOnlyForAddGrid = {
	resource: ['living'],
	operation: ['addGrid'],
};

export const addGridDescription: INodeProperties[] = [
	{
		displayName: '网格名称',
		name: 'grid_name',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForAddGrid,
		},
		default: '',
		placeholder: '示例网格',
		description: '网格名称，最长 64 个字符',
	},
	{
		displayName: '父网格ID',
		name: 'parent_grid_id',
		type: 'string',
		displayOptions: {
			show: showOnlyForAddGrid,
		},
		default: '',
		placeholder: 'parent_001',
		description: '父网格 ID，不填表示创建顶级网格',
	},
	{
		displayName: '负责人UserID列表',
		name: 'leader_userid_list',
		type: 'string',
		displayOptions: {
			show: showOnlyForAddGrid,
		},
		default: '',
		placeholder: 'zhangsan,lisi',
		description: '负责人 UserID 列表，多个用逗号分隔，最多 20 个',
	},
	{
		displayName: '网格员UserID列表',
		name: 'member_userid_list',
		type: 'string',
		displayOptions: {
			show: showOnlyForAddGrid,
		},
		default: '',
		placeholder: 'wangwu,zhaoliu',
		description: '网格员 UserID 列表，多个用逗号分隔，最多 100 个',
	},
];
