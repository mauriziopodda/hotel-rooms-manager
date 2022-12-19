module.exports = {
	root: true,

	plugins: ['prettier', 'sort-destructure-keys', 'unused-imports'],

	extends: [
		'xo/browser',
		'xo-typescript',
		'xo-react',
		'plugin:import/recommended',
		'plugin:unicorn/recommended',
		'plugin:prettier/recommended',
	],

	rules: {
		// indent: ['error', 'tab'],
		// Prettier configuration
		'prettier/prettier': [
			'error',
			{
				// Include parentheses around a sole arrow function parameter; converts `x => x + 1` to `(x) => x + 1`.
				// Reasoning explained well here: https://prettier.io/docs/en/options.html#arrow-function-parentheses
				arrowParens: 'always',
				// Put the `>` of a multi-line HTML element alone on a new line.
				bracketSameLine: false,
				// Require spaces between brackets in object literals.
				bracketSpacing: true,
				// Force `\n` as the line ending character.
				endOfLine: 'lf',
				// Don't add semicolons at the end of statements.
				semi: false,
				// Use single quotes instead of double quotes.
				singleQuote: true,
				// Add trailing commas wherever possible in multi-line comma-separated syntactic structures.
				trailingComma: 'es5'
			},
		],
		// Custom because eslint-config-xo-typescript bans `null`. We use it heavily.
		'@typescript-eslint/ban-types': [
			'error',
			{
				extendDefaults: true,
			},
		],
		// Main reason is uniformity. `type` can do whatever `interface` can, and more.
		'@typescript-eslint/consistent-type-definitions': ['error', 'type'],
		// Required by Vite.
		'@typescript-eslint/consistent-type-imports': [
			'error',
			{
				prefer: 'type-imports',
			},
		],
		// We don't care about ordering methods and properties on classes.
		// For types we order their properties alphabetically.
		'@typescript-eslint/member-ordering': [
			'error',
			{
				classes: 'never',
				typeLiterals: {
					order: 'alphabetically',
				},
			},
		],
		// Already enabled by eslint-config-xo-typescript, but was using `StrictPascalCase` and `StrictCamelCase`.
		// `Strict*` doesn't allow for e.g. `ButtonCSS`, but wants it to be `ButtonCss`
		'@typescript-eslint/naming-convention': [
			'error',
			{
				// Almost everything should be camelCase or PascalCase.
				selector: [
					'accessor',
					'classMethod',
					'classProperty',
					'function',
					'objectLiteralMethod',
					'parameterProperty',
					'typeMethod',
					'typeProperty',
					'variable',
				],
				format: ['camelCase', 'PascalCase'],
			},
			{
				// Types should be PascalCase.
				selector: 'typeLike',
				format: ['PascalCase'],
			},
			{
				// Type parameters (generics) should be PascalCase.
				selector: 'typeParameter',
				format: ['PascalCase'],
			},
			{
				// Boolean variables and properties should start with one of `prefix` and continue in PascalCase.
				// `as` is a custom prefix (not copied from eslint-config-xo-typescript).
				selector: ['variable', 'typeProperty'],
				types: ['boolean'],
				format: ['PascalCase'],
				prefix: ['as', 'can', 'did', 'has', 'is', 'should', 'will'],
			},
			{
				// Object properties should be either camelCase or snake_case.
				selector: ['objectLiteralProperty'],
				format: ['camelCase', 'snake_case'],
			},
			{
				// Quoted object properties should have no rules.
				selector: ['classProperty', 'objectLiteralProperty'],
				format: null,
				modifiers: ['requiresQuotes'],
			},
		],
		// Will be enabled by eslint-config-xo-typescript in 2023 only because they had problems while interacting with external libraries.
		// We might have problems with some explicit `any`s spread around.
		// We will make this an error in the future.
		'@typescript-eslint/no-explicit-any': [
			'warn',
			{
				fixToUnknown: false,
			},
		],
		// The following three rules are set as errors by eslint-config-xo-typescript,
		//  downscaled them to warning as we have a few of them that are not easily fixable.
		'@typescript-eslint/no-unsafe-assignment': 'warn',
		'@typescript-eslint/no-unsafe-call': 'warn',
		'@typescript-eslint/no-unsafe-return': 'warn',
		// Set as error by eslint-config-xo-typescript, downscaled to warning because it requires some background knowledge for existing code.
		// Should become an error for us too at one point.
		'@typescript-eslint/prefer-nullish-coalescing': 'warn',
		// Disable capitalized comments because people comment code.
		'capitalized-comments': 'off',
		// Prefer having curly braces around statements that allow them.
		curly: ['error', 'all'],
		// Except for import/order, these rules are disabled for performance reasons.
		// The following rules have no equivalent in TypeScript, and might be useful to enable:
		//  - import/no-named-as-default
		//  - import/no-cycle
		//  - import/no-unused-modules
		//  - import/no-deprecated
		'import/default': 'off',
		'import/named': 'off',
		'import/namespace': 'off',
		'import/no-cycle': 'off',
		'import/no-deprecated': 'off',
		'import/no-named-as-default': 'off',
		'import/no-named-as-default-member': 'off',
		'import/no-unresolved': 'off',
		'import/no-unused-modules': 'off',
		semi: 'off',
		'@typescript-eslint/semi': 'off',
		// Rules for unused
		'no-unused-vars': 'off',
		'unused-imports/no-unused-imports': 'error',
		'unused-imports/no-unused-vars': [
			'warn',
			{vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_'},
		],
		// Expect an empty line after the import block.
		'import/newline-after-import': 'error',
		// Alphabetically order imports by their path, and group type imports together at the end.
		'import/order': [
			'error',
			{
				alphabetize: {
					caseInsensitive: true,
					order: 'asc',
				},
				groups: [
					[
						'builtin',
						'external',
						'internal',
						'unknown',
						'parent',
						'sibling',
						'index',
						'object',
					],
					'type',
				],
				'newlines-between': 'always',
			},
		],
		// The following three rules are only styling preference, but make the code more readable.
		// Expect an empty line after a (group of) variable declarations.
		'newline-after-var': ['error', 'always'],
		// Expect an empty line before a return.
		'newline-before-return': 'error',
		// Expect an empty line before and after a multiline block of code
		'padding-line-between-statements': [
			'error',
			...[
				'multiline-block-like',
				'multiline-const',
				'multiline-expression',
			].flatMap(statementType => [
				{
					blankLine: 'always',
					prev: statementType,
					next: '*',
				},
				{
					blankLine: 'always',
					prev: '*',
					next: statementType,
				},
			]),
		],
		// Allow warning comments (e.g. TODO, FIXME, HACK).
		'no-warning-comments': 'off',
		// Disabled in favor of `@typescript-eslint/naming-convention`.
		'react/boolean-prop-naming': 'off',
		// Expect components defined as arrow functions over function definitions for consistency.
		'react/function-component-definition': [
			'error',
			{
				namedComponents: 'arrow-function',
			},
		],
		// Sort props alphabetically, while keeping reserved keywords (children, dangerouslySetInnerHTML, key, and ref) first,
		//  shorthands after keywords, and callbacks always last.
		'react/jsx-sort-props': [
			'error',
			{
				callbacksLast: true,
				reservedFirst: true,
				shorthandFirst: true,
			},
		],
		// Disabled as it causes false positives when using `forwardRef`.
		'react/require-default-props': 'off',
		// Sort destructured keys alphabetically to avoid possible merge conflicts when changing/removing/adding properties.
		'sort-destructure-keys/sort-destructure-keys': 'error',
		// Set by eslint-plugin-unicorn, but set on `camelCase`.
		'unicorn/filename-case': [
			'error',
			{
				case: 'snakeCase',
			},
		],
		// `Model` has a `push` method that's not compatible with a single `push` call.
		'unicorn/no-array-push-push': 'off',
		// Same as `@typescript-eslint/ban-types`.
		'unicorn/no-null': 'off',
		// Keep defaults and remove `props` from the list of replacements as this is what everyone uses.
		'unicorn/prevent-abbreviations': [
			'error',
			{
				replacements: {
					props: {
						properties: false,
					},
				},
			},
		],
	},

	// Report unused `eslint-disable-*` directives as warnings.
	reportUnusedDisableDirectives: true,
}
