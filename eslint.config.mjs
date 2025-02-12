import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    ignores: ['**/node_modules/'],
    languageOptions: { globals: globals.browser },

    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],

    rules: {
      'no-unused-expressions': 'error',
      'prefer-const': 'error',
      'no-console': 'warn',
      'no-undef': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "req|res|next|val" }],
    },
    globals : {
      "process" : "readonly"
    }
  },

  pluginJs.configs.recommended,
 
];