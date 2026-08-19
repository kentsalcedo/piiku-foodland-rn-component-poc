import { type ReactNode } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { cn } from "../../utils/cn";
import { Button, type ButtonProps } from "../Button";

export type StickyFooterProps = {
  children?: ReactNode;
  summary?: ReactNode;
  primaryAction?: ButtonProps;
  secondaryAction?: ButtonProps;
  safeArea?: boolean;
  className?: string;
};

export function StickyFooter({
  children,
  summary,
  primaryAction,
  secondaryAction,
  safeArea = true,
  className,
}: StickyFooterProps) {
  const insets = useSafeAreaInsets();
  const hasTwoActions = Boolean(primaryAction && secondaryAction);

  return (
    <View
      className={cn(
        "border-t border-border bg-surface px-lg pt-base",
        className,
      )}
      style={safeArea ? { paddingBottom: Math.max(insets.bottom, 16) } : undefined}
    >
      {summary ? <View className="mb-base">{summary}</View> : null}
      {children}
      {primaryAction ? (
        <View className={cn("gap-sm", hasTwoActions && "flex-row")}>
          {secondaryAction ? (
            <View className="flex-1">
              <Button {...secondaryAction} fullWidth />
            </View>
          ) : null}
          <View className={hasTwoActions ? "flex-1" : undefined}>
            <Button {...primaryAction} fullWidth />
          </View>
        </View>
      ) : null}
    </View>
  );
}
