import type { Meta, StoryObj } from "@storybook/react-native";
import { ScrollView, View } from "react-native";

import { AppText } from "../components/AppText";
import { Card } from "../components/Card";

const statusItems = [
  { name: "AppText", note: "Typography variants ready for review" },
  { name: "Button", note: "Brand-aware actions with loading and disabled states" },
  { name: "TextInput", note: "Labeled fields with error and helper text" },
  { name: "HeaderNav", note: "Logo slot plus Foodland and Maikaʻi treatments" },
  { name: "Footer", note: "Data-driven links, no live routing" },
  { name: "StickyFooter", note: "Reusable checkout and confirmation bar" },
  { name: "Loader", note: "Theme-aware ActivityIndicator" },
  { name: "Card / Promo / Reward", note: "Image-forward merchandising and loyalty" },
];

const meta = {
  title: "00 Welcome/Overview",
  parameters: {
    previewLayout: "wide",
    docs: {
      description: {
        component:
          "A shared React Native design system for Foodland Hawaiʻi shopping and Maikaʻi rewards experiences.",
      },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: () => (
    <ScrollView contentContainerClassName="gap-xl px-lg py-xl">
      <View className="gap-sm">
        <AppText variant="eyebrow" color="brand">
          Foodland Hawaiʻi
        </AppText>
        <AppText variant="display">Mobile design system</AppText>
        <AppText variant="body" color="secondary">
          This library is a set of reusable screens and components for the
          Foodland Hawaiʻi mobile app. It is meant for product, marketing, and
          design review — not a live store, account, or rewards backend.
        </AppText>
      </View>

      <Card>
        <AppText variant="heading3">Who it is for</AppText>
        <AppText variant="body" color="secondary" className="mt-sm">
          Stakeholders can preview look, tone, and interaction states before
          engineering wires these pieces into the production app. Engineers can
          import the same components for iOS, Android, and web.
        </AppText>
      </Card>

      <Card>
        <AppText variant="heading3">How to review</AppText>
        <AppText variant="body" color="secondary" className="mt-sm">
          Use the Brand control in the toolbar to switch between Foodland green
          and Maikaʻi teal without reloading. Open Controls to try disabled,
          loading, error, and compact states. Reward cards keep the Maikaʻi
          identity even when the rest of the page is in the Foodland theme.
        </AppText>
      </Card>

      <View className="gap-sm">
        <AppText variant="heading3">Component status</AppText>
        <AppText variant="bodySmall" color="secondary">
          These are foundational stubs for visual review. They are not connected
          to APIs, authentication, or analytics.
        </AppText>
        {statusItems.map((item) => (
          <Card key={item.name} padded>
            <AppText variant="button">{item.name}</AppText>
            <AppText variant="bodySmall" color="secondary" className="mt-xs">
              {item.note}
            </AppText>
          </Card>
        ))}
      </View>
    </ScrollView>
  ),
};
