import type { INodeProperties } from 'n8n-workflow';
import { getRecipientFields } from './commonFields';

const showOnlySendNews = {
	resource: ['message'],
	operation: ['sendNews'],
};

export const sendNewsDescription: INodeProperties[] = [
	...getRecipientFields('sendNews'),
	{
		displayName: '图文列表',
		name: 'articles',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		required: true,
		default: {},
		placeholder: '添加图文',
		displayOptions: {
			show: showOnlySendNews,
		},
		description:
			'图文消息，一个图文消息支持1到8条图文。<a href="https://developer.work.weixin.qq.com/document/path/90236#图文消息" target="_blank">官方文档</a>',
		options: [
			{
				displayName: '图文',
				name: 'article',
				values: [
					{
						displayName: '标题',
						name: 'title',
						type: 'string',
						required: true,
						default: '',
						placeholder: '请输入图文标题',
						description:
							'标题，不超过128个字节，超过会自动截断。<a href="https://developer.work.weixin.qq.com/document/path/90236#图文消息" target="_blank">官方文档</a>',
					},
					{
						displayName: '描述',
						name: 'description',
						type: 'string',
						typeOptions: {
							rows: 2,
						},
						default: '',
						placeholder: '请输入图文描述',
						description:
							'可选。描述，不超过512个字节，超过会自动截断。<a href="https://developer.work.weixin.qq.com/document/path/90236#图文消息" target="_blank">官方文档</a>',
					},
					{
						displayName: '跳转链接',
						name: 'url',
						type: 'string',
						required: true,
						default: '',
						placeholder: 'https://example.com',
						description:
							'点击后跳转的链接。<a href="https://developer.work.weixin.qq.com/document/path/90236#图文消息" target="_blank">官方文档</a>',
					},
					{
						displayName: '图片链接',
						name: 'picurl',
						type: 'string',
						default: '',
						placeholder: 'https://example.com/image.jpg',
						description:
							'可选。图文消息的图片链接，支持JPG、PNG格式，较好的效果为大图 1068*455，小图150*150。<a href="https://developer.work.weixin.qq.com/document/path/90236#图文消息" target="_blank">官方文档</a>',
					},
				],
			},
		],
	},
	{
		displayName: '是否开启ID转译',
		name: 'enable_id_trans',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: showOnlySendNews,
		},
		hint: '开启后会将消息中的userid转为@对应成员',
		description: '可选。表示是否开启ID转译，0表示否，1表示是，默认0。开启后会将消息中的userid转为@对应成员显示。<a href="https://developer.work.weixin.qq.com/document/path/90236#图文消息" target="_blank">官方文档</a>',
	},
	{
		displayName: '是否开启重复消息检查',
		name: 'enable_duplicate_check',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: showOnlySendNews,
		},
		hint: '开启后在时间间隔内相同内容的消息不会重复发送',
		description: '可选。表示是否开启重复消息检查，0表示否，1表示是，默认0。开启后相同内容的消息在时间间隔内不会重复发送。<a href="https://developer.work.weixin.qq.com/document/path/90236#图文消息" target="_blank">官方文档</a>',
	},
	{
		displayName: '重复消息检查时间',
		name: 'duplicate_check_interval',
		type: 'number',
		default: 1800,
		displayOptions: {
			show: {
				...showOnlySendNews,
				enable_duplicate_check: [true],
			},
		},
		description:
			'可选。表示是否重复消息检查的时间间隔，默认1800s，最大不超过4小时。<a href="https://developer.work.weixin.qq.com/document/path/90236#图文消息" target="_blank">官方文档</a>',
	},
];

