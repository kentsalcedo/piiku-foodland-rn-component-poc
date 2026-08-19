import { type ReactNode } from "react";
import {
  Image,
  View,
  type ImageSourcePropType,
} from "react-native";

import { cn } from "../../utils/cn";
import { AppText } from "../AppText";
import { Card } from "./Card";

export type PromoCardProps = {
  eyebrow?: string;
  heading: string;
  supportingText?: string;
  metadata?: string;
  action?: ReactNode;
  footer?: ReactNode;
  media?: ReactNode;
  source?: ImageSourcePropType;
  onPress?: () => void;
  className?: string;
  accessibilityLabel?: string;
};

export function PromoCard({
  eyebrow,
  heading,
  supportingText,
  metadata,
  action,
  footer,
  media,
  source,
  onPress,
  className,
  accessibilityLabel,
}: PromoCardProps) {
  return (
    <Card
      padded={false}
      onPress={onPress}
      accessibilityLabel={accessibilityLabel ?? heading}
      className={cn("gap-0", className)}
    >
      {media ??
        (source ? (
          <Image
            source={source}
            accessibilityIgnoresInvertColors
            className="h-[160px] w-full bg-surface-subtle"
            resizeMode="cover"
          />
        ) : null)}
      <View className="gap-xs p-base">
        {eyebrow ? (
          <AppText variant="eyebrow" color="brand">
            {eyebrow}
          </AppText>
        ) : null}
        <AppText variant="heading3">{heading}</AppText>
        {supportingText ? (
          <AppText variant="bodySmall" color="secondary">
            {supportingText}
          </AppText>
        ) : null}
        {metadata ? (
          <AppText variant="caption" color="muted">
            {metadata}
          </AppText>
        ) : null}
        {action ? <View className="mt-sm">{action}</View> : null}
        {footer}
      </View>
    </Card>
  );
}
