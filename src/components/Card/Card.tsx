import { type ReactNode } from "react";
import { Pressable, View, type PressableProps } from "react-native";

import { cn } from "../../utils/cn";

export type CardProps = PressableProps & {
  children?: ReactNode;
  className?: string;
  padded?: boolean;
};

export function Card({
  children,
  className,
  padded = true,
  disabled,
  onPress,
  accessibilityLabel,
  ...rest
}: CardProps) {
  const content = (
    <View
      className={cn(
        "overflow-hidden rounded-large border border-border bg-surface",
        padded && "p-base",
        className,
      )}
    >
      {children}
    </View>
  );

  if (!onPress) {
    return content;
  }

  return (
    <Pressable
      {...rest}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      disabled={disabled}
      onPress={onPress}
      className="active:opacity-95"
    >
      {content}
    </Pressable>
  );
}
