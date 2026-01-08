import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { weComApiRequest } from '../../shared/transport';

function parseCommaList(value: string): string[] {
	return value
		.split(',')
		.map((item) => item.trim())
		.filter((item) => item.length > 0);
}

export async function executeLiving(
	this: IExecuteFunctions,
	operation: string,
	items: INodeExecutionData[],
): Promise<INodeExecutionData[]> {
	const returnData: INodeExecutionData[] = [];

	for (let i = 0; i < items.length; i++) {
		try {
			let responseData: IDataObject = {};

			switch (operation) {
				case 'addGrid': {
					const grid_name = this.getNodeParameter('grid_name', i) as string;
					const parent_grid_id = this.getNodeParameter('parent_grid_id', i, '') as string;
					const leader_userid_list = this.getNodeParameter(
						'leader_userid_list',
						i,
						'',
					) as string;
					const member_userid_list = this.getNodeParameter(
						'member_userid_list',
						i,
						'',
					) as string;

					const body: IDataObject = {
						grid_name,
					};

					if (parent_grid_id) {
						body.parent_grid_id = parent_grid_id;
					}
					if (leader_userid_list) {
						body.leader_userid_list = parseCommaList(leader_userid_list);
					}
					if (member_userid_list) {
						body.member_userid_list = parseCommaList(member_userid_list);
					}

					responseData = await weComApiRequest.call(
						this,
						'POST',
						'/cgi-bin/living/add_grid',
						body,
					);
					break;
				}
				case 'updateGrid': {
					const grid_id = this.getNodeParameter('grid_id', i) as string;
					const grid_name = this.getNodeParameter('grid_name', i, '') as string;
					const leader_userid_list = this.getNodeParameter(
						'leader_userid_list',
						i,
						'',
					) as string;
					const member_userid_list = this.getNodeParameter(
						'member_userid_list',
						i,
						'',
					) as string;

					const body: IDataObject = {
						grid_id,
					};

					if (grid_name) {
						body.grid_name = grid_name;
					}
					if (leader_userid_list) {
						body.leader_userid_list = parseCommaList(leader_userid_list);
					}
					if (member_userid_list) {
						body.member_userid_list = parseCommaList(member_userid_list);
					}

					responseData = await weComApiRequest.call(
						this,
						'POST',
						'/cgi-bin/living/update_grid',
						body,
					);
					break;
				}
				case 'deleteGrid': {
					const grid_id = this.getNodeParameter('grid_id', i) as string;
					responseData = await weComApiRequest.call(
						this,
						'POST',
						'/cgi-bin/living/delete_grid',
						{ grid_id },
					);
					break;
				}
				case 'getGridList': {
					const parent_grid_id = this.getNodeParameter('parent_grid_id', i, '') as string;
					const qs: IDataObject = {};
					if (parent_grid_id) {
						qs.parent_grid_id = parent_grid_id;
					}
					responseData = await weComApiRequest.call(
						this,
						'GET',
						'/cgi-bin/living/get_grid_list',
						{},
						qs,
					);
					break;
				}
				case 'getUserGridList': {
					const userid = this.getNodeParameter('userid', i) as string;
					responseData = await weComApiRequest.call(
						this,
						'GET',
						'/cgi-bin/living/get_user_grid_list',
						{},
						{ userid },
					);
					break;
				}
				case 'addEventCategory': {
					const category_name = this.getNodeParameter('category_name', i) as string;
					const parent_category_id = this.getNodeParameter('parent_category_id', i, '') as string;
					const description = this.getNodeParameter('description', i, '') as string;

					const body: IDataObject = {
						category_name,
					};

					if (parent_category_id) {
						body.parent_category_id = parent_category_id;
					}
					if (description) {
						body.description = description;
					}

					responseData = await weComApiRequest.call(
						this,
						'POST',
						'/cgi-bin/living/add_event_category',
						body,
					);
					break;
				}
				case 'updateEventCategory': {
					const category_id = this.getNodeParameter('category_id', i) as string;
					const category_name = this.getNodeParameter('category_name', i, '') as string;
					const description = this.getNodeParameter('description', i, '') as string;

					const body: IDataObject = {
						category_id,
					};

					if (category_name) {
						body.category_name = category_name;
					}
					if (description) {
						body.description = description;
					}

					responseData = await weComApiRequest.call(
						this,
						'POST',
						'/cgi-bin/living/update_event_category',
						body,
					);
					break;
				}
				case 'deleteEventCategory': {
					const category_id = this.getNodeParameter('category_id', i) as string;
					responseData = await weComApiRequest.call(
						this,
						'POST',
						'/cgi-bin/living/delete_event_category',
						{ category_id },
					);
					break;
				}
				case 'getEventCategoryList': {
					responseData = await weComApiRequest.call(
						this,
						'GET',
						'/cgi-bin/living/get_event_category_list',
					);
					break;
				}
				case 'getInspectGridInfo': {
					responseData = await weComApiRequest.call(
						this,
						'GET',
						'/cgi-bin/living/get_inspect_grid_info',
					);
					break;
				}
				case 'getCorpInspectStat': {
					const start_time = this.getNodeParameter('start_time', i) as number;
					const end_time = this.getNodeParameter('end_time', i) as number;
					const grid_id = this.getNodeParameter('grid_id', i, '') as string;

					const body: IDataObject = {
						start_time,
						end_time,
					};

					if (grid_id) {
						body.grid_id = grid_id;
					}

					responseData = await weComApiRequest.call(
						this,
						'POST',
						'/cgi-bin/living/get_corp_inspect_stat',
						body,
					);
					break;
				}
				case 'getUserInspectStat': {
					const userid = this.getNodeParameter('userid', i) as string;
					const start_time = this.getNodeParameter('start_time', i) as number;
					const end_time = this.getNodeParameter('end_time', i) as number;

					const body: IDataObject = {
						userid,
						start_time,
						end_time,
					};

					responseData = await weComApiRequest.call(
						this,
						'POST',
						'/cgi-bin/living/get_user_inspect_stat',
						body,
					);
					break;
				}
				case 'getInspectCategoryStat': {
					const start_time = this.getNodeParameter('start_time', i) as number;
					const end_time = this.getNodeParameter('end_time', i) as number;
					const grid_id = this.getNodeParameter('grid_id', i, '') as string;

					const body: IDataObject = {
						start_time,
						end_time,
					};

					if (grid_id) {
						body.grid_id = grid_id;
					}

					responseData = await weComApiRequest.call(
						this,
						'POST',
						'/cgi-bin/living/get_inspect_category_stat',
						body,
					);
					break;
				}
				case 'getInspectEventList': {
					const start_time = this.getNodeParameter('start_time', i) as number;
					const end_time = this.getNodeParameter('end_time', i) as number;
					const grid_id = this.getNodeParameter('grid_id', i, '') as string;
					const category_id = this.getNodeParameter('category_id', i, '') as string;
					const status = this.getNodeParameter('status', i, 0) as number;
					const offset = this.getNodeParameter('offset', i, 0) as number;
					const limit = this.getNodeParameter('limit', i, 20) as number;

					const body: IDataObject = {
						start_time,
						end_time,
						offset,
						limit,
					};

					if (grid_id) {
						body.grid_id = grid_id;
					}
					if (category_id) {
						body.category_id = category_id;
					}
					if (status > 0) {
						body.status = status;
					}

					responseData = await weComApiRequest.call(
						this,
						'POST',
						'/cgi-bin/living/get_inspect_event_list',
						body,
					);
					break;
				}
				case 'getInspectEventDetail': {
					const event_id = this.getNodeParameter('event_id', i) as string;
					responseData = await weComApiRequest.call(
						this,
						'GET',
						'/cgi-bin/living/get_inspect_event_detail',
						{},
						{ event_id },
					);
					break;
				}
				case 'getResidentGridInfo': {
					responseData = await weComApiRequest.call(
						this,
						'GET',
						'/cgi-bin/living/get_resident_grid_info',
					);
					break;
				}
				case 'getCorpResidentStat': {
					const start_time = this.getNodeParameter('start_time', i) as number;
					const end_time = this.getNodeParameter('end_time', i) as number;
					const grid_id = this.getNodeParameter('grid_id', i, '') as string;

					const body: IDataObject = {
						start_time,
						end_time,
					};

					if (grid_id) {
						body.grid_id = grid_id;
					}

					responseData = await weComApiRequest.call(
						this,
						'POST',
						'/cgi-bin/living/get_corp_resident_stat',
						body,
					);
					break;
				}
				case 'getUserResidentStat': {
					const userid = this.getNodeParameter('userid', i) as string;
					const start_time = this.getNodeParameter('start_time', i) as number;
					const end_time = this.getNodeParameter('end_time', i) as number;

					const body: IDataObject = {
						userid,
						start_time,
						end_time,
					};

					responseData = await weComApiRequest.call(
						this,
						'POST',
						'/cgi-bin/living/get_user_resident_stat',
						body,
					);
					break;
				}
				case 'getResidentCategoryStat': {
					const start_time = this.getNodeParameter('start_time', i) as number;
					const end_time = this.getNodeParameter('end_time', i) as number;
					const grid_id = this.getNodeParameter('grid_id', i, '') as string;

					const body: IDataObject = {
						start_time,
						end_time,
					};

					if (grid_id) {
						body.grid_id = grid_id;
					}

					responseData = await weComApiRequest.call(
						this,
						'POST',
						'/cgi-bin/living/get_resident_category_stat',
						body,
					);
					break;
				}
				case 'getResidentEventList': {
					const start_time = this.getNodeParameter('start_time', i) as number;
					const end_time = this.getNodeParameter('end_time', i) as number;
					const grid_id = this.getNodeParameter('grid_id', i, '') as string;
					const category_id = this.getNodeParameter('category_id', i, '') as string;
					const status = this.getNodeParameter('status', i, 0) as number;
					const offset = this.getNodeParameter('offset', i, 0) as number;
					const limit = this.getNodeParameter('limit', i, 20) as number;

					const body: IDataObject = {
						start_time,
						end_time,
						offset,
						limit,
					};

					if (grid_id) {
						body.grid_id = grid_id;
					}
					if (category_id) {
						body.category_id = category_id;
					}
					if (status > 0) {
						body.status = status;
					}

					responseData = await weComApiRequest.call(
						this,
						'POST',
						'/cgi-bin/living/get_resident_event_list',
						body,
					);
					break;
				}
				case 'getResidentEventDetail': {
					const event_id = this.getNodeParameter('event_id', i) as string;
					responseData = await weComApiRequest.call(
						this,
						'GET',
						'/cgi-bin/living/get_resident_event_detail',
						{},
						{ event_id },
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
