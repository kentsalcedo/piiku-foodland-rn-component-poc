import { type ReactNode } from "react";
import { Pressable, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { type BrandMode } from "../../foundations/themes";
import { useDesignSystem } from "../../providers/DesignSystemProvider";
import { cn } from "../../utils/cn";
import { AppText } from "../AppText";

export type HeaderNavProps = {
  logo?: ReactNode;
  title?: string;
  subtitle?: string;
  appearance?: BrandMode;
  showBack?: boolean;
  showMenu?: boolean;
  onBackPress?: () => void;
  onMenuPress?: () => void;
  rightAction?: ReactNode;
  onRightPress?: () => void;
  safeArea?: boolean;
  className?: string;
};

function MenuIcon({ inverse }: { inverse: boolean }) {
  const barClass = inverse ? "bg-white" : "bg-on-primary";

  return (
    <View className="h-4 w-5 justify-between" accessibilityElementsHidden>
      <View className={cn("h-[2px] w-full rounded-pill", barClass)} />
      <View className={cn("h-[2px] w-full rounded-pill", barClass)} />
      <View className={cn("h-[2px] w-full rounded-pill", barClass)} />
    </View>
  );
}

export function HeaderNav({
  logo,
  title,
  subtitle,
  appearance,
  showBack = false,
  showMenu = false,
  onBackPress,
  onMenuPress,
  rightAction,
  onRightPress,
  safeArea = true,
  className,
}: HeaderNavProps) {
  const insets = useSafeAreaInsets();
  const { brand } = useDesignSystem();
  const resolvedAppearance = appearance ?? brand;
  const isMaikai = resolvedAppearance === "maikai";

  return (
    <View
      className={cn(
        isMaikai ? "bg-maikai-teal-deep" : "bg-primary",
        className,
      )}
      style={safeArea ? { paddingTop: insets.top } : undefined}
    >
      <View className="min-h-[56px] flex-row items-center px-base py-sm">
        {showBack ? (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Go back"
            onPress={onBackPress}
            className="min-h-[48px] min-w-[48px] items-center justify-center"
          >
            <AppText variant="heading3" color="onPrimary">
              ‹
            </AppText>
          </Pressable>
        ) : showMenu ? (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Open menu"
            onPress={onMenuPress}
            className="min-h-[48px] min-w-[48px] items-center justify-center"
          >
            <MenuIcon inverse />
          </Pressable>
        ) : (
          <View className="min-w-[48px]" />
        )}

        <View className="flex-1 items-center px-sm">
          {logo ?? (
            <View accessibilityRole="header">
              <AppText
                variant="eyebrow"
                color="onPrimary"
                accessibilityLabel={
                  isMaikai
                    ? "Maikaʻi logo placeholder"
                    : "Foodland logo placeholder"
                }
              >
                {isMaikai ? "MAIKAʻI" : "FOODLAND"}
              </AppText>
            </View>
          )}
          {title ? (
            <AppText variant="heading3" color="onPrimary" className="text-center">
              {title}
            </AppText>
          ) : null}
          {subtitle ? (
            <AppText
              variant="caption"
              color="onPrimary"
              className="text-center opacity-90"
            >
              {subtitle}
            </AppText>
          ) : null}
        </View>

        {rightAction ? (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Header action"
            onPress={onRightPress}
            className="min-h-[48px] min-w-[48px] items-center justify-center"
          >
            {rightAction}
          </Pressable>
        ) : (
          <View className="min-w-[48px]" />
        )}
      </View>
    </View>
  );
}
