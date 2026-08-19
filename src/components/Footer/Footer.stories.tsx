import type { Meta, StoryObj } from "@storybook/react-native";
import { View } from "react-native";
import { fn } from "storybook/test";

import { AppText } from "../AppText";
import { Footer } from "./Footer";

const demoLinks = [
  { label: "Stores", onPress: fn() },
  { label: "Weekly Ad", onPress: fn() },
  { label: "Recipes", onPress: fn() },
  { label: "Maikaʻi Rewards", onPress: fn() },
  { label: "Help", onPress: fn() },
];

const meta = {
  title: "03 Navigation/Footer",
  component: Footer,
  args: {
    links: demoLinks,
  },
  parameters: {
    docs: {
      description: {
        component:
          "Content footer for supporting links. Production usage is data-driven; demo labels are sample only.",
      },
    },
  },
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Maikai: Story = {
  name: "Maikaʻi",
  args: {
    appearance: "maikai",
    supportingText: "Earn points on everyday groceries and redeem in store.",
  },
};

export const WithSocial: Story = {
  args: {
    socialSlot: (
      <AppText variant="caption" color="secondary">
        Contact · help@example.foodland
      </AppText>
    ),
  },
};

export const AllVariants: Story = {
  render: (args) => (
    <View className="gap-lg">
      <Footer {...args} />
      <Footer {...args} appearance="maikai" />
    </View>
  ),
};
