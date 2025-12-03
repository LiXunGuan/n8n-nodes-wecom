import { config } from '@n8n/node-cli/eslint';

export default [
	...config,
	{
		ignores: ['scripts/**'],
	},
	{
		rules: {
			// Disable sorting rule for Chinese characters
			'n8n-nodes-base/node-param-options-type-unsorted-items': 'off',
			// Disable boolean description rule for Chinese content
			'n8n-nodes-base/node-param-description-boolean-without-whether': 'off',
			'n8n-nodes-base/node-param-description-wrong-for-limit': 'off',
			'n8n-nodes-base/node-param-description-excess-final-period': 'off',
			'n8n-nodes-base/node-param-description-wrong-for-dynamic-multi-options': 'off',
			'n8n-nodes-base/node-param-description-wrong-for-dynamic-options': 'off',
			'n8n-nodes-base/node-param-fixed-collection-type-unsorted-items': 'off',
		},
	},
];
