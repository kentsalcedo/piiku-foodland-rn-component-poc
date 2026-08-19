import { colors } from "./colors";

export type BrandMode = "foodland" | "maikai";

export type SemanticTheme = {
  primary: string;
  primaryPressed: string;
  accent: string;
  onPrimary: string;
  canvas: string;
  surface: string;
  surfaceSubtle: string;
  textPrimary: string;
  textSecondary: string;
  border: string;
  error: string;
};

export type ThemeOverrides = Partial<SemanticTheme>;

export const foodlandTheme: SemanticTheme = {
  primary: colors.foodlandGreen,
  primaryPressed: colors.foodlandGreenDark,
  accent: colors.foodlandGreenMid,
  onPrimary: colors.white,
  canvas: colors.canvas,
  surface: colors.surface,
  surfaceSubtle: colors.surfaceSubtle,
  textPrimary: colors.textPrimary,
  textSecondary: colors.textSecondary,
  border: colors.border,
  error: colors.error,
};

export const maikaiTheme: SemanticTheme = {
  primary: colors.maikaiTealDeep,
  primaryPressed: colors.maikaiTealDark,
  accent: colors.maikaiLime,
  onPrimary: colors.white,
  canvas: colors.canvas,
  surface: colors.surface,
  surfaceSubtle: colors.surfaceSubtle,
  textPrimary: colors.textPrimary,
  textSecondary: colors.textSecondary,
  border: colors.border,
  error: colors.error,
};

export const themes: Record<BrandMode, SemanticTheme> = {
  foodland: foodlandTheme,
  maikai: maikaiTheme,
};

export function resolveTheme(
  brand: BrandMode,
  overrides?: ThemeOverrides,
): SemanticTheme {
  return {
    ...themes[brand],
    ...overrides,
  };
}

export function themeToCssVars(theme: SemanticTheme) {
  return {
    "--color-primary": theme.primary,
    "--color-primary-pressed": theme.primaryPressed,
    "--color-accent": theme.accent,
    "--color-on-primary": theme.onPrimary,
    "--color-canvas": theme.canvas,
    "--color-surface": theme.surface,
    "--color-surface-subtle": theme.surfaceSubtle,
    "--color-text-primary": theme.textPrimary,
    "--color-text-secondary": theme.textSecondary,
    "--color-border": theme.border,
    "--color-error": theme.error,
  } as const;
}
