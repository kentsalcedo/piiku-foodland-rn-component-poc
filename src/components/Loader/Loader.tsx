import { ActivityIndicator, View } from "react-native";

import { colors } from "../../foundations/colors";
import { useDesignSystem } from "../../providers/DesignSystemProvider";
import { cn } from "../../utils/cn";
import { AppText } from "../AppText";

export type LoaderSize = "small" | "medium" | "large";
export type LoaderMode = "inline" | "fullscreen";
export type LoaderAppearance = "light" | "inverse";

export type LoaderProps = {
  size?: LoaderSize;
  mode?: LoaderMode;
  label?: string;
  appearance?: LoaderAppearance;
  className?: string;
};

const nativeSize: Record<LoaderSize, number | "small" | "large"> = {
  small: "small",
  medium: 28,
  large: "large",
};

export function Loader({
  size = "medium",
  mode = "inline",
  label = "Loading",
  appearance = "light",
  className,
}: LoaderProps) {
  const { theme } = useDesignSystem();
  const isInverse = appearance === "inverse";
  const color = isInverse ? colors.white : theme.primary;

  const content = (
    <View className="items-center justify-center gap-sm">
      <ActivityIndicator
        accessibilityLabel={label}
        color={color}
        size={nativeSize[size]}
      />
      {label ? (
        <AppText
          variant="caption"
          color={isInverse ? "onPrimary" : "secondary"}
        >
          {label}
        </AppText>
      ) : null}
    </View>
  );

  if (mode === "fullscreen") {
    return (
      <View
        className={cn(
          "flex-1 items-center justify-center",
          isInverse ? "bg-primary" : "bg-canvas",
          className,
        )}
        accessibilityRole="progressbar"
        accessibilityLabel={label}
      >
        {content}
      </View>
    );
  }

  return (
    <View
      className={cn("items-center justify-center p-base", className)}
      accessibilityRole="progressbar"
      accessibilityLabel={label}
    >
      {content}
    </View>
  );
}
