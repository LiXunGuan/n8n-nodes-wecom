import type { INodeProperties } from 'n8n-workflow';
import { getHealthReportStatDescription } from './getHealthReportStat';
import { getHealthReportJobIdsDescription } from './getHealthReportJobIds';
import { getHealthReportJobInfoDescription } from './getHealthReportJobInfo';
import { getHealthReportAnswerDescription } from './getHealthReportAnswer';
import { getUserLivingIdDescription } from './getUserLivingId';
import { getLivingInfoDescription } from './getLivingInfo';
import { getLivingWatchStatDescription } from './getLivingWatchStat';
import { getLivingUnwatchStatDescription } from './getLivingUnwatchStat';
import { deleteLivingReplayDataDescription } from './deleteLivingReplayData';
import { getLivingWatchStatV2Description } from './getLivingWatchStatV2';
import { getLivingUnwatchStatV2Description } from './getLivingUnwatchStatV2';
import { getTradeResultDescription } from './getTradeResult';
import { getTradeDetailDescription } from './getTradeDetail';

const showOnlyForSchool = {
	resource: ['school'],
};

export const schoolDescription: INodeProperties[] = [
	{
		displayName: '操作',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForSchool,
		},
		options: [
			{
				name: '获取健康上报使用统计',
				value: 'getHealthReportStat',
				description: '获取指定日期的健康上报使用统计',
				action: '获取健康上报使用统计',
			},
			{
				name: '获取健康上报任务ID列表',
				value: 'getHealthReportJobIds',
				description: '获取健康上报任务ID列表',
				action: '获取健康上报任务ID列表',
			},
			{
				name: '获取健康上报任务详情',
				value: 'getHealthReportJobInfo',
				description: '获取健康上报任务详情',
				action: '获取健康上报任务详情',
			},
			{
				name: '获取健康上报填写答案',
				value: 'getHealthReportAnswer',
				description: '获取用户填写的健康上报答案',
				action: '获取健康上报填写答案',
			},
			{
				name: '获取老师直播ID列表',
				value: 'getUserLivingId',
				description: '获取老师创建的直播ID列表',
				action: '获取老师直播ID列表',
			},
			{
				name: '获取直播详情',
				value: 'getLivingInfo',
				description: '获取直播详情',
				action: '获取直播详情',
			},
			{
				name: '获取观看直播统计',
				value: 'getLivingWatchStat',
				description: '获取直播观看统计（旧版本）',
				action: '获取观看直播统计',
			},
			{
				name: '获取未观看直播统计',
				value: 'getLivingUnwatchStat',
				description: '获取未观看直播统计（旧版本）',
				action: '获取未观看直播统计',
			},
			{
				name: '删除直播回放',
				value: 'deleteLivingReplayData',
				description: '删除指定直播的回放视频',
				action: '删除直播回放',
			},
			{
				name: '获取观看直播统计V2',
				value: 'getLivingWatchStatV2',
				description: '获取直播观看统计（V2）',
				action: '获取观看直播统计V2',
			},
			{
				name: '获取未观看直播统计V2',
				value: 'getLivingUnwatchStatV2',
				description: '获取未观看直播统计（V2）',
				action: '获取未观看直播统计V2',
			},
			{
				name: '获取学生付款结果',
				value: 'getTradeResult',
				description: '获取班级收款学生付款结果',
				action: '获取学生付款结果',
			},
			{
				name: '获取订单详情',
				value: 'getTradeDetail',
				description: '获取班级收款订单详情',
				action: '获取订单详情',
			},
		],
		default: 'getHealthReportStat',
	},
	...getHealthReportStatDescription,
	...getHealthReportJobIdsDescription,
	...getHealthReportJobInfoDescription,
	...getHealthReportAnswerDescription,
	...getUserLivingIdDescription,
	...getLivingInfoDescription,
	...getLivingWatchStatDescription,
	...getLivingUnwatchStatDescription,
	...deleteLivingReplayDataDescription,
	...getLivingWatchStatV2Description,
	...getLivingUnwatchStatV2Description,
	...getTradeResultDescription,
	...getTradeDetailDescription,
];
