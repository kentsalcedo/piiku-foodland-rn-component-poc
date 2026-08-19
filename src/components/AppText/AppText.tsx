import {
  Text,
  type TextProps,
  type TextStyle,
} from "react-native";

import {
  typography,
  type TypographyVariant,
} from "../../foundations/typography";
import { cn } from "../../utils/cn";

export type AppTextColor =
  | "primary"
  | "secondary"
  | "brand"
  | "onPrimary"
  | "error"
  | "inverse"
  | "accent"
  | "muted";

export type AppTextProps = TextProps & {
  variant?: TypographyVariant;
  color?: AppTextColor;
  className?: string;
};

const colorClasses: Record<AppTextColor, string> = {
  primary: "text-text-primary",
  secondary: "text-text-secondary",
  brand: "text-primary",
  onPrimary: "text-on-primary",
  error: "text-error",
  inverse: "text-maikai-teal-dark",
  accent: "text-accent",
  muted: "text-gray",
};

export function AppText({
  variant = "body",
  color = "primary",
  className,
  style,
  children,
  ...rest
}: AppTextProps) {
  const tokenStyle = typography[variant] as TextStyle;

  return (
    <Text
      {...rest}
      className={cn(colorClasses[color], className)}
      style={[tokenStyle, style]}
    >
      {children}
    </Text>
  );
}
