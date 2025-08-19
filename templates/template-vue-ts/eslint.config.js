import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import { defineConfig } from 'eslint/config'
import stylistic from '@stylistic/eslint-plugin'

export default defineConfig([
  { files: ['**/*.{js,mjs,cjs,ts,vue}'], plugins: { js }, extends: ['js/recommended'] },
  { files: ['**/*.{js,mjs,cjs,ts,vue}'],
    languageOptions: { globals: globals.browser },
    rules: {
      'arrow-body-style': 'error',
    },
  },
  tseslint.configs.recommended,
  stylistic.configs.recommended,
  pluginVue.configs['flat/essential'],
  { files: ['**/*.vue'],
    languageOptions:
     { parserOptions: { parser: tseslint.parser } },
    rules: {
      '@stylistic/indent': 'off',
    },
  }, 
  {
    extends:['./.eslintrc-auto-import.json']
  }
])
