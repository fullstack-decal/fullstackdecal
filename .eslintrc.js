module.exports = {
  ignorePatterns: [
    ".eslintrc.js",
    "babel.config.js",
    "sidebars.js",
    "docusaurus.config.js",
  ],
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@docusaurus/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    quotes: "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "comma-dangle": "off",
    semi: ["error", "always"],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
