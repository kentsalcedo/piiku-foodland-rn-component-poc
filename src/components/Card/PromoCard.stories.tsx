import type { Meta, StoryObj } from "@storybook/react-native";
import { View } from "react-native";
import { fn } from "storybook/test";

import { ProduceIllustration } from "../../examples/illustrations";
import { Button } from "../Button";
import { PromoCard } from "./PromoCard";

const meta = {
  title: "04 Content/PromoCard",
  component: PromoCard,
  args: {
    eyebrow: "Weekly favorites",
    heading: "Island-grown produce",
    supportingText: "A calm, image-forward card for offers, recipes, and store stories.",
    metadata: "In stores this week · Demo only",
    onPress: fn(),
  },
  parameters: {
    docs: {
      description: {
        component:
          "General shopping, recipes, or weekly offer card. Media can be an image source or custom content.",
      },
    },
  },
} satisfies Meta<typeof PromoCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    media: <ProduceIllustration />,
    action: <Button label="See the weekly ad" size="compact" onPress={fn()} />,
  },
};

export const Variants: Story = {
  render: (args) => (
    <View className="gap-lg p-lg">
      <PromoCard {...args} media={<ProduceIllustration />} />
      <PromoCard
        {...args}
        eyebrow="Recipes"
        heading="Weeknight poke bowl"
        supportingText="A short recipe prompt without photography."
      />
    </View>
  ),
};

export const FoodlandAndMaikai: Story = {
  name: "Foodland and Maikaʻi",
  args: {
    media: <ProduceIllustration />,
  },
};

export const AllVariants: Story = {
  render: Variants.render,
};
