import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSendNews = {
	resource: ['appChat'],
	operation: ['sendNews'],
};

export const sendNewsDescription: INodeProperties[] = [
	{
		displayName: '群聊ID',
		name: 'chatid',
		type: 'string',
		displayOptions: {
			show: showOnlyForSendNews,
		},
		default: '',
		placeholder: 'mychat001',
		required: true,
		description:
			'群聊的唯一标识。<a href="https://developer.work.weixin.qq.com/document/path/90248" target="_blank">官方文档</a>',
		hint: '群聊会话的 chatid',
	},
	{
		displayName: '图文列表',
		name: 'articles',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		displayOptions: {
			show: showOnlyForSendNews,
		},
		default: {},
		placeholder: '添加图文',
		description:
			'图文消息，一个图文消息支持1到8条图文。<a href="https://developer.work.weixin.qq.com/document/path/90248" target="_blank">官方文档</a>',
		options: [
			{
				name: 'article',
				displayName: '图文',
				values: [
					{
						displayName: '标题',
						name: 'title',
						type: 'string',
						default: '',
						placeholder: '图文标题',
						description:
							'图文消息的标题。<a href="https://developer.work.weixin.qq.com/document/path/90248" target="_blank">官方文档</a>',
						hint: '不超过128个字节',
					},
					{
						displayName: '描述',
						name: 'description',
						type: 'string',
						typeOptions: {
							rows: 3,
						},
						default: '',
						placeholder: '图文描述',
						description:
							'可选。图文消息的描述。<a href="https://developer.work.weixin.qq.com/document/path/90248" target="_blank">官方文档</a>',
						hint: '不超过512个字节',
					},
					{
						displayName: '跳转链接',
						name: 'url',
						type: 'string',
						default: '',
						placeholder: 'https://example.com',
						description:
							'点击后跳转的链接。<a href="https://developer.work.weixin.qq.com/document/path/90248" target="_blank">官方文档</a>',
						hint: '必须是http或https开头',
					},
					{
						displayName: '图片链接',
						name: 'picurl',
						type: 'string',
						default: '',
						placeholder: 'https://example.com/image.jpg',
						description:
							'可选。图文消息的图片链接。<a href="https://developer.work.weixin.qq.com/document/path/90248" target="_blank">官方文档</a>',
						hint: '支持JPG、PNG格式，较好的效果为大图640*320，小图80*80',
					},
				],
			},
		],
	},
];
