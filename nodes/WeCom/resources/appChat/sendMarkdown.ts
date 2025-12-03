import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSendMarkdown = {
	resource: ['appChat'],
	operation: ['sendMarkdown'],
};

export const sendMarkdownDescription: INodeProperties[] = [
	{
		displayName: '群聊ID',
		name: 'chatid',
		type: 'string',
		displayOptions: {
			show: showOnlyForSendMarkdown,
		},
		default: '',
		placeholder: 'mychat001',
		required: true,
		description:
			'群聊的唯一标识。<a href="https://developer.work.weixin.qq.com/document/path/90248" target="_blank">官方文档</a>',
		hint: '群聊会话的 chatid',
	},
	{
		displayName: '消息内容',
		name: 'content',
		type: 'string',
		typeOptions: {
			rows: 6,
		},
		displayOptions: {
			show: showOnlyForSendMarkdown,
		},
		default: '',
		placeholder: '# 标题\n\n**加粗** *斜体*',
		required: true,
		description:
			'Markdown 格式的消息内容。<a href="https://developer.work.weixin.qq.com/document/path/90248" target="_blank">官方文档</a>',
		hint: '支持 markdown 语法，最长不超过2048个字节',
	},
];
