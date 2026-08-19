import type { Meta, StoryObj } from "@storybook/react-native";
import { View } from "react-native";
import { fn } from "storybook/test";

import { AppText } from "../AppText";
import { StickyFooter } from "./StickyFooter";

const meta = {
  title: "03 Navigation/StickyFooter",
  component: StickyFooter,
  args: {
    safeArea: false,
    primaryAction: {
      label: "Continue",
      onPress: fn(),
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Bottom action area for checkout, rewards, forms, and confirmations. Layout stays inside a mobile-height preview.",
      },
    },
  },
  decorators: [
    (Story) => (
      <View className="h-[640px] justify-end bg-canvas">
        <View className="flex-1 px-lg pt-xl">
          <AppText variant="heading3">Checkout preview</AppText>
          <AppText variant="bodySmall" color="secondary" className="mt-sm">
            Page content scrolls above the pinned action bar.
          </AppText>
        </View>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof StickyFooter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const TwoActions: Story = {
  args: {
    secondaryAction: {
      label: "Not now",
      variant: "secondary",
      onPress: fn(),
    },
  },
};

export const WithSummary: Story = {
  args: {
    summary: (
      <View className="flex-row items-center justify-between">
        <AppText variant="caption" color="secondary">
          Estimated total
        </AppText>
        <AppText variant="button">$24.80</AppText>
      </View>
    ),
    primaryAction: {
      label: "Place order",
      onPress: fn(),
    },
  },
};

export const AllVariants: Story = {
  render: (args) => (
    <View className="gap-lg">
      <StickyFooter {...args} />
      <StickyFooter
        {...args}
        secondaryAction={{ label: "Back", variant: "secondary", onPress: fn() }}
      />
    </View>
  ),
};
