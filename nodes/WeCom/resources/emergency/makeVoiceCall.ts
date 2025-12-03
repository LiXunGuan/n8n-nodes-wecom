import type { INodeProperties } from 'n8n-workflow';

const showOnlyForMakeVoiceCall = {
	resource: ['emergency'],
	operation: ['makeVoiceCall'],
};

export const makeVoiceCallDescription: INodeProperties[] = [
	{
		displayName: '被叫用户UserID',
		name: 'callee_userid',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForMakeVoiceCall,
		},
		default: '',
		placeholder: 'zhangsan',
		description: '接收紧急语音电话的用户UserID，即企业成员的唯一标识。<a href="https://developer.work.weixin.qq.com/document/path/91623" target="_blank">更多信息</a>',
	},
	{
		displayName: '语音内容',
		name: 'text',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForMakeVoiceCall,
		},
		default: '',
		placeholder: '紧急通知：请立即处理系统告警',
		description: '语音电话播报的文本内容，系统会将文本转为语音播放。<a href="https://developer.work.weixin.qq.com/document/path/91623" target="_blank">更多信息</a>',
	},
];

