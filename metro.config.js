const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const {
  withStorybook,
} = require("@storybook/react-native/metro/withStorybook");

const defaultConfig = getDefaultConfig(__dirname);

const nativeWindConfig = withNativeWind(defaultConfig, {
  input: "./global.css",
});

module.exports = withStorybook(nativeWindConfig, {
  enabled: process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true",
});
