import type { INodeProperties } from 'n8n-workflow';

const showOnlyForUpdateDept = {
	resource: ['contact'],
	operation: ['updateDepartment'],
};

export const updateDepartmentDescription: INodeProperties[] = [
	{
		displayName: '部门ID',
		name: 'id',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForUpdateDept,
		},
		default: '',
		placeholder: '100',
		description: '部门 ID，32位整型。<a href="https://developer.work.weixin.qq.com/document/path/90206" target="_blank">官方文档</a>',
		hint: '要更新的部门 ID',
	},
	{
		displayName: '部门名称',
		name: 'name',
		type: 'string',
		displayOptions: {
			show: showOnlyForUpdateDept,
		},
		default: '',
		placeholder: '技术部',
		description: '可选。部门名称，长度限制为1~64个utf8字符，字符不能包括 \\:*?"<>|。<a href="https://developer.work.weixin.qq.com/document/path/90206" target="_blank">官方文档</a>',
	},
	{
		displayName: '英文名称',
		name: 'name_en',
		type: 'string',
		displayOptions: {
			show: showOnlyForUpdateDept,
		},
		default: '',
		placeholder: 'Technology',
		description: '可选。英文名称，长度限制为1~64个字符，字符不能包括 \\:*?"<>|。<a href="https://developer.work.weixin.qq.com/document/path/90206" target="_blank">官方文档</a>',
	},
	{
		displayName: '父部门ID',
		name: 'parentid',
		type: 'string',
		displayOptions: {
			show: showOnlyForUpdateDept,
		},
		default: '',
		placeholder: '1',
		description: '可选。父部门 ID，32位整型。<a href="https://developer.work.weixin.qq.com/document/path/90206" target="_blank">官方文档</a>',
		hint: '修改部门的上级部门',
	},
	{
		displayName: '在父部门中的次序值',
		name: 'order',
		type: 'number',
		displayOptions: {
			show: showOnlyForUpdateDept,
		},
		default: 1,
		description: '可选。在父部门中的次序值，order 值越大排序越靠前。有效的值范围是 [0, 2^32)。<a href="https://developer.work.weixin.qq.com/document/path/90206" target="_blank">官方文档</a>',
		hint: '决定部门在列表中的显示顺序',
	},
];

