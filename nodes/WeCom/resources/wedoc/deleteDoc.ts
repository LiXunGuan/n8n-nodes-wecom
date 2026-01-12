import type { INodeProperties } from 'n8n-workflow';

const showOnlyForDelete = {
	resource: ['wedoc'],
	operation: ['deleteDoc'],
};

export const deleteDocDescription: INodeProperties[] = [
	{
		displayName: '文档类型',
		name: 'docType',
		type: 'options',
		options: [
			{ name: '文档/智能表/表格', value: 'docid' },
			{ name: '收集表', value: 'formid' },
		],
		default: 'docid',
		displayOptions: {
			show: showOnlyForDelete,
		},
		description: '选择要删除的文档类型',
	},
	{
		displayName: '文档ID',
		name: 'docid',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				...showOnlyForDelete,
				docType: ['docid'],
			},
		},
		default: '',
	},
	{
		displayName: '收集表ID',
		name: 'formid',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				...showOnlyForDelete,
				docType: ['formid'],
			},
		},
		default: '',
	},
];
