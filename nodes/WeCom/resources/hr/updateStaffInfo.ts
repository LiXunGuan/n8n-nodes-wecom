import type { INodeProperties } from 'n8n-workflow';

const showOnlyForUpdateStaffInfo = {
	resource: ['hr'],
	operation: ['updateStaffInfo'],
};

export const updateStaffInfoDescription: INodeProperties[] = [
	{
		displayName: '成员UserID',
		name: 'userid',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForUpdateStaffInfo,
		},
		default: '',
		placeholder: 'zhangsan',
		description: '要更新信息的员工UserID，即企业成员的唯一标识。<a href="https://developer.work.weixin.qq.com/document/path/99130" target="_blank">更多信息</a>',
	},
	{
		displayName: '更新数据',
		name: 'staffData',
		type: 'json',
		required: true,
		displayOptions: {
			show: showOnlyForUpdateStaffInfo,
		},
		default: '{}',
		description: '要更新的员工花名册信息，JSON格式。字段名需使用字段ID，可通过获取字段列表接口获取。<a href="https://developer.work.weixin.qq.com/document/path/99130" target="_blank">更多信息</a>',
		hint: '示例：{"field_id_1": "张三", "field_id_2": "研发部"}',
	},
];

