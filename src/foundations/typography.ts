export const typography = {
  display: {
    fontFamily: "WorkSans_300Light",
    fontSize: 40,
    lineHeight: 48,
  },
  heading1: {
    fontFamily: "WorkSans_300Light",
    fontSize: 32,
    lineHeight: 40,
  },
  heading2: {
    fontFamily: "WorkSans_400Regular",
    fontSize: 26,
    lineHeight: 34,
  },
  heading3: {
    fontFamily: "WorkSans_500Medium",
    fontSize: 20,
    lineHeight: 28,
  },
  eyebrow: {
    fontFamily: "WorkSans_500Medium",
    fontSize: 13,
    lineHeight: 20,
    letterSpacing: 0.5,
    textTransform: "uppercase" as const,
  },
  body: {
    fontFamily: "WorkSans_400Regular",
    fontSize: 16,
    lineHeight: 26,
  },
  bodySmall: {
    fontFamily: "WorkSans_400Regular",
    fontSize: 14,
    lineHeight: 21,
  },
  button: {
    fontFamily: "WorkSans_700Bold",
    fontSize: 16,
    lineHeight: 24,
  },
  caption: {
    fontFamily: "WorkSans_500Medium",
    fontSize: 12,
    lineHeight: 18,
  },
} as const;

export type TypographyVariant = keyof typeof typography;
