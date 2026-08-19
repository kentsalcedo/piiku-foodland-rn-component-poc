import type { Preview } from "@storybook/react-native";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import "../global.css";
import { colors } from "../src/foundations/colors";
import { DesignSystemProvider } from "../src/providers/DesignSystemProvider";
import type { BrandMode } from "../src/foundations/themes";

const preview: Preview = {
  tags: ["autodocs"],
  globalTypes: {
    brand: {
      name: "Brand",
      description: "Switch between Foodland and Maikaʻi themes",
      toolbar: {
        title: "Brand",
        icon: "paintbrush",
        items: [
          { value: "foodland", title: "Foodland" },
          { value: "maikai", title: "Maikaʻi" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    brand: "foodland",
  },
  parameters: {
    layout: "fullscreen",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      exclude: ["style", "hitSlop", "pressRetentionOffset"],
    },
    backgrounds: {
      default: "canvas",
      values: [
        { name: "canvas", value: colors.canvas },
        { name: "surface", value: colors.surface },
      ],
    },
    options: {
      storySort: {
        order: [
          "00 Welcome",
          "01 Foundations",
          "02 Components",
          "03 Navigation",
          "04 Content",
          "05 Feedback",
          "06 Examples",
        ],
      },
    },
  },
  decorators: [
    (Story, context) => {
      const brand: BrandMode =
        context.globals.brand === "maikai" ? "maikai" : "foodland";
      const isWide = context.parameters.previewLayout === "wide";

      return (
        <SafeAreaProvider>
          <DesignSystemProvider brand={brand}>
            {isWide ? (
              <View className="min-h-full flex-1 bg-canvas">
                <Story />
              </View>
            ) : (
              <View className="min-h-full items-center bg-canvas py-lg">
                <View className="w-[390px] max-w-full overflow-hidden bg-canvas">
                  <Story />
                </View>
              </View>
            )}
          </DesignSystemProvider>
        </SafeAreaProvider>
      );
    },
  ],
};

export default preview;
