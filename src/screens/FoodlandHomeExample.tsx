import { useState } from "react";
import { ScrollView, View } from "react-native";

import { AppText } from "../components/AppText";
import { Button } from "../components/Button";
import { PromoCard } from "../components/Card";
import { Footer } from "../components/Footer";
import { HeaderNav } from "../components/HeaderNav";
import { TextInput } from "../components/TextInput";
import { ProduceIllustration } from "../examples/illustrations";

const demoLinks = [
  { label: "Stores" },
  { label: "Weekly Ad" },
  { label: "Recipes" },
  { label: "Maikaʻi Rewards" },
  { label: "Help" },
];

export function FoodlandHomeExample() {
  const [query, setQuery] = useState("");

  return (
    <View className="flex-1 bg-canvas">
      <HeaderNav showMenu appearance="foodland" />
      <ScrollView
        className="flex-1"
        contentContainerClassName="gap-xl pb-section"
      >
        <View className="gap-sm px-lg pt-xl">
          <AppText variant="eyebrow" color="brand">
            Aloha, Keoni
          </AppText>
          <AppText variant="heading1">What are we cooking this week?</AppText>
          <AppText variant="body" color="secondary">
            Fresh groceries, local favorites, and this week’s ad — ready when
            you are.
          </AppText>
        </View>

        <View className="px-lg">
          <TextInput
            label="Search"
            placeholder="Search produce, poke, or pantry"
            value={query}
            onChangeText={setQuery}
          />
        </View>

        <View className="px-lg">
          <PromoCard
            eyebrow="Weekly favorites"
            heading="Island citrus and herbs"
            supportingText="Build a simple weeknight plate with limes, basil, and fresh catch."
            metadata="In stores this week · Demo only"
            media={<ProduceIllustration />}
            action={<Button label="See the weekly ad" size="compact" />}
          />
        </View>

        <View className="px-lg">
          <Button label="Find a store" fullWidth />
        </View>

        <Footer links={demoLinks} />
      </ScrollView>
    </View>
  );
}
