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
		required: true,
		default: 'text_notice',
		displayOptions: {
			show: showOnlySendTemplateCard,
		},
		description:
			'选择模板卡片的类型。<a href="https://developer.work.weixin.qq.com/document/path/90236#模板卡片消息" target="_blank">官方文档</a>',
	},
	{
		displayName: '模板卡片来源样式信息',
		name: 'source',
		type: 'json',
		default: '{}',
		placeholder: '{"icon_url": "https://...", "desc": "来源描述"}',
		displayOptions: {
			show: showOnlySendTemplateCard,
		},
		description:
			'可选。模板卡片来源样式信息，不需要来源样式可不填写，JSON格式。<a href="https://developer.work.weixin.qq.com/document/path/90236#模板卡片消息" target="_blank">官方文档</a>',
	},
	{
		displayName: '一级标题',
		name: 'main_title',
		type: 'json',
		default: '{"title": ""}',
		placeholder: '{"title": "欢迎使用", "desc": "副标题"}',
		displayOptions: {
			show: showOnlySendTemplateCard,
		},
		hint: '必填字段',
		description:
			'模板卡片的主要内容，包含一级标题和标题辅助信息，JSON格式。<a href="https://developer.work.weixin.qq.com/document/path/90236#模板卡片消息" target="_blank">官方文档</a>',
	},
	{
		displayName: '关键数据样式',
		name: 'emphasis_content',
		type: 'json',
		default: '{}',
		placeholder: '{"title": "100", "desc": "数据描述"}',
		displayOptions: {
			show: showOnlySendTemplateCard,
		},
		description:
			'可选。关键数据样式，JSON格式。<a href="https://developer.work.weixin.qq.com/document/path/90236#模板卡片消息" target="_blank">官方文档</a>',
	},
	{
		displayName: '引用文献样式',
		name: 'quote_area',
		type: 'json',
		default: '{}',
		placeholder: '{"type": 1, "title": "引用标题", "quote_text": "引用内容"}',
		displayOptions: {
			show: showOnlySendTemplateCard,
		},
		hint: '建议不与关键数据共用',
		description:
			'可选。引用文献样式，JSON格式。<a href="https://developer.work.weixin.qq.com/document/path/90236#模板卡片消息" target="_blank">官方文档</a>',
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
		type: 'json',
		typeOptions: {
			rows: 4,
		},
		default: '[]',
		placeholder: '[{"keyname": "姓名", "value": "张三"}, {"keyname": "部门", "value": "技术部"}]',
		displayOptions: {
			show: showOnlySendTemplateCard,
		},
		hint: '列表长度不超过6',
		description:
			'可选。二级标题+文本列表，该字段可为空数组，JSON数组格式。<a href="https://developer.work.weixin.qq.com/document/path/90236#模板卡片消息" target="_blank">官方文档</a>',
	},
	{
		displayName: '跳转指引样式的列表',
		name: 'jump_list',
		type: 'json',
		typeOptions: {
			rows: 4,
		},
		default: '[]',
		placeholder: '[{"type": 1, "title": "查看详情", "url": "https://..."}]',
		displayOptions: {
			show: showOnlySendTemplateCard,
		},
		hint: '列表长度不超过3',
		description:
			'可选。跳转指引样式的列表，该字段可为空数组，JSON数组格式。<a href="https://developer.work.weixin.qq.com/document/path/90236#模板卡片消息" target="_blank">官方文档</a>',
	},
	{
		displayName: '整体卡片的点击跳转事件',
		name: 'card_action',
		type: 'json',
		default: '{}',
		placeholder: '{"type": 1, "url": "https://..."}',
		displayOptions: {
			show: showOnlySendTemplateCard,
		},
		hint: 'text_notice必填，news_notice不需要',
		description:
			'整体卡片的点击跳转事件，JSON格式。<a href="https://developer.work.weixin.qq.com/document/path/90236#模板卡片消息" target="_blank">官方文档</a>',
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
		type: 'json',
		typeOptions: {
			rows: 4,
		},
		default: '[]',
		placeholder: '[{"text": "按钮1", "style": 1, "key": "btn1"}, {"text": "按钮2", "style": 2, "key": "btn2"}]',
		displayOptions: {
			show: {
				...showOnlySendTemplateCard,
				card_type: ['button_interaction'],
			},
		},
		hint: '列表长度不超过6',
		description:
			'按钮交互型卡片的按钮列表，该字段可为空数组，JSON数组格式。<a href="https://developer.work.weixin.qq.com/document/path/90236#模板卡片消息" target="_blank">官方文档</a>',
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
		type: 'json',
		typeOptions: {
			rows: 4,
		},
		default: '[]',
		placeholder: '[{"ID": "option1", "text": "选项1"}, {"ID": "option2", "text": "选项2"}]',
		displayOptions: {
			show: {
				...showOnlySendTemplateCard,
				card_type: ['vote_interaction', 'multiple_interaction'],
			},
		},
		required: true,
		hint: '列表长度不超过10',
		description:
			'选项列表，JSON数组格式。每个选项包含ID和text字段。<a href="https://developer.work.weixin.qq.com/document/path/90236#模板卡片消息" target="_blank">官方文档</a>',
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
		required: true,
		hint: '最长支持1024字节',
		description:
			'提交按钮key值，用户提交选项后，会产生回调事件，回调事件会将本参数作为EventKey返回。<a href="https://developer.work.weixin.qq.com/document/path/90236#模板卡片消息" target="_blank">官方文档</a>',
	},
	{
		displayName: '图片样式',
		name: 'image_text_area',
		type: 'json',
		default: '{}',
		placeholder: '{"type": 1, "url": "https://...", "title": "图片标题", "desc": "图片描述"}',
		displayOptions: {
			show: {
				...showOnlySendTemplateCard,
				card_type: ['news_notice'],
			},
		},
		description:
			'可选。左图右文样式，JSON格式。<a href="https://developer.work.weixin.qq.com/document/path/90236#模板卡片消息" target="_blank">官方文档</a>',
	},
	{
		displayName: '卡片右上角更多操作按钮',
		name: 'action_menu',
		type: 'json',
		default: '{}',
		placeholder: '{"desc": "操作菜单", "action_list": [{"text": "操作1", "key": "action1"}]}',
		displayOptions: {
			show: showOnlySendTemplateCard,
		},
		description:
			'可选。卡片右上角更多操作按钮，JSON格式。<a href="https://developer.work.weixin.qq.com/document/path/90236#模板卡片消息" target="_blank">官方文档</a>',
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

