import { type ReactNode } from "react";
import {
  ActivityIndicator,
  Pressable,
  View,
  type GestureResponderEvent,
  type PressableProps,
} from "react-native";

import { colors } from "../../foundations/colors";
import { useDesignSystem } from "../../providers/DesignSystemProvider";
import { cn } from "../../utils/cn";
import { AppText } from "../AppText";

export type ButtonVariant = "primary" | "secondary" | "inverse" | "destructive";
export type ButtonSize = "default" | "compact";

export type ButtonProps = Omit<PressableProps, "children" | "disabled"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  label: string;
  accessibilityHint?: string;
  leading?: ReactNode;
  trailing?: ReactNode;
  className?: string;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-primary active:bg-primary-pressed",
  secondary: "bg-surface border border-border active:bg-surface-subtle",
  inverse: "bg-canvas active:bg-surface-subtle",
  destructive: "bg-error active:bg-error-dark",
};

const labelColor: Record<ButtonVariant, "onPrimary" | "brand" | "inverse"> = {
  primary: "onPrimary",
  secondary: "brand",
  inverse: "inverse",
  destructive: "onPrimary",
};

export function Button({
  variant = "primary",
  size = "default",
  fullWidth = false,
  loading = false,
  disabled = false,
  label,
  accessibilityHint,
  accessibilityLabel,
  leading,
  trailing,
  className,
  onPress,
  ...rest
}: ButtonProps) {
  const { theme } = useDesignSystem();
  const isDisabled = disabled || loading;
  const indicatorColor =
    variant === "secondary"
      ? theme.primary
      : variant === "inverse"
        ? colors.maikaiTealDark
        : colors.white;

  const handlePress = (event: GestureResponderEvent) => {
    if (isDisabled) {
      return;
    }

    onPress?.(event);
  };

  return (
    <Pressable
      {...rest}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? label}
      accessibilityHint={accessibilityHint}
      accessibilityState={{ disabled: isDisabled, busy: loading }}
      disabled={isDisabled}
      onPress={handlePress}
      className={cn(
        "flex-row items-center justify-center rounded-medium px-lg",
        size === "default" ? "min-h-[50px]" : "min-h-[48px] px-[22px]",
        "min-w-[48px]",
        fullWidth && "w-full self-stretch",
        isDisabled ? "bg-surface-subtle" : variantClasses[variant],
        className,
      )}
    >
      {loading ? (
        <ActivityIndicator
          accessibilityLabel="Loading"
          color={isDisabled ? colors.gray : indicatorColor}
        />
      ) : (
        <View className="flex-row items-center justify-center gap-sm">
          {leading}
          <AppText
            variant="button"
            color={isDisabled ? "muted" : labelColor[variant]}
          >
            {label}
          </AppText>
          {trailing}
        </View>
      )}
    </Pressable>
  );
}
