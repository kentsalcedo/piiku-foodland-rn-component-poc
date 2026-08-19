import { type ReactNode } from "react";
import {
  Image,
  View,
  type ImageSourcePropType,
} from "react-native";

import { cn } from "../../utils/cn";
import { AppText } from "../AppText";
import { Button } from "../Button";
import { Card } from "./Card";

export type RewardStatus = "available" | "locked" | "redeemed";

export type RewardCardProps = {
  name: string;
  points: number;
  status?: RewardStatus;
  statusLabel?: string;
  description?: string;
  media?: ReactNode;
  source?: ImageSourcePropType;
  onRedeem?: () => void;
  redeemLabel?: string;
  className?: string;
  accessibilityLabel?: string;
};

const statusCopy: Record<RewardStatus, string> = {
  available: "Available",
  locked: "Keep earning",
  redeemed: "Redeemed",
};

export function RewardCard({
  name,
  points,
  status = "available",
  statusLabel,
  description,
  media,
  source,
  onRedeem,
  redeemLabel = "Redeem",
  className,
  accessibilityLabel,
}: RewardCardProps) {
  const formattedPoints = `${points.toLocaleString("en-US")} pts`;
  const resolvedStatus = statusLabel ?? statusCopy[status];

  return (
    <Card
      padded={false}
      accessibilityLabel={
        accessibilityLabel ?? `${name}, ${formattedPoints}, ${resolvedStatus}`
      }
      className={cn("border-maikai-teal-light", className)}
    >
      {media ??
        (source ? (
          <Image
            source={source}
            accessibilityIgnoresInvertColors
            className="h-[140px] w-full bg-maikai-teal-deep"
            resizeMode="cover"
          />
        ) : null)}
      <View className="gap-sm p-base">
        <View className="flex-row items-center justify-between">
          <AppText variant="eyebrow" className="text-maikai-teal-dark">
            Maikaʻi reward
          </AppText>
          <View className="rounded-medium bg-maikai-lime px-sm py-xs">
            <AppText variant="caption" className="text-maikai-teal-dark">
              {formattedPoints}
            </AppText>
          </View>
        </View>
        <AppText variant="heading3" className="text-maikai-teal-dark">
          {name}
        </AppText>
        {description ? (
          <AppText variant="bodySmall" color="secondary">
            {description}
          </AppText>
        ) : null}
        <AppText variant="caption" className="text-maikai-teal">
          {resolvedStatus}
        </AppText>
        {status === "available" && onRedeem ? (
          <Button
            label={redeemLabel}
            onPress={onRedeem}
            className="bg-maikai-teal-deep active:bg-maikai-teal-dark"
          />
        ) : null}
      </View>
    </Card>
  );
}
