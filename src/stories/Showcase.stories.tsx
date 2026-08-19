import type { Meta, StoryObj } from "@storybook/react-native";

import { DesignSystemShowcase } from "../screens/DesignSystemShowcase";
import { FoodlandHomeExample } from "../screens/FoodlandHomeExample";
import { MaikaiRewardsExample } from "../screens/MaikaiRewardsExample";

const meta = {
  title: "06 Examples",
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const DesignSystem: Story = {
  name: "Design System Showcase",
  render: () => <DesignSystemShowcase />,
};

export const FoodlandHome: Story = {
  name: "Foodland Home",
  render: () => <FoodlandHomeExample />,
};

export const MaikaiRewards: Story = {
  name: "Maikaʻi Rewards",
  render: () => <MaikaiRewardsExample />,
};
