module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.eslint.json'],
    },
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    rules: {
        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: '*', next: 'return' },
            { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
            { blankLine: 'always', prev: 'class', next: '*' },
            {
                blankLine: 'any',
                prev: ['const', 'let', 'var'],
                next: ['const', 'let', 'var'],
            }
        ],
        'padded-blocks': ['error', { 'classes': 'always' }],
        'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 1, maxEOF: 0 }],
        '@typescript-eslint/unbound-method': ['warn', { 'ignoreStatic': true }],
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        'comma-spacing': ['error', { before: false, after: true }],
        'no-multi-spaces': 'error',
        'curly': 'error',
        "semi": 'error',
        "@typescript-eslint/no-unsafe-argument": "warn",
        "@typescript-eslint/no-unsafe-call": "warn",
        "@typescript-eslint/no-unnecessary-type-assertion": "warn",
        "@typescript-eslint/no-unsafe-return": "warn",
        "@typescript-eslint/no-unsafe-member-access": "warn",
        "@typescript-eslint/no-unsafe-enum-comparison": "warn"
    },
};
