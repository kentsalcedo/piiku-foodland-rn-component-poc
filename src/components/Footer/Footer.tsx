import { type ReactNode } from "react";
import { Pressable, View } from "react-native";

import { type BrandMode } from "../../foundations/themes";
import { useDesignSystem } from "../../providers/DesignSystemProvider";
import { cn } from "../../utils/cn";
import { AppText } from "../AppText";

export type FooterLink = {
  label: string;
  onPress?: () => void;
};

export type FooterProps = {
  brandSlot?: ReactNode;
  supportingText?: string;
  links?: FooterLink[];
  socialSlot?: ReactNode;
  copyright?: string;
  appearance?: BrandMode;
  className?: string;
};

export function Footer({
  brandSlot,
  supportingText = "Fresh groceries, local favorites, and weekly savings across Hawaiʻi.",
  links = [],
  socialSlot,
  copyright = "© Foodland Super Market, Ltd. Demo content only.",
  appearance,
  className,
}: FooterProps) {
  const { brand } = useDesignSystem();
  const resolvedAppearance = appearance ?? brand;
  const isMaikai = resolvedAppearance === "maikai";

  return (
    <View
      className={cn(
        "gap-lg border-t px-lg py-xl",
        isMaikai
          ? "border-maikai-teal-dark bg-maikai-teal-deep"
          : "border-border bg-surface",
        className,
      )}
    >
      {brandSlot ?? (
        <AppText
          variant="eyebrow"
          color={isMaikai ? "onPrimary" : "brand"}
          accessibilityLabel={
            isMaikai ? "Maikaʻi logo placeholder" : "Foodland logo placeholder"
          }
        >
          {isMaikai ? "MAIKAʻI" : "FOODLAND"}
        </AppText>
      )}

      <AppText variant="bodySmall" color={isMaikai ? "onPrimary" : "secondary"}>
        {supportingText}
      </AppText>

      {links.length > 0 ? (
        <View className="flex-row flex-wrap gap-base">
          {links.map((link) => (
            <Pressable
              key={link.label}
              accessibilityRole="link"
              accessibilityLabel={link.label}
              onPress={link.onPress}
              className="min-h-[48px] justify-center pr-sm"
            >
              <AppText
                variant="caption"
                color={isMaikai ? "onPrimary" : "brand"}
              >
                {link.label}
              </AppText>
            </Pressable>
          ))}
        </View>
      ) : null}

      {socialSlot}

      <AppText variant="caption" color={isMaikai ? "onPrimary" : "muted"}>
        {copyright}
      </AppText>
    </View>
  );
}
