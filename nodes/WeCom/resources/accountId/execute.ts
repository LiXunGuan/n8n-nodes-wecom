import type { IExecuteFunctions, INodeExecutionData, IDataObject } from 'n8n-workflow';
import { openuseridToUserid } from './openuseridToUserid';
import { fromServiceExternalUserid } from './fromServiceExternalUserid';
import { convertTmpExternalUserid } from './convertTmpExternalUserid';

export async function executeAccountId(
	this: IExecuteFunctions,
	operation: string,
	items: INodeExecutionData[],
): Promise<INodeExecutionData[]> {
	const returnData: INodeExecutionData[] = [];

	for (let i = 0; i < items.length; i++) {
		try {
			let responseData: IDataObject = {};

			switch (operation) {
				case 'openuseridToUserid':
					responseData = await openuseridToUserid.call(this, i);
					break;
				case 'fromServiceExternalUserid':
					responseData = await fromServiceExternalUserid.call(this, i);
					break;
				case 'convertTmpExternalUserid':
					responseData = await convertTmpExternalUserid.call(this, i);
					break;
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
						success: false,
					},
					pairedItem: { item: i },
				});
			} else {
				throw error;
			}
		}
	}

	return returnData;
}
