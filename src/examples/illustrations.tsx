import { View } from "react-native";

import { AppText } from "../components/AppText";

export function ProduceIllustration() {
  return (
    <View
      accessibilityLabel="Illustrated produce placeholder"
      className="h-[160px] w-full items-center justify-center bg-mint"
    >
      <View className="h-16 w-16 rounded-large bg-foodland-green" />
      <View className="mt-sm h-4 w-24 rounded-pill bg-foodland-green-dark" />
      <AppText variant="caption" className="mt-sm text-foodland-green-dark">
        Produce story
      </AppText>
    </View>
  );
}

export function TreatIllustration() {
  return (
    <View
      accessibilityLabel="Illustrated reward placeholder"
      className="h-[140px] w-full items-center justify-center bg-maikai-teal-deep"
    >
      <View className="h-14 w-14 rounded-large bg-maikai-lime" />
      <View className="mt-sm h-4 w-20 rounded-pill bg-maikai-teal-light" />
      <AppText variant="caption" color="onPrimary" className="mt-sm">
        Reward story
      </AppText>
    </View>
  );
}
