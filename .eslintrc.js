module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended"],

  parserOptions: {
    parser: "@babel/eslint-parser",
    ecmaFeatures: {
      jsx: false,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",

    "no-var": "error",
    semi: "error",
    "no-unused-vars": "warn",
    "no-multi-spaces": "error",
    "space-in-parens": "error",
    "no-multiple-empty-lines": "error",
    "prefer-const": "error",
    "no-use-before-define": "error",
  },
};
