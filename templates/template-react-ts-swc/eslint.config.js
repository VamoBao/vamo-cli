import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'
import reactPlugin from 'eslint-plugin-react'

export default tseslint.config(
  { ignores: ['dist', 'node_modules'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{jsx,js,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    ...reactPlugin.configs.flat['jsx-runtime'],
    languageOptions: {
      ...reactPlugin.configs.flat['jsx-runtime'].languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
    rules: {
      'arrow-body-style': 'error',
      'react-hooks/exhaustive-deps': [
        'warn',
        {
          additionalHooks: '(useMyCustomHook|useMyOtherCustomHook)',
        },
      ],
      'react/jsx-closing-tag-location': ['error'],
      'react/jsx-closing-bracket-location': ['error'],
      'react/jsx-wrap-multilines': ['error'],
      'react/self-closing-comp': [
        'error',
        {
          component: true,
          html: true,
        },
      ],
    },
  },
  stylistic.configs.recommended,
)
