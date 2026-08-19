import type { StorybookConfig } from "@storybook/react-native-web-vite";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-docs", "@chromatic-com/storybook"],
  framework: {
    name: "@storybook/react-native-web-vite",
    options: {
      pluginReactOptions: {
        jsxImportSource: "nativewind",
      },
    },
  },
  async viteFinal(viteConfig) {
    return mergeConfig(viteConfig, {
      base: "./",
      assetsInclude: ["**/*.ttf"],
      css: {
        postcss: {
          plugins: [tailwindcss(), autoprefixer()],
        },
      },
      build: {
        rollupOptions: {
          plugins: [
            {
              name: "nativewind-no-treeshake",
              transform(_code: string, id: string) {
                if (id.includes("react-native-css-interop")) {
                  return { moduleSideEffects: "no-treeshake" as const };
                }
                return undefined;
              },
            },
          ],
        },
      },
    });
  },
};

export default config;
