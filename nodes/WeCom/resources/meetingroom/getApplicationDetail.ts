import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGetApplicationDetail = {
	resource: ['meetingroom'],
	operation: ['getApplicationDetail'],
};

export const getApplicationDetailDescription: INodeProperties[] = [
	{
		displayName: '申请单ID列表',
		name: 'meeting_id_list',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForGetApplicationDetail,
		},
		default: '',
		placeholder: 'meet001,meet002',
		description: '要查询的会议室申请单ID列表，多个ID用英文逗号分隔。<a href="https://developer.work.weixin.qq.com/document/path/93618" target="_blank">更多信息</a>',
	},
];

