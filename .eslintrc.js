module.exports = {
	env: {
		commonjs: true,
		es2021: true,
		node: true,
		jest: true
	},
	extends: 'eslint:recommended',
	parserOptions: {
		ecmaVersion: 12
	},
	rules: {
		'no-tabs': 0,
		'indent': [
			'error', 'tab'
		],
		'eqeqeq': 'error',
		'no-trailing-spaces': 'error',
		'object-curly-spacing': [
			'error', 'always'
		],
		'arrow-spacing': [
			'error', { before: true, after: true }
		],
		'no-unused-vars': [
			'error', { 'args': 'none' }
		]
	}
}
