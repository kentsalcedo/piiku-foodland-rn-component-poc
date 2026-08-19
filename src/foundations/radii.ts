export const radii = {
  small: 4,
  medium: 8,
  large: 16,
  pill: 999,
} as const;

export type RadiusToken = keyof typeof radii;
