import type { INodeProperties } from 'n8n-workflow';
import { getRecipientFields } from './commonFields';

const showOnlySendMarkdown = {
	resource: ['message'],
	operation: ['sendMarkdown'],
};

export const sendMarkdownDescription: INodeProperties[] = [
	...getRecipientFields('sendMarkdown'),
	{
		displayName: 'Markdown 内容',
		name: 'content',
		type: 'string',
		typeOptions: {
			rows: 6,
		},
		required: true,
		default: '',
		placeholder: '请输入Markdown格式的消息内容',
		displayOptions: {
			show: showOnlySendMarkdown,
		},
		description:
			'Markdown格式的消息内容，最长不超过2048个字节，必须是utf8编码。目前仅支持markdown语法的子集，支持的语法详见官方文档。<a href="https://developer.work.weixin.qq.com/document/path/90236#markdown消息" target="_blank">官方文档</a>',
	},
];

