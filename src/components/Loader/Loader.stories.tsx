import type { Meta, StoryObj } from "@storybook/react-native";
import { View } from "react-native";

import { Loader } from "./Loader";

const meta = {
  title: "05 Feedback/Loader",
  component: Loader,
  args: {
    label: "Loading",
    size: "medium",
    mode: "inline",
    appearance: "light",
  },
  argTypes: {
    size: { control: "select", options: ["small", "medium", "large"] },
    mode: { control: "select", options: ["inline", "fullscreen"] },
    appearance: { control: "select", options: ["light", "inverse"] },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Theme-aware loading indicator. Inverse sits on the brand primary surface.",
      },
    },
  },
} satisfies Meta<typeof Loader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: (args) => (
    <View className="flex-row items-end justify-around p-lg">
      <Loader {...args} size="small" label="Small" />
      <Loader {...args} size="medium" label="Medium" />
      <Loader {...args} size="large" label="Large" />
    </View>
  ),
};

export const Fullscreen: Story = {
  args: {
    mode: "fullscreen",
    label: "Loading your list",
  },
  decorators: [
    (Story) => (
      <View className="h-[420px]">
        <Story />
      </View>
    ),
  ],
};

export const Inverse: Story = {
  args: {
    appearance: "inverse",
    mode: "fullscreen",
    label: "Updating rewards",
  },
  decorators: [
    (Story) => (
      <View className="h-[420px]">
        <Story />
      </View>
    ),
  ],
};

export const AllVariants: Story = {
  render: (args) => (
    <View className="gap-lg p-lg">
      <Loader {...args} size="small" />
      <Loader {...args} size="medium" />
      <Loader {...args} size="large" />
    </View>
  ),
};
