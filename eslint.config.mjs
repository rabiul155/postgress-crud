import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    // extends: ["eslint:recommended", "prettier"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "no-console": "warn",
      "no-unused-vars": ["off", {  argsIgnorePattern: "req|res|next|val" }],
    },
  },
  pluginJs.configs.recommended,

];



// import globals from "globals";
// import pluginJs from "@eslint/js";

// export default [
//   {
//     files: ["**/*.js"],
//     ignores: ['**/node_modules/'],
//     languageOptions: { globals: globals.browser },

//     extends: ["eslint:recommended", "prettier"],

//     rules: {
//       'no-unused-expressions': 'error',
//       'prefer-const': 'error',
//       'no-console': 'warn',
//       'no-undef': 'error',
//       '@typescript-eslint/no-explicit-any': 'warn',
//       "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "req|res|next|val" }],
//     },
//     globals : {
//       "process" : "readonly"
//     }
//   },

//   pluginJs.configs.recommended,
 
// ];