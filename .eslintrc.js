module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  plugins: [
    'babel',
    'jest',
  ],
  extends: [
    'airbnb-base',
    'plugin:jest/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-console': 0,
  },
};