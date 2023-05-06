module.exports = {
    env: {
        node: true,
        es2021: true,
        jest: true,
    },
    extends: ['prettier', 'eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['prettier', '@typescript-eslint', 'import', 'filename-rules'],
    rules: {
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                semi: true,
            },
        ],
        'import/named': 0,
        'import/export': 0,
        'import/default': 0,
        'import/no-unused-modules': 0,
        'import/namespace': 0,
        'import/no-self-import': 1,
        'import/no-cycle': [
            2,
            {
                maxDepth: 1,
                ignoreExternal: true,
            },
        ],
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-this-alias': [
            'error',
            {
                allowDestructuring: false, // Disallow `const { props, state } = this`; true by default
                allowedNames: ['self', '_this'], // Allow `const self = this`; `[]` by default
            },
        ],
        '@typescript-eslint/ban-ts-comment': 0,
        '@typescript-eslint/no-non-null-assertion': 0,
        '@typescript-eslint/no-namespace': 0,
        '@typescript-eslint/no-empty-interface': 0,
        'filename-rules/match': [2, /^[a-z0-9]+(?:-[a-z0-9]+)*(.[a-zA-Z0-9]*)+$/],
        '@typescript-eslint/no-unused-vars': [2, { argsIgnorePattern: '^_' }],
    },
    overrides: [
        {
            rules: {
                '@typescript-eslint/no-floating-promises': ['error'],
            },
            files: ['./step-definitions/**', './supports/**', './drivers/**', './libraries/**'],
            parserOptions: {
                project: './tsconfig.json',
            },
        },
        {
            files: ['./step-definitions/learner-keys/*.ts', './step-definitions/teacher-keys/*.ts'],
            rules: {
                '@typescript-eslint/no-inferrable-types': 'off',
            },
        },
        {
            files: ['.eslintrc.js'],
            rules: {
                'filename-rules/match': 'off',
            },
        },
        {
            files: ['./supports/*-world.ts', './supports/scenario-context.ts'],
            rules: {
                'valid-jsdoc': [
                    'error',
                    {
                        requireReturn: true,
                        requireReturnType: false,
                        requireParamType: false,
                        requireParamDescription: false,
                    },
                ],
                'require-jsdoc': [
                    'error',
                    {
                        require: {
                            FunctionDeclaration: true,
                            MethodDefinition: true,
                            ClassDeclaration: false,
                            ArrowFunctionExpression: true,
                            FunctionExpression: true,
                        },
                    },
                ],
            },
        },
        {
            files: ['./supports/*', './flutter-driver-js/*', './step-definitions/*.ts'],
            rules: {
                '@typescript-eslint/naming-convention': [
                    'error',
                    {
                        selector: ['typeParameter', 'typeLike'],
                        format: ['PascalCase'],
                    },
                    {
                        selector: ['variable', 'function', 'parameter'],
                        format: ['camelCase'],
                        leadingUnderscore: 'allow',
                    },
                ],
            },
        },
    ],
};
