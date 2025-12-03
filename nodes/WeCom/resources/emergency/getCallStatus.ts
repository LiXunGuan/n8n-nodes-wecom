import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGetCallStatus = {
	resource: ['emergency'],
	operation: ['getCallStatus'],
};

export const getCallStatusDescription: INodeProperties[] = [
	{
		displayName: '通话ID',
		name: 'callid',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForGetCallStatus,
		},
		default: '',
		placeholder: 'CALL_ID_STRING',
		description: '语音通话的唯一标识ID，由发起语音电话接口返回。<a href="https://developer.work.weixin.qq.com/document/path/91623" target="_blank">更多信息</a>',
	},
];

