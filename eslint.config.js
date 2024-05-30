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
  },
  ignorePatterns: ['dist/', 'node_modules/', 'coverage/', 'tests/', 'gauge-proto', "src/gen"],
};
