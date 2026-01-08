import type { INodeProperties } from 'n8n-workflow';

const showOnlyForDeleteLivingReplayData = {
	resource: ['school'],
	operation: ['deleteLivingReplayData'],
};

export const deleteLivingReplayDataDescription: INodeProperties[] = [
	{
		displayName: '直播ID',
		name: 'livingid',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForDeleteLivingReplayData,
		},
		default: '',
		placeholder: 'living_001',
	},
];
