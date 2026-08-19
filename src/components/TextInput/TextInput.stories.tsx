import type { Meta, StoryObj } from "@storybook/react-native";
import { View } from "react-native";
import { fn } from "storybook/test";

import { TextInput } from "./TextInput";

const meta = {
  title: "02 Components/TextInput",
  component: TextInput,
  args: {
    label: "Search",
    placeholder: "Try poke, papaya, or poi",
    onChangeText: fn(),
  },
  parameters: {
    docs: {
      description: {
        component:
          "White input surface with a visible focus and error treatment. Labels stay associated for accessibility.",
      },
    },
  },
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Filled: Story = {
  args: {
    value: "Weekly ad",
  },
};

export const Helper: Story = {
  args: {
    helperText: "Example field. No live search is connected.",
  },
};

export const Error: Story = {
  args: {
    value: " ",
    errorMessage: "Enter a search term to continue.",
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "Stores near you",
  },
};

export const Secure: Story = {
  args: {
    label: "Password",
    placeholder: "Enter a password",
    secureTextEntry: true,
  },
};

export const Multiline: Story = {
  args: {
    label: "Notes",
    placeholder: "Add a note for pickup",
    multiline: true,
  },
};

export const AllVariants: Story = {
  render: (args) => (
    <View className="gap-lg p-lg">
      <TextInput {...args} />
      <TextInput {...args} value="Papaya" helperText="Filled state" />
      <TextInput {...args} errorMessage="This field is required." required />
      <TextInput {...args} disabled value="Disabled" />
      <TextInput {...args} multiline label="Notes" placeholder="Pickup notes" />
    </View>
  ),
};
