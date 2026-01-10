import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { weComApiRequest } from '../../shared/transport';

export async function openuseridToUserid(
	this: IExecuteFunctions,
	index: number,
): Promise<IDataObject> {
	const sourceAgentid = this.getNodeParameter('sourceAgentid', index) as number;
	const openUseridList = this.getNodeParameter('openUseridList', index) as string[];

	const body: IDataObject = {
		open_userid_list: openUseridList,
		source_agentid: sourceAgentid,
	};

	const responseData = await weComApiRequest.call(
		this,
		'POST',
		'/cgi-bin/batch/openuserid_to_userid',
		body,
	);

	return responseData;
}
