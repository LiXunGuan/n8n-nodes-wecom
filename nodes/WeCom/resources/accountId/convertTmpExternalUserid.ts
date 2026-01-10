import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { weComApiRequest } from '../../shared/transport';

export async function convertTmpExternalUserid(
	this: IExecuteFunctions,
	index: number,
): Promise<IDataObject> {
	const businessType = this.getNodeParameter('businessType', index) as number;
	const userType = this.getNodeParameter('userType', index) as number;
	const tmpExternalUseridList = this.getNodeParameter('tmpExternalUseridList', index) as string[];

	const body: IDataObject = {
		business_type: businessType,
		user_type: userType,
		tmp_external_userid_list: tmpExternalUseridList,
	};

	const responseData = await weComApiRequest.call(
		this,
		'POST',
		'/cgi-bin/idconvert/convert_tmp_external_userid',
		body,
	);

	return responseData;
}
