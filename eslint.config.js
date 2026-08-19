const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");

module.exports = defineConfig([
  expoConfig,
  {
    ignores: [
      "dist/**",
      "storybook-static/**",
      "node_modules/**",
      ".expo/**",
      ".rnstorybook/storybook.requires.ts",
      "tailwind.config.js",
      "postcss.config.js",
      "babel.config.js",
      "metro.config.js",
    ],
  },
]);
