import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { weComApiRequest } from '../../shared/transport';

export async function executeSchool(
	this: IExecuteFunctions,
	operation: string,
	items: INodeExecutionData[],
): Promise<INodeExecutionData[]> {
	const returnData: INodeExecutionData[] = [];

	for (let i = 0; i < items.length; i++) {
		try {
			let responseData: IDataObject = {};

			switch (operation) {
				case 'getHealthReportStat': {
					const date = this.getNodeParameter('date', i) as string;
					responseData = await weComApiRequest.call(
						this,
						'POST',
						'/cgi-bin/health/get_health_report_stat',
						{ date },
					);
					break;
				}
				case 'getHealthReportJobIds': {
					const offset = this.getNodeParameter('offset', i, 0) as number;
					const limit = this.getNodeParameter('limit', i, 100) as number;

					const body: IDataObject = {};
					if (offset) {
						body.offset = offset;
					}
					if (limit) {
						body.limit = limit;
					}

					responseData = await weComApiRequest.call(
						this,
						'POST',
						'/cgi-bin/health/get_report_jobids',
						body,
					);
					break;
				}
				case 'getHealthReportJobInfo': {
					const jobid = this.getNodeParameter('jobid', i) as string;
					responseData = await weComApiRequest.call(
						this,
						'POST',
						'/cgi-bin/health/get_report_job_info',
						{ jobid },
					);
					break;
				}
				case 'getHealthReportAnswer': {
					const jobid = this.getNodeParameter('jobid', i) as string;
					const date = this.getNodeParameter('date', i) as string;
					const offset = this.getNodeParameter('offset', i, 0) as number;
					const limit = this.getNodeParameter('limit', i, 100) as number;

					const body: IDataObject = {
						jobid,
						date,
					};

					if (offset) {
						body.offset = offset;
					}
					if (limit) {
						body.limit = limit;
					}

					responseData = await weComApiRequest.call(
						this,
						'POST',
						'/cgi-bin/health/get_report_answer',
						body,
					);
					break;
				}
				case 'getUserLivingId': {
					const userid = this.getNodeParameter('userid', i) as string;
					const begin_time = this.getNodeParameter('begin_time', i, 0) as number;
					const end_time = this.getNodeParameter('end_time', i, 0) as number;
					const next_key = this.getNodeParameter('next_key', i, '') as string;
					const limit = this.getNodeParameter('limit', i, 100) as number;

					const body: IDataObject = { userid };
					if (begin_time) {
						body.begin_time = begin_time;
					}
					if (end_time) {
						body.end_time = end_time;
					}
					if (next_key) {
						body.next_key = next_key;
					}
					if (limit) {
						body.limit = limit;
					}

					responseData = await weComApiRequest.call(
						this,
						'POST',
						'/cgi-bin/living/get_user_livingid',
						body,
					);
					break;
				}
				case 'getLivingInfo': {
					const livingid = this.getNodeParameter('livingid', i) as string;
					responseData = await weComApiRequest.call(
						this,
						'POST',
						'/cgi-bin/living/get_living_info',
						{ livingid },
					);
					break;
				}
				case 'getLivingWatchStat': {
					const livingid = this.getNodeParameter('livingid', i) as string;
					const next_key = this.getNodeParameter('next_key', i, '') as string;

					const body: IDataObject = { livingid };
					if (next_key) {
						body.next_key = next_key;
					}

					responseData = await weComApiRequest.call(
						this,
						'POST',
						'/cgi-bin/living/get_watch_stat',
						body,
					);
					break;
				}
				case 'getLivingUnwatchStat': {
					const livingid = this.getNodeParameter('livingid', i) as string;
					const next_key = this.getNodeParameter('next_key', i, '') as string;

					const body: IDataObject = { livingid };
					if (next_key) {
						body.next_key = next_key;
					}

					responseData = await weComApiRequest.call(
						this,
						'POST',
						'/cgi-bin/living/get_unwatch_stat',
						body,
					);
					break;
				}
				case 'deleteLivingReplayData': {
					const livingid = this.getNodeParameter('livingid', i) as string;
					responseData = await weComApiRequest.call(
						this,
						'POST',
						'/cgi-bin/living/delete_replay_data',
						{ livingid },
					);
					break;
				}
				case 'getLivingWatchStatV2': {
					const livingid = this.getNodeParameter('livingid', i) as string;
					const next_key = this.getNodeParameter('next_key', i, '') as string;
					const limit = this.getNodeParameter('limit', i, 100) as number;

					const body: IDataObject = { livingid };
					if (next_key) {
						body.next_key = next_key;
					}
					if (limit) {
						body.limit = limit;
					}

					responseData = await weComApiRequest.call(
						this,
						'POST',
						'/cgi-bin/school/living/get_watch_stat',
						body,
					);
					break;
				}
				case 'getLivingUnwatchStatV2': {
					const livingid = this.getNodeParameter('livingid', i) as string;
					const next_key = this.getNodeParameter('next_key', i, '') as string;
					const limit = this.getNodeParameter('limit', i, 100) as number;

					const body: IDataObject = { livingid };
					if (next_key) {
						body.next_key = next_key;
					}
					if (limit) {
						body.limit = limit;
					}

					responseData = await weComApiRequest.call(
						this,
						'POST',
						'/cgi-bin/school/living/get_unwatch_stat',
						body,
					);
					break;
				}
				case 'getTradeResult': {
					const payment_id = this.getNodeParameter('payment_id', i) as string;
					const next_key = this.getNodeParameter('next_key', i, '') as string;
					const limit = this.getNodeParameter('limit', i, 100) as number;

					const body: IDataObject = { payment_id };
					if (next_key) {
						body.next_key = next_key;
					}
					if (limit) {
						body.limit = limit;
					}

					responseData = await weComApiRequest.call(
						this,
						'POST',
						'/cgi-bin/externalcontact/get_trade_result',
						body,
					);
					break;
				}
				case 'getTradeDetail': {
					const payment_id = this.getNodeParameter('payment_id', i) as string;
					responseData = await weComApiRequest.call(
						this,
						'POST',
						'/cgi-bin/externalcontact/get_trade_detail',
						{ payment_id },
					);
					break;
				}
				default:
					throw new Error(`未知操作: ${operation}`);
			}

			returnData.push({
				json: responseData,
				pairedItem: { item: i },
			});
		} catch (error) {
			if (this.continueOnFail()) {
				returnData.push({
					json: {
						error: (error as Error).message,
					},
					pairedItem: { item: i },
				});
				continue;
			}
			throw error;
		}
	}

	return returnData;
}
