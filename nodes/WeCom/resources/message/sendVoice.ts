import type { INodeProperties } from 'n8n-workflow';
import { getRecipientFields } from './commonFields';

const showOnlySendVoice = {
	resource: ['message'],
	operation: ['sendVoice'],
};

export const sendVoiceDescription: INodeProperties[] = [
	...getRecipientFields('sendVoice'),
	{
		displayName: '语音来源',
		name: 'voiceSource',
		type: 'options',
		required: true,
		default: 'upload',
		displayOptions: {
			show: showOnlySendVoice,
		},
		options: [
			{
				name: 'Media ID',
				value: 'mediaId',
				description: '使用已上传的语音媒体文件ID',
			},
			{
				name: '上传文件',
				value: 'upload',
				description: '从工作流输入数据中上传语音文件',
			},
		],
		description:
			'选择语音来源方式。<a href="https://developer.work.weixin.qq.com/document/path/90236#语音消息" target="_blank">官方文档</a>',
	},
	{
		displayName: 'Media ID',
		name: 'media_ID',
		type: 'string',
		default: '',
		required: true,
		placeholder: '请输入语音的Media ID',
		displayOptions: {
			show: {
				...showOnlySendVoice,
				voiceSource: ['mediaId'],
			},
		},
		description:
			'语音媒体文件ID，可以通过素材管理接口上传语音获取。语音文件大小不超过2MB，播放长度不超过60秒，支持AMR格式。<a href="https://developer.work.weixin.qq.com/document/path/90236#语音消息" target="_blank">官方文档</a>',
	},
	{
		displayName: '输入数据字段名',
		name: 'binaryPropertyName',
		type: 'string',
		default: 'data',
		required: true,
		placeholder: 'data',
		displayOptions: {
			show: {
				...showOnlySendVoice,
				voiceSource: ['upload'],
			},
		},
		hint: '二进制数据属性名，通常为 data',
		description:
			'包含语音文件数据的二进制属性名称。语音文件大小不超过2MB，播放长度不超过60秒，支持AMR格式。<a href="https://developer.work.weixin.qq.com/document/path/90236#语音消息" target="_blank">官方文档</a>',
	},
	{
		displayName: '安全保密消息',
		name: 'safe',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: showOnlySendVoice,
		},
		hint: '保密消息，开启后消息不可转发、复制等',
		description: '可选。表示是否是保密消息，0表示可对外分享，1表示不能分享且内容显示水印，默认为0。<a href="https://developer.work.weixin.qq.com/document/path/90236#语音消息" target="_blank">官方文档</a>',
	},
	{
		displayName: '是否开启ID转译',
		name: 'enable_id_trans',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: showOnlySendVoice,
		},
		hint: '开启后会将消息中的userid转为@对应成员',
		description: '可选。表示是否开启ID转译，0表示否，1表示是，默认0。开启后会将消息中的userid转为@对应成员显示。<a href="https://developer.work.weixin.qq.com/document/path/90236#语音消息" target="_blank">官方文档</a>',
	},
	{
		displayName: '是否开启重复消息检查',
		name: 'enable_duplicate_check',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: showOnlySendVoice,
		},
		hint: '开启后在时间间隔内相同内容的消息不会重复发送',
		description: '可选。表示是否开启重复消息检查，0表示否，1表示是，默认0。开启后相同内容的消息在时间间隔内不会重复发送。<a href="https://developer.work.weixin.qq.com/document/path/90236#语音消息" target="_blank">官方文档</a>',
	},
	{
		displayName: '重复消息检查时间',
		name: 'duplicate_check_interval',
		type: 'number',
		default: 1800,
		displayOptions: {
			show: {
				...showOnlySendVoice,
				enable_duplicate_check: [true],
			},
		},
		description:
			'可选。表示是否重复消息检查的时间间隔，默认1800s，最大不超过4小时。<a href="https://developer.work.weixin.qq.com/document/path/90236#语音消息" target="_blank">官方文档</a>',
	},
];

