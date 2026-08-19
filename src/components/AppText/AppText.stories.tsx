import type { Meta, StoryObj } from "@storybook/react-native";
import { View } from "react-native";

import { AppText } from "./AppText";

const meta = {
  title: "02 Components/AppText",
  component: AppText,
  args: {
    children: "Fresh groceries, local favorites, and weekly savings.",
    variant: "body",
    color: "primary",
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "display",
        "heading1",
        "heading2",
        "heading3",
        "eyebrow",
        "body",
        "bodySmall",
        "button",
        "caption",
      ],
    },
    color: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "brand",
        "onPrimary",
        "error",
        "inverse",
        "accent",
        "muted",
      ],
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Shared text styles so buttons, cards, and screens do not reinvent Work Sans sizes.",
      },
    },
  },
} satisfies Meta<typeof AppText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
  render: () => (
    <View className="gap-base p-lg">
      <AppText variant="display">Aloha, Keoni</AppText>
      <AppText variant="heading1">Weekly favorites</AppText>
      <AppText variant="heading2">1,240 Maikaʻi points</AppText>
      <AppText variant="heading3">Rewards available</AppText>
      <AppText variant="eyebrow">Foodland Hawaiʻi</AppText>
      <AppText variant="body">
        Shop stores, recipes, and the weekly ad with a calm, local voice.
      </AppText>
      <AppText variant="bodySmall" color="secondary">
        Supporting copy stays readable at 14/21.
      </AppText>
      <AppText variant="button">Find a store</AppText>
      <AppText variant="caption" color="muted">
        Caption · in-store this week
      </AppText>
    </View>
  ),
};

export const SemanticColors: Story = {
  render: () => (
    <View className="gap-sm p-lg">
      <AppText color="primary">Primary body text</AppText>
      <AppText color="secondary">Secondary supporting text</AppText>
      <AppText color="brand">Brand accent text</AppText>
      <AppText color="error">Error message text</AppText>
      <AppText color="muted">Muted helper text</AppText>
    </View>
  ),
};

export const AllVariants: Story = {
  render: Variants.render,
};
