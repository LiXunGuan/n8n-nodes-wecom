import type { INodeProperties } from 'n8n-workflow';
import { getRecipientFields } from './commonFields';

const showOnlySendTemplateCard = {
	resource: ['message'],
	operation: ['sendTemplateCard'],
};

export const sendTemplateCardDescription: INodeProperties[] = [
	...getRecipientFields('sendTemplateCard'),
	{
		displayName: '模板卡片类型',
		name: 'card_type',
		type: 'options',
		options: [
		{
			name: '按钮交互型',
			value: 'button_interaction',
			description: '按钮交互型模板卡片',
		},
		{
			name: '多项选择型',
			value: 'multiple_interaction',
			description: '多项选择型模板卡片',
		},
		{
			name: '投票选择型',
			value: 'vote_interaction',
			description: '投票选择型模板卡片',
		},
		{
			name: '图文展示型',
			value: 'news_notice',
			description: '图文展示型模板卡片',
		},
		{
			name: '文本通知型',
			value: 'text_notice',
			description: '文本通知型模板卡片',
		},
	],
		default: 'text_notice',
		displayOptions: {
			show: showOnlySendTemplateCard,
		},
		description:
			'选择模板卡片的类型。<a href="https://developer.work.weixin.qq.com/document/path/90236#模板卡片消息" target="_blank">官方文档</a>',
	},
	{
		displayName: '卡片来源',
		name: 'source',
		type: 'fixedCollection',
		default: {},
		placeholder: '添加来源信息',
		displayOptions: {
			show: showOnlySendTemplateCard,
		},
		description: '可选。模板卡片来源样式信息',
		options: [
			{
				name: 'sourceInfo',
				displayName: '来源信息',
				values: [
					{
						displayName: '来源图标URL',
						name: 'icon_url',
						type: 'string',
						default: '',
						placeholder: 'https://example.com/icon.png',
						description: '来源图标的URL地址',
					},
					{
						displayName: '来源描述',
						name: 'desc',
						type: 'string',
						default: '',
						placeholder: '企业微信',
						description: '来源的描述文字',
					},
				],
			},
		],
	},
	{
		displayName: '一级标题',
		name: 'main_title',
		type: 'fixedCollection',
		default: {},
		placeholder: '添加标题',
		displayOptions: {
			show: showOnlySendTemplateCard,
		},
		description: '模板卡片的主要内容，包含一级标题和标题辅助信息',
		options: [
			{
				name: 'titleInfo',
				displayName: '标题内容',
				values: [
					{
						displayName: '标题',
						name: 'title',
						type: 'string',
						default: '',
						placeholder: '欢迎使用',
						description: '一级标题文本',
					},
					{
						displayName: '副标题',
						name: 'desc',
						type: 'string',
						default: '',
						placeholder: '点击查看详情',
						description: '标题辅助信息',
					},
				],
			},
		],
	},
	{
		displayName: '关键数据样式',
		name: 'emphasis_content',
		type: 'fixedCollection',
		default: {},
		placeholder: '添加关键数据',
		displayOptions: {
			show: showOnlySendTemplateCard,
		},
		description: '可选。关键数据样式',
		options: [
			{
				name: 'emphasisInfo',
				displayName: '关键数据',
				values: [
					{
						displayName: '数据',
						name: 'title',
						type: 'string',
						default: '',
						placeholder: '100',
						description: '关键数据内容',
					},
					{
						displayName: '数据描述',
						name: 'desc',
						type: 'string',
						default: '',
						placeholder: '已完成',
						description: '数据的描述说明',
					},
				],
			},
		],
	},
	{
		displayName: '引用文献样式',
		name: 'quote_area',
		type: 'fixedCollection',
		default: {},
		placeholder: '添加引用',
		displayOptions: {
			show: showOnlySendTemplateCard,
		},
		description: '可选。引用文献样式，建议不与关键数据共用',
		options: [
			{
				name: 'quoteInfo',
				displayName: '引用内容',
				values: [
					{
						displayName: '引用类型',
						name: 'type',
						type: 'options',
						options: [
							{
								name: '边框类型',
								value: 1,
							},
							{
								name: '卡片类型',
								value: 2,
							},
						],
						default: 1,
						description: '引用文献的样式类型',
					},
					{
						displayName: '引用链接',
						name: 'url',
						type: 'string',
						default: '',
						placeholder: 'https://example.com',
						description: '点击引用后跳转的链接',
					},
					{
						displayName: '引用标题',
						name: 'title',
						type: 'string',
						default: '',
						placeholder: '引用标题',
						description: '引用文献的标题',
					},
					{
						displayName: '引用文本',
						name: 'quote_text',
						type: 'string',
						typeOptions: {
							rows: 3,
						},
						default: '',
						placeholder: '引用的具体内容',
						description: '引用文献的具体文本内容',
					},
				],
			},
		],
	},
	{
		displayName: '二级普通文本',
		name: 'sub_title_text',
		type: 'string',
		default: '',
		placeholder: '请输入二级文本内容',
		displayOptions: {
			show: showOnlySendTemplateCard,
		},
		hint: '建议不超过160个字',
		description:
			'可选。二级普通文本（支持ID转译）。<a href="https://developer.work.weixin.qq.com/document/path/90236#模板卡片消息" target="_blank">官方文档</a>',
	},
	{
		displayName: '二级标题+文本列表',
		name: 'horizontal_content_list',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		default: {},
		placeholder: '添加列表项',
		displayOptions: {
			show: showOnlySendTemplateCard,
		},
		description: '可选。二级标题+文本列表，列表长度不超过6',
		options: [
			{
				name: 'items',
				displayName: '列表项',
				values: [
					{
						displayName: '标题',
						name: 'keyname',
						type: 'string',
						default: '',
						placeholder: '姓名',
						description: '列表项的标题',
					},
					{
						displayName: '内容',
						name: 'value',
						type: 'string',
						default: '',
						placeholder: '张三',
						description: '列表项的内容',
					},
					{
						displayName: '内容类型',
						name: 'type',
						type: 'options',
						options: [
							{
								name: '普通文本',
								value: 0,
							},
							{
								name: '带跳转链接',
								value: 1,
							},
						],
						default: 0,
						description: '内容的类型',
					},
					{
						displayName: '跳转链接',
						name: 'url',
						type: 'string',
						default: '',
						placeholder: 'https://example.com',
						description: '点击内容后跳转的链接（仅当类型为带跳转链接时有效）',
						displayOptions: {
							show: {
								type: [1],
							},
						},
					},
				],
			},
		],
	},
	{
		displayName: '跳转指引样式列表',
		name: 'jump_list',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		default: {},
		placeholder: '添加跳转指引',
		displayOptions: {
			show: showOnlySendTemplateCard,
		},
		description: '可选。跳转指引样式的列表，列表长度不超过3',
		options: [
			{
				name: 'items',
				displayName: '跳转指引',
				values: [
					{
						displayName: '跳转类型',
						name: 'type',
						type: 'options',
						options: [
							{
								name: '跳转URL',
								value: 1,
							},
							{
								name: '跳转小程序',
								value: 2,
							},
						],
						default: 1,
						description: '跳转目标的类型',
					},
					{
						displayName: '标题',
						name: 'title',
						type: 'string',
						default: '',
						placeholder: '查看详情',
						description: '跳转指引的标题',
					},
					{
						displayName: '跳转链接',
						name: 'url',
						type: 'string',
						default: '',
						placeholder: 'https://example.com',
						description: '跳转的URL地址',
					},
				],
			},
		],
	},
	{
		displayName: '整体卡片点击跳转',
		name: 'card_action',
		type: 'fixedCollection',
		default: {},
		placeholder: '设置卡片跳转',
		displayOptions: {
			show: showOnlySendTemplateCard,
		},
		description: '整体卡片的点击跳转事件（text_notice必填，news_notice不需要）',
		options: [
			{
				name: 'actionInfo',
				displayName: '跳转设置',
				values: [
					{
						displayName: '跳转类型',
						name: 'type',
						type: 'options',
						options: [
							{
								name: '跳转URL',
								value: 1,
							},
							{
								name: '跳转小程序',
								value: 2,
							},
						],
						default: 1,
						description: '点击卡片后的跳转类型',
					},
					{
						displayName: '跳转链接',
						name: 'url',
						type: 'string',
						default: '',
						placeholder: 'https://example.com',
						description: '跳转的URL地址',
					},
				],
			},
		],
	},
	{
		displayName: '任务ID',
		name: 'task_id',
		type: 'string',
		default: '',
		placeholder: 'task_001',
		displayOptions: {
			show: showOnlySendTemplateCard,
		},
		hint: '填了action_menu字段的话本字段必填',
		description:
			'可选。任务 ID，同一个应用任务 ID 不能重复，只能由数字、字母和"_-@"组成，最长128字节。<a href="https://developer.work.weixin.qq.com/document/path/90236#模板卡片消息" target="_blank">官方文档</a>',
	},
	{
		displayName: '按钮列表',
		name: 'button_list',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		default: {},
		placeholder: '添加按钮',
		displayOptions: {
			show: {
				...showOnlySendTemplateCard,
				card_type: ['button_interaction'],
			},
		},
		description: '按钮交互型卡片的按钮列表，列表长度不超过6',
		options: [
			{
				name: 'buttons',
				displayName: '按钮',
				values: [
					{
						displayName: '按钮文本',
						name: 'text',
						type: 'string',
						default: '',
						placeholder: '同意',
						description: '按钮上显示的文字',
					},
					{
						displayName: '按钮样式',
						name: 'style',
						type: 'options',
						options: [
							{
								name: '蓝色样式',
								value: 1,
							},
							{
								name: '灰色样式',
								value: 2,
							},
						],
						default: 1,
						description: '按钮的样式类型',
					},
					{
						displayName: '按钮Key',
						name: 'key',
						type: 'string',
						default: '',
						placeholder: 'btn_agree',
						description: '按钮的唯一标识，用于回调事件',
					},
				],
			},
		],
	},
	{
		displayName: '选择题Key值',
		name: 'checkbox_question_key',
		type: 'string',
		default: '',
		placeholder: 'question_001',
		displayOptions: {
			show: {
				...showOnlySendTemplateCard,
				card_type: ['vote_interaction', 'multiple_interaction'],
			},
		},
		hint: '最长支持1024字节',
		description:
			'可选。选择题key值，用户提交选项后，会产生回调事件，回调事件会将本参数作为EventKey返回。<a href="https://developer.work.weixin.qq.com/document/path/90236#模板卡片消息" target="_blank">官方文档</a>',
	},
	{
		displayName: '选择题模式',
		name: 'checkbox_mode',
		type: 'options',
		options: [
			{
				name: '单选',
				value: 'single',
			},
			{
				name: '多选',
				value: 'multiple',
			},
		],
		default: 'single',
		displayOptions: {
			show: {
				...showOnlySendTemplateCard,
				card_type: ['vote_interaction', 'multiple_interaction'],
			},
		},
		description:
			'可选。选择题模式，单选为single，多选为multiple，不填默认单选。<a href="https://developer.work.weixin.qq.com/document/path/90236#模板卡片消息" target="_blank">官方文档</a>',
	},
	{
		displayName: '选项列表',
		name: 'option_list',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		default: {},
		placeholder: '添加选项',
		displayOptions: {
			show: {
				...showOnlySendTemplateCard,
				card_type: ['vote_interaction', 'multiple_interaction'],
			},
		},
		description: '选项列表，列表长度不超过10',
		options: [
			{
				name: 'options',
				displayName: '选项',
				values: [
					{
						displayName: '选项ID',
						name: 'id',
						type: 'string',
						default: '',
						placeholder: 'option1',
						description: '选项的唯一标识',
					},
					{
						displayName: '选项文本',
						name: 'text',
						type: 'string',
						default: '',
						placeholder: '选项一',
						description: '选项显示的文本',
					},
				],
			},
		],
	},
	{
		displayName: '提交按钮文案',
		name: 'submit_button_text',
		type: 'string',
		default: '提交',
		placeholder: '提交',
		displayOptions: {
			show: {
				...showOnlySendTemplateCard,
				card_type: ['vote_interaction', 'multiple_interaction'],
			},
		},
		hint: '建议不超过10个字',
		description:
			'可选。提交按钮文案，不填默认为提交。<a href="https://developer.work.weixin.qq.com/document/path/90236#模板卡片消息" target="_blank">官方文档</a>',
	},
	{
		displayName: '提交按钮Key值',
		name: 'submit_button_key',
		type: 'string',
		default: '',
		placeholder: 'submit_001',
		displayOptions: {
			show: {
				...showOnlySendTemplateCard,
				card_type: ['vote_interaction', 'multiple_interaction'],
			},
		},
		hint: '最长支持1024字节',
		description:
			'提交按钮key值，用户提交选项后，会产生回调事件，回调事件会将本参数作为EventKey返回。<a href="https://developer.work.weixin.qq.com/document/path/90236#模板卡片消息" target="_blank">官方文档</a>',
	},
	{
		displayName: '图片样式',
		name: 'image_text_area',
		type: 'fixedCollection',
		default: {},
		placeholder: '添加图片',
		displayOptions: {
			show: {
				...showOnlySendTemplateCard,
				card_type: ['news_notice'],
			},
		},
		description: '可选。左图右文样式',
		options: [
			{
				name: 'imageTextInfo',
				displayName: '图片内容',
				values: [
					{
						displayName: '图片类型',
						name: 'type',
						type: 'options',
						options: [
							{
								name: '普通图片',
								value: 0,
							},
							{
								name: '可点击图片',
								value: 1,
							},
						],
						default: 0,
						description: '图片的类型',
					},
					{
						displayName: '图片链接',
						name: 'image_url',
						type: 'string',
						default: '',
						placeholder: 'https://example.com/image.png',
						description: '图片的URL地址',
					},
					{
						displayName: '跳转链接',
						name: 'url',
						type: 'string',
						default: '',
						placeholder: 'https://example.com',
						description: '点击图片后跳转的链接（仅当类型为可点击图片时有效）',
						displayOptions: {
							show: {
								type: [1],
							},
						},
					},
					{
						displayName: '标题',
						name: 'title',
						type: 'string',
						default: '',
						placeholder: '图片标题',
						description: '图片的标题',
					},
					{
						displayName: '描述',
						name: 'desc',
						type: 'string',
						typeOptions: {
							rows: 2,
						},
						default: '',
						placeholder: '图片描述',
						description: '图片的描述文字',
					},
				],
			},
		],
	},
	{
		displayName: '卡片右上角更多操作按钮',
		name: 'action_menu',
		type: 'fixedCollection',
		default: {},
		placeholder: '添加操作菜单',
		displayOptions: {
			show: showOnlySendTemplateCard,
		},
		description: '可选。卡片右上角更多操作按钮',
		options: [
			{
				name: 'menuInfo',
				displayName: '操作菜单',
				values: [
					{
						displayName: '菜单描述',
						name: 'desc',
						type: 'string',
						default: '',
						placeholder: '更多操作',
						description: '菜单的描述文字',
					},
					{
						displayName: '操作列表',
						name: 'action_list',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true,
						},
						default: {},
						placeholder: '添加操作',
						options: [
							{
								name: 'actions',
								displayName: '操作',
								values: [
									{
										displayName: '操作文本',
										name: 'text',
										type: 'string',
										default: '',
										placeholder: '删除',
										description: '操作的文本',
									},
									{
										displayName: '操作Key',
										name: 'key',
										type: 'string',
										default: '',
										placeholder: 'action_delete',
										description: '操作的唯一标识',
									},
								],
							},
						],
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
			show: showOnlySendTemplateCard,
		},
		hint: '开启后会将消息中的userid转为@对应成员',
		description:
			'可选。表示是否开启ID转译，0表示否，1表示是，默认0。开启后，消息中的userid会转译为@对应成员。<a href="https://developer.work.weixin.qq.com/document/path/90236#模板卡片消息" target="_blank">官方文档</a>',
	},
	{
		displayName: '是否开启重复消息检查',
		name: 'enable_duplicate_check',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: showOnlySendTemplateCard,
		},
		hint: '开启后在时间间隔内相同内容的消息不会重复发送',
		description:
			'可选。表示是否开启重复消息检查，0表示否，1表示是，默认0。<a href="https://developer.work.weixin.qq.com/document/path/90236#模板卡片消息" target="_blank">官方文档</a>',
	},
	{
		displayName: '重复消息检查时间间隔',
		name: 'duplicate_check_interval',
		type: 'number',
		default: 1800,
		displayOptions: {
			show: {
				...showOnlySendTemplateCard,
				enable_duplicate_check: [true],
			},
		},
		typeOptions: {
			minValue: 0,
			maxValue: 14400,
		},
		hint: '默认1800秒，最大不超过4小时（14400秒）',
		description:
			'可选。表示是否重复消息检查的时间间隔，默认1800秒，最大不超过4小时。<a href="https://developer.work.weixin.qq.com/document/path/90236#模板卡片消息" target="_blank">官方文档</a>',
	},
];

