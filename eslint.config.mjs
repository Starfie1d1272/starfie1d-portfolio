import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';

export default [
  { ignores: ['dist/**', 'node_modules/**', '.astro/**', 'public/**'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs['flat/recommended'],
  { files: ['src/env.d.ts'], rules: { '@typescript-eslint/triple-slash-reference': 'off' } },
];
