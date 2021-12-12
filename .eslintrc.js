module.exports = {
  extends: ['react-app', 'prettier'],
  ignorePatterns: ['node_modules/**'],
  plugins: ['prettier', 'simple-import-sort'],
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
    'object-shorthand': ['warn', 'properties'],
    'prettier/prettier': 'warn',
    'react/prop-types': ['warn', { skipUndeclared: true }],
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [['^\\u0000', '^@?\\w', '^[^.]', '^\\.']],
      },
    ],
    'simple-import-sort/exports': 'warn',
    'sort-imports': 'off',
    'import/order': 'off',
  },
};
