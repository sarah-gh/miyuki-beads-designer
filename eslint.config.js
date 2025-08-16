import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import pluginVitest from '@vitest/eslint-plugin';
import pluginPlaywright from 'eslint-plugin-playwright';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';

export default defineConfig([
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],

  {
    rules: {
      // ERROR
      'vue/no-mutating-props': 2,
      'vue/no-use-v-if-with-v-for': 2,
      'vue/require-prop-type-constructor': 2,
      'vue/no-export-in-script-setup': 2,
      'vue/no-reserved-props': 2,
      'vue/no-side-effects-in-computed-properties': 2,
      'vue/require-component-is': 2,
      'vue/require-v-for-key': 2,
      'vue/require-valid-default-prop': 2,
      'vue/component-definition-name-casing': [2, 'PascalCase'],
      'vue/no-unused-vars': [
        2,
        {
          ignorePattern: '^_',
        },
      ],
      'vue/no-import-compiler-macros': 2,
      // WARNING
      'vue/attributes-order': [
        1,
        {
          order: [
            'DEFINITION',
            'LIST_RENDERING',
            'CONDITIONALS',
            'RENDER_MODIFIERS',
            'GLOBAL',
            ['UNIQUE', 'SLOT'],
            'TWO_WAY_BINDING',
            'OTHER_DIRECTIVES',
            'OTHER_ATTR',
            'EVENTS',
            'CONTENT',
          ],
          alphabetical: false,
        },
      ],
      'vue/block-order': [
        1,
        {
          order: ['template', 'script', 'style'],
        },
      ],
      'vue/define-macros-order': [
        1,
        {
          order: ['defineProps', 'defineEmits'],
          defineExposeLast: false,
        },
      ],
      'no-console': [1, { allow: ['error', 'warn', 'info'] }],
      'vue/no-arrow-functions-in-watch': 1,
      'vue/no-unused-components': 1,
      'vue/require-toggle-inside-transition': 1,
      'vue/attribute-hyphenation': 1,
      'vue/no-ref-object-reactivity-loss': 1,
      // OFF
      'vue/html-self-closing': 0,
      'vue/html-indent': 0,
      'vue/singleline-html-element-content-newline': 0,
      'vue/max-attributes-per-line': 0,
      'vue/html-closing-bracket-newline': 0,
      'vue/multiline-html-element-content-newline': 0,
      'vue/no-multi-spaces': 0,
    },
  },

  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
  },

  {
    ...pluginPlaywright.configs['flat/recommended'],
    files: ['e2e/**/*.{test,spec}.{js,ts,jsx,tsx}'],
  },

  skipFormatting,
]);
