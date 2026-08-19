import type { Meta, StoryObj } from "@storybook/react-native";
import { View } from "react-native";
import { fn } from "storybook/test";

import { AppText } from "../AppText";
import { HeaderNav } from "./HeaderNav";

const meta = {
  title: "03 Navigation/HeaderNav",
  component: HeaderNav,
  args: {
    onBackPress: fn(),
    onMenuPress: fn(),
    onRightPress: fn(),
    safeArea: false,
  },
  parameters: {
    docs: {
      description: {
        component:
          "Mobile header with a structured logo slot. The current wordmark is a placeholder until an approved asset is supplied.",
      },
    },
  },
} satisfies Meta<typeof HeaderNav>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    showMenu: true,
  },
};

export const WithTitle: Story = {
  args: {
    showBack: true,
    title: "Weekly ad",
    subtitle: "Oʻahu stores",
  },
};

export const Maikai: Story = {
  name: "Maikaʻi",
  args: {
    appearance: "maikai",
    showBack: true,
    title: "Rewards",
  },
};

export const WithRightAction: Story = {
  args: {
    showMenu: true,
    rightAction: (
      <AppText variant="caption" color="onPrimary">
        Help
      </AppText>
    ),
  },
};

export const AllVariants: Story = {
  render: (args) => (
    <View className="gap-lg">
      <HeaderNav {...args} showMenu />
      <HeaderNav {...args} showBack title="Stores" subtitle="Near you" />
      <HeaderNav {...args} appearance="maikai" showBack title="Maikaʻi" />
    </View>
  ),
};
