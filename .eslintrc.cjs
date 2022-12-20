module.exports = {
  root: true,

  plugins: ['prettier', 'sort-destructure-keys', 'unused-imports'],

  parserOptions: {
    project: ['./tsconfig.json', './tsconfig.eslint.json'],
  },

  extends: [
    'xo/browser',
    'xo-typescript',
    'xo-react',
    'plugin:import/recommended',
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended',
  ],

  rules: {
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        bracketSameLine: false,
        bracketSpacing: true,
        endOfLine: 'lf',
        semi: false,
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
      },
    ],
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
      },
    ],
    '@typescript-eslint/member-ordering': [
      'error',
      {
        classes: 'never',
        typeLiterals: {
          order: 'alphabetically',
        },
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
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
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'typeParameter',
        format: ['PascalCase'],
      },
      {
        selector: ['variable', 'typeProperty'],
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['as', 'can', 'did', 'has', 'is', 'should', 'will'],
      },
      {
        selector: ['objectLiteralProperty'],
        format: ['camelCase', 'snake_case'],
      },
      {
        selector: ['classProperty', 'objectLiteralProperty'],
        format: null,
        modifiers: ['requiresQuotes'],
      },
    ],
    '@typescript-eslint/no-explicit-any': [
      'warn',
      {
        fixToUnknown: false,
      },
    ],
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-unsafe-return': 'warn',
    '@typescript-eslint/prefer-nullish-coalescing': 'warn',
    'capitalized-comments': 'off',
    curly: ['error', 'all'],
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
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'import/newline-after-import': 'error',
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
    'newline-after-var': ['error', 'always'],
    'newline-before-return': 'error',
    'padding-line-between-statements': [
      'error',
      ...[
        'multiline-block-like',
        'multiline-const',
        'multiline-expression',
      ].flatMap((statementType) => [
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
    'no-warning-comments': 'off',
    'react/boolean-prop-naming': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
      },
    ],
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        reservedFirst: true,
        shorthandFirst: true,
      },
    ],
    'react/require-default-props': 'off',
    'sort-destructure-keys/sort-destructure-keys': 'error',
    'unicorn/filename-case': [
      'error',
      {
        case: 'snakeCase',
      },
    ],
    'unicorn/no-array-push-push': 'off',
    'unicorn/no-null': 'off',
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
  reportUnusedDisableDirectives: true,
}
