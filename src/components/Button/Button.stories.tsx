import type { Meta, StoryObj } from "@storybook/react-native";
import { View } from "react-native";
import { fn } from "storybook/test";

import { Button } from "./Button";

const meta = {
  title: "02 Components/Button",
  component: Button,
  args: {
    label: "Find a store",
    onPress: fn(),
    variant: "primary",
    size: "default",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "inverse", "destructive"],
    },
    size: {
      control: "select",
      options: ["default", "compact"],
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Primary actions follow the active brand. Inverse uses warm canvas with deep teal text.",
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
  render: (args) => (
    <View className="gap-base p-lg">
      <Button {...args} variant="primary" label="Primary" />
      <Button {...args} variant="secondary" label="Secondary" />
      <Button {...args} variant="inverse" label="Inverse" />
      <Button {...args} variant="destructive" label="Remove item" />
    </View>
  ),
};

export const Compact: Story = {
  args: {
    size: "compact",
    label: "See the weekly ad",
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const FoodlandAndMaikai: Story = {
  name: "Foodland and Maikaʻi",
  render: (args) => (
    <View className="gap-base p-lg">
      <Button {...args} label="Shop Foodland" />
      <Button {...args} variant="secondary" label="View rewards" />
    </View>
  ),
};

export const AllVariants: Story = {
  render: (args) => (
    <View className="gap-base p-lg">
      <Button {...args} variant="primary" />
      <Button {...args} variant="secondary" />
      <Button {...args} variant="inverse" />
      <Button {...args} variant="destructive" label="Remove item" />
      <Button {...args} size="compact" label="Compact" />
      <Button {...args} loading label="Loading" />
      <Button {...args} disabled label="Disabled" />
      <Button {...args} fullWidth label="Full width" />
    </View>
  ),
};
