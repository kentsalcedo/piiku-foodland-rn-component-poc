import { ScrollView, View } from "react-native";

import { AppText } from "../components/AppText";
import { Button } from "../components/Button";
import { PromoCard } from "../components/Card";
import { HeaderNav } from "../components/HeaderNav";
import { Loader } from "../components/Loader";
import { TextInput } from "../components/TextInput";
import { useDesignSystem } from "../providers/DesignSystemProvider";
import { ProduceIllustration } from "../examples/illustrations";

export function DesignSystemShowcase() {
  const { brand } = useDesignSystem();

  return (
    <View className="flex-1 bg-canvas">
      <HeaderNav
        showMenu
        subtitle={brand === "maikai" ? "Rewards preview" : "Design system preview"}
      />
      <ScrollView
        className="flex-1"
        contentContainerClassName="gap-xl px-lg pb-section pt-xl"
      >
        <View className="gap-sm">
          <AppText variant="eyebrow" color="brand">
            Foodland Hawaiʻi
          </AppText>
          <AppText variant="heading1">Mobile design system</AppText>
          <AppText variant="body" color="secondary">
            Foundational components for shopping, stores, recipes, and Maikaʻi
            rewards. Switch the brand in Storybook to preview both identities.
          </AppText>
        </View>

        <PromoCard
          eyebrow="Weekly favorites"
          heading="Island-grown produce"
          supportingText="A calm, image-forward card for offers, recipes, and store stories."
          metadata="Demo content"
          media={<ProduceIllustration />}
          action={<Button label="Browse deals" size="compact" />}
        />

        <TextInput
          label="Search the store"
          placeholder="Try poke, papaya, or poi"
          helperText="Example field. No live search is connected."
        />

        <View className="gap-sm">
          <Button label="Primary action" fullWidth />
          <Button label="Secondary action" variant="secondary" fullWidth />
        </View>

        <Loader label="Loading sample content" />
      </ScrollView>
    </View>
  );
}
