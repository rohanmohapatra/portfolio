import js from '@eslint/js';
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-config-prettier/flat';

const config = [
  { ignores: ['node_modules/**', '.next/**', 'dist/**'] },
  js.configs.recommended,
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    plugins: { import: importPlugin },
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      'import/order': ['error'],
      'import/exports-last': 'error'
    }
  },
  prettier
];

export default config;
