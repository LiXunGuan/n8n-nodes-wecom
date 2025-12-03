import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGetStaffInfo = {
	resource: ['hr'],
	operation: ['getStaffInfo'],
};

export const getStaffInfoDescription: INodeProperties[] = [
	{
		displayName: '成员UserID',
		name: 'userid',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForGetStaffInfo,
		},
		default: '',
		placeholder: 'zhangsan',
		description: '要查询的员工UserID，即企业成员的唯一标识。<a href="https://developer.work.weixin.qq.com/document/path/99130" target="_blank">更多信息</a>',
	},
];

