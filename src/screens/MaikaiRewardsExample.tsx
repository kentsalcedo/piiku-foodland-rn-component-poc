import { ScrollView, View } from "react-native";

import { AppText } from "../components/AppText";
import { RewardCard } from "../components/Card";
import { HeaderNav } from "../components/HeaderNav";
import { StickyFooter } from "../components/StickyFooter";
import { TreatIllustration } from "../examples/illustrations";

export function MaikaiRewardsExample() {
  const points = 1240;
  const nextRewardPoints = 1500;
  const progress = Math.min(points / nextRewardPoints, 1);

  return (
    <View className="flex-1 bg-canvas">
      <HeaderNav
        appearance="maikai"
        showBack
        title="Maikaʻi Rewards"
        subtitle="Demo membership"
      />
      <ScrollView
        className="flex-1"
        contentContainerClassName="gap-xl px-lg pb-xl pt-xl"
      >
        <View className="gap-sm rounded-large border border-maikai-teal-light bg-surface p-base">
          <AppText variant="eyebrow" className="text-maikai-teal-dark">
            Aloha, Keoni
          </AppText>
          <AppText variant="heading2" className="text-maikai-teal-dark">
            1,240 Maikaʻi points
          </AppText>
          <AppText variant="bodySmall" color="secondary">
            260 points to the next in-store treat.
          </AppText>
          <View
            accessibilityLabel="Progress toward next reward"
            accessibilityRole="progressbar"
            accessibilityValue={{
              min: 0,
              max: nextRewardPoints,
              now: points,
            }}
            className="h-3 overflow-hidden rounded-pill bg-surface-subtle"
          >
            <View
              className="h-full bg-maikai-lime"
              style={{ width: `${Math.round(progress * 100)}%` }}
            />
          </View>
        </View>

        <View className="gap-sm">
          <AppText variant="heading3">Rewards available</AppText>
          <AppText variant="bodySmall" color="secondary">
            Lime is used only as an accent on dark teal — never as a text
            background for white type.
          </AppText>
        </View>

        <RewardCard
          name="Bakery treat"
          points={1000}
          status="available"
          description="A fresh in-store pastry on your next visit."
          media={<TreatIllustration />}
        />
        <RewardCard
          name="Produce bag credit"
          points={1500}
          status="locked"
          description="Keep shopping to unlock this local produce credit."
          media={<TreatIllustration />}
        />
      </ScrollView>
      <StickyFooter
        summary={
          <View className="flex-row items-center justify-between">
            <AppText variant="caption" color="secondary">
              Ready to redeem
            </AppText>
            <AppText variant="button" className="text-maikai-teal-dark">
              Bakery treat
            </AppText>
          </View>
        }
        secondaryAction={{
          label: "Not now",
          variant: "secondary",
        }}
        primaryAction={{
          label: "Redeem reward",
          className: "bg-maikai-teal-deep active:bg-maikai-teal-dark",
        }}
      />
    </View>
  );
}
