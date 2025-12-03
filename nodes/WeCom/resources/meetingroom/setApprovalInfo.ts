import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSetApprovalInfo = {
	resource: ['meetingroom'],
	operation: ['setApprovalInfo'],
};

export const setApprovalInfoDescription: INodeProperties[] = [
	{
		displayName: '申请单ID',
		name: 'meeting_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForSetApprovalInfo,
		},
		default: '',
		placeholder: 'meet001',
		description: '要审批的会议室申请单ID。<a href="https://developer.work.weixin.qq.com/document/path/93618" target="_blank">更多信息</a>',
	},
	{
		displayName: '审批结果',
		name: 'approve_status',
		type: 'options',
		required: true,
		displayOptions: {
			show: showOnlyForSetApprovalInfo,
		},
		options: [
			{ name: '审批通过', value: 1 },
			{ name: '审批拒绝', value: 2 },
		],
		default: 1,
		description: '会议室申请的审批结果。<a href="https://developer.work.weixin.qq.com/document/path/93618" target="_blank">更多信息</a>',
	},
	{
		displayName: '审批意见',
		name: 'approve_info',
		type: 'string',
		displayOptions: {
			show: showOnlyForSetApprovalInfo,
		},
		default: '',
		placeholder: '同意使用会议室',
		description: '可选。审批意见或备注信息。<a href="https://developer.work.weixin.qq.com/document/path/93618" target="_blank">更多信息</a>',
	},
];

