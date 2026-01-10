import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { weComApiRequest } from '../../shared/transport';

export async function fromServiceExternalUserid(
	this: IExecuteFunctions,
	index: number,
): Promise<IDataObject> {
	const sourceAgentid = this.getNodeParameter('sourceAgentid', index) as number;
	const externalUserid = this.getNodeParameter('externalUserid', index) as string;

	const body: IDataObject = {
		external_userid: externalUserid,
		source_agentid: sourceAgentid,
	};

	const responseData = await weComApiRequest.call(
		this,
		'POST',
		'/cgi-bin/externalcontact/from_service_external_userid',
		body,
	);

	return responseData;
}
