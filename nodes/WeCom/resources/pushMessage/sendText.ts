import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSendText = {
	resource: ['pushMessage'],
	operation: ['sendText'],
};

export const sendTextDescription: INodeProperties[] = [
	{
		displayName: '消息内容',
		name: 'content',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		displayOptions: {
			show: showOnlyForSendText,
		},
		default: '',
		required: true,
		placeholder: '请输入文本消息内容...',
		description: '文本消息内容，最长不超过2048个字节。<a href="https://developer.work.weixin.qq.com/document/path/99110#%E6%96%87%E6%9C%AC%E7%B1%BB%E5%9E%8B" target="_blank">官方文档</a>',
		hint: '支持换行符，支持通过\\n换行',
	},
];

