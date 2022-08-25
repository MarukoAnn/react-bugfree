module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    rules: {
      'no-unused-vars': 'off', // 禁止出现未使用过的变量
      'no-use-before-define': 'off', //禁止在变量定义之前使用它们
      'multiline-ternary': 'off', //要求或禁止在三元操作数中间换行
      'react/prop-types': 'off', //关闭类型检测
      'space-before-function-paren': ['error', { named: 'never' }], //制在 function的左括号之前使用一致的空格
      '@typescript-eslint/no-unused-vars': 'error', //禁止出现未使用过的变量
      '@typescript-eslint/no-use-before-define': 'error', //禁止在变量定义之前使用它们
    },
  },
}
