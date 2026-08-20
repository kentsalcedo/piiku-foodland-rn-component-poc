import type { StorybookConfig } from "@storybook/react-native-web-vite";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import type { Plugin } from "vite";
import { mergeConfig } from "vite";

/**
 * NativeWind's react-native-css-interop doctor.js is CommonJS with JSX.
 * Vite's production bundle leaves `exports` in the iframe, which crashes
 * the static Storybook on Vercel/GitHub Pages. Dev mode is unaffected.
 */
function stubCssInteropDoctor(): Plugin {
  const stub = `
export function verifyJSX() { return true; }
export function verifyFlag() { return true; }
export function verifyData() { return true; }
`;

  return {
    name: "stub-css-interop-doctor",
    enforce: "pre",
    load(id) {
      const normalized = id.split("?")[0].replace(/\\/g, "/");
      if (normalized.endsWith("react-native-css-interop/dist/doctor.js")) {
        return stub;
      }
      return undefined;
    },
  };
}

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
      base: process.env.VERCEL ? "/" : "./",
      assetsInclude: ["**/*.ttf"],
      plugins: [stubCssInteropDoctor()],
      css: {
        postcss: {
          plugins: [tailwindcss(), autoprefixer()],
        },
      },
      build: {
        commonjsOptions: {
          transformMixedEsModules: true,
        },
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
