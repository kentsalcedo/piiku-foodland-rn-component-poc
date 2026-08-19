import type { Meta, StoryObj } from "@storybook/react-native";
import { View } from "react-native";

import { AppText } from "../AppText";
import { Card } from "./Card";

const meta = {
  title: "04 Content/Card",
  component: Card,
  parameters: {
    docs: {
      description: {
        component:
          "Flat surface container. Prefer border and tonal contrast before shadow.",
      },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <View className="p-lg">
      <Card>
        <AppText variant="heading3">Base card</AppText>
        <AppText variant="bodySmall" color="secondary" className="mt-xs">
          Use this container for custom layouts that are not promo or reward
          cards.
        </AppText>
      </Card>
    </View>
  ),
};

export const Variants: Story = {
  render: Default.render,
};

export const AllVariants: Story = {
  render: Default.render,
};
