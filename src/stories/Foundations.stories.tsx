import type { Meta, StoryObj } from "@storybook/react-native";
import { ScrollView, View } from "react-native";

import { AppText } from "../components/AppText";
import { colors } from "../foundations/colors";
import { radii } from "../foundations/radii";
import { spacing } from "../foundations/spacing";
import { typography, type TypographyVariant } from "../foundations/typography";

const meta = {
  title: "01 Foundations",
  parameters: {
    previewLayout: "wide",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

function Swatch({ name, value }: { name: string; value: string }) {
  return (
    <View className="w-[160px] gap-xs">
      <View
        className="h-16 rounded-medium border border-border"
        style={{ backgroundColor: value }}
      />
      <AppText variant="caption">{name}</AppText>
      <AppText variant="caption" color="secondary">
        {value}
      </AppText>
    </View>
  );
}

export const Colors: Story = {
  name: "Colors",
  render: () => (
    <ScrollView contentContainerClassName="gap-xl px-lg py-xl">
      <AppText variant="heading1">Color</AppText>
      <AppText variant="body" color="secondary">
        Brand palettes stay named and literal. Components should prefer semantic
        theme values such as primary and canvas unless the UI must stay Maikaʻi.
      </AppText>

      <AppText variant="heading3">Foodland</AppText>
      <View className="flex-row flex-wrap gap-base">
        <Swatch name="foodlandGreen" value={colors.foodlandGreen} />
        <Swatch name="foodlandGreenDark" value={colors.foodlandGreenDark} />
        <Swatch name="foodlandGreenMid" value={colors.foodlandGreenMid} />
      </View>

      <AppText variant="heading3">Maikaʻi</AppText>
      <View className="flex-row flex-wrap gap-base">
        <Swatch name="maikaiTeal" value={colors.maikaiTeal} />
        <Swatch name="maikaiTealDeep" value={colors.maikaiTealDeep} />
        <Swatch name="maikaiTealDark" value={colors.maikaiTealDark} />
        <Swatch name="maikaiTealLight" value={colors.maikaiTealLight} />
        <Swatch name="maikaiLime" value={colors.maikaiLime} />
        <Swatch name="mint" value={colors.mint} />
      </View>

      <AppText variant="heading3">Surfaces</AppText>
      <View className="flex-row flex-wrap gap-base">
        <Swatch name="canvas" value={colors.canvas} />
        <Swatch name="surface" value={colors.surface} />
        <Swatch name="surfaceSubtle" value={colors.surfaceSubtle} />
      </View>

      <AppText variant="heading3">Text and borders</AppText>
      <View className="flex-row flex-wrap gap-base">
        <Swatch name="textPrimary" value={colors.textPrimary} />
        <Swatch name="textSecondary" value={colors.textSecondary} />
        <Swatch name="gray" value={colors.gray} />
        <Swatch name="border" value={colors.border} />
        <Swatch name="white" value={colors.white} />
      </View>

      <AppText variant="heading3">Feedback</AppText>
      <View className="flex-row flex-wrap gap-base">
        <Swatch name="error" value={colors.error} />
        <Swatch name="errorDark" value={colors.errorDark} />
        <Swatch name="warning" value={colors.warning} />
        <Swatch name="warningSurface" value={colors.warningSurface} />
        <Swatch name="highlightYellow" value={colors.highlightYellow} />
      </View>
    </ScrollView>
  ),
};

const typeSamples: { variant: TypographyVariant; sample: string }[] = [
  { variant: "display", sample: "Aloha, Keoni" },
  { variant: "heading1", sample: "Weekly favorites" },
  { variant: "heading2", sample: "1,240 Maikaʻi points" },
  { variant: "heading3", sample: "Rewards available" },
  { variant: "eyebrow", sample: "Foodland Hawaiʻi" },
  { variant: "body", sample: "Fresh groceries, local favorites, and weekly savings." },
  { variant: "bodySmall", sample: "Demo copy for product and design review only." },
  { variant: "button", sample: "Find a store" },
  { variant: "caption", sample: "Work Sans · 12/18" },
];

export const Typography: Story = {
  name: "Typography",
  render: () => (
    <ScrollView contentContainerClassName="gap-xl px-lg py-xl">
      <AppText variant="heading1">Typography</AppText>
      <AppText variant="body" color="secondary">
        Work Sans carries both the Foodland shopping voice and Maikaʻi rewards
        copy. Display and heading 1 stay light; buttons stay bold.
      </AppText>
      {typeSamples.map((item) => (
        <View key={item.variant} className="gap-xs border-b border-border pb-base">
          <AppText variant="caption" color="muted">
            {item.variant} · {typography[item.variant].fontFamily} ·{" "}
            {typography[item.variant].fontSize}/{typography[item.variant].lineHeight}
          </AppText>
          <AppText variant={item.variant}>{item.sample}</AppText>
        </View>
      ))}
    </ScrollView>
  ),
};

export const SpacingAndShape: Story = {
  name: "Spacing and Shape",
  render: () => (
    <ScrollView contentContainerClassName="gap-xl px-lg py-xl">
      <AppText variant="heading1">Spacing and shape</AppText>
      <AppText variant="body" color="secondary">
        Default screen padding is 24. Compact padding is 16. Section gaps are 32.
        Interactive targets stay at least 48 × 48.
      </AppText>

      <AppText variant="heading3">Spacing</AppText>
      {Object.entries(spacing).map(([name, value]) => (
        <View key={name} className="flex-row items-center gap-base">
          <View className="h-6 bg-primary" style={{ width: value }} />
          <AppText variant="caption">
            {name} · {value}px
          </AppText>
        </View>
      ))}

      <AppText variant="heading3">Radii</AppText>
      <View className="flex-row flex-wrap gap-base">
        {Object.entries(radii).map(([name, value]) => (
          <View key={name} className="items-center gap-xs">
            <View
              className="h-16 w-16 border border-border bg-surface"
              style={{ borderRadius: value }}
            />
            <AppText variant="caption">
              {name} · {value}
            </AppText>
          </View>
        ))}
      </View>

      <AppText variant="heading3">Touch target</AppText>
      <View className="h-[48px] w-[48px] items-center justify-center rounded-medium bg-primary">
        <AppText variant="caption" color="onPrimary">
          48
        </AppText>
      </View>
    </ScrollView>
  ),
};
