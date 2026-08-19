import type { Meta, StoryObj } from "@storybook/react-native";
import { View } from "react-native";
import { fn } from "storybook/test";

import { TreatIllustration } from "../../examples/illustrations";
import { RewardCard } from "./RewardCard";

const meta = {
  title: "04 Content/RewardCard",
  component: RewardCard,
  args: {
    name: "Bakery treat",
    points: 1000,
    status: "available",
    description: "A fresh in-store pastry on your next visit.",
    media: <TreatIllustration />,
    onRedeem: fn(),
  },
  argTypes: {
    status: {
      control: "select",
      options: ["available", "locked", "redeemed"],
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Maikaʻi loyalty card. Lime is an accent with dark teal text — never white text on lime.",
      },
    },
  },
} satisfies Meta<typeof RewardCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Locked: Story = {
  args: {
    name: "Produce bag credit",
    points: 1500,
    status: "locked",
  },
};

export const Redeemed: Story = {
  args: {
    status: "redeemed",
  },
};

export const FoodlandAndMaikai: Story = {
  name: "Foodland and Maikaʻi",
  render: (args) => (
    <View className="gap-lg p-lg">
      <RewardCard {...args} />
      <RewardCard {...args} name="Produce bag credit" points={1500} status="locked" />
    </View>
  ),
};

export const AllVariants: Story = {
  render: FoodlandAndMaikai.render,
};
