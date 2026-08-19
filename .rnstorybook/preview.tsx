import "../global.css";

import { withBackgrounds } from "@storybook/addon-ondevice-backgrounds";
import type { Preview } from "@storybook/react-native";
import { Platform, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { colors } from "../src/foundations/colors";
import { DesignSystemProvider } from "../src/providers/DesignSystemProvider";
import type { BrandMode } from "../src/foundations/themes";

if (Platform.OS === "web") {
  const globalWeb = globalThis as typeof globalThis & {
    ProgressTransitionRegister?: Record<string, never>;
    UpdatePropsManager?: Record<string, never>;
  };
  globalWeb.ProgressTransitionRegister = {};
  globalWeb.UpdatePropsManager = {};
}

const preview: Preview = {
  decorators: [
    withBackgrounds,
    (Story, context) => {
      const brand: BrandMode =
        context.globals.brand === "maikai" ? "maikai" : "foodland";

      return (
        <SafeAreaProvider>
          <DesignSystemProvider brand={brand}>
            <View className="flex-1 bg-canvas">
              <Story />
            </View>
          </DesignSystemProvider>
        </SafeAreaProvider>
      );
    },
  ],
  globalTypes: {
    brand: {
      name: "Brand",
      toolbar: {
        items: [
          { value: "foodland", title: "Foodland" },
          { value: "maikai", title: "Maikaʻi" },
        ],
      },
    },
  },
  initialGlobals: {
    brand: "foodland",
  },
  parameters: {
    backgrounds: {
      default: "canvas",
      values: [
        { name: "canvas", value: colors.canvas },
        { name: "surface", value: colors.surface },
      ],
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
