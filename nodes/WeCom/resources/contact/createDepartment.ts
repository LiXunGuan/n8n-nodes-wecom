import type { INodeProperties } from 'n8n-workflow';

const showOnlyForCreateDept = {
	resource: ['contact'],
	operation: ['createDepartment'],
};

export const createDepartmentDescription: INodeProperties[] = [
	{
		displayName: '部门名称',
		name: 'name',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForCreateDept,
		},
		default: '',
		placeholder: '技术部',
		description: '部门名称，长度限制为1~64个utf8字符，字符不能包括 \\:*?"<>|。<a href="https://developer.work.weixin.qq.com/document/path/90205" target="_blank">官方文档</a>',
	},
	{
		displayName: '英文名称',
		name: 'name_en',
		type: 'string',
		displayOptions: {
			show: showOnlyForCreateDept,
		},
		default: '',
		placeholder: 'Technology',
		description: '可选。英文名称，长度限制为1~64个字符，字符不能包括 \\:*?"<>|。<a href="https://developer.work.weixin.qq.com/document/path/90205" target="_blank">官方文档</a>',
	},
	{
		displayName: '父部门ID',
		name: 'parentid',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForCreateDept,
		},
		default: '1',
		placeholder: '1',
		description: '父部门 ID，32位整型。根部门 ID 为 1。<a href="https://developer.work.weixin.qq.com/document/path/90205" target="_blank">官方文档</a>',
		hint: '指定新部门的上级部门，1 表示根部门',
	},
	{
		displayName: '在父部门中的次序值',
		name: 'order',
		type: 'number',
		displayOptions: {
			show: showOnlyForCreateDept,
		},
		default: 1,
		description: '可选。在父部门中的次序值，order 值越大排序越靠前。有效的值范围是 [0, 2^32)。<a href="https://developer.work.weixin.qq.com/document/path/90205" target="_blank">官方文档</a>',
		hint: '决定部门在列表中的显示顺序',
	},
	{
		displayName: '部门ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: showOnlyForCreateDept,
		},
		default: '',
		placeholder: '100',
		description: '可选。部门 ID，32位整型，指定时必须大于1。若不填该参数，将自动生成 ID。<a href="https://developer.work.weixin.qq.com/document/path/90205" target="_blank">官方文档</a>',
		hint: '不指定则系统自动分配',
	},
];

