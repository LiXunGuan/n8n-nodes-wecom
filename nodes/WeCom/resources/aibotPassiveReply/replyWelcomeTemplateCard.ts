import type { INodeProperties } from 'n8n-workflow';

const showOnlyForReplyWelcomeTemplateCard = {
	resource: ['aibotPassiveReply'],
	operation: ['replyWelcome'],
	replyType: ['template_card'],
};

export const replyWelcomeTemplateCardDescription: INodeProperties[] = [
	{
		displayName: '模板卡片',
		name: 'template_card',
		type: 'json',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: showOnlyForReplyWelcomeTemplateCard,
		},
		default: '',
		required: true,
		description: '模板卡片结构体（JSON格式）',
	},
];
