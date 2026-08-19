export const colors = {
  // Foodland brand
  foodlandGreen: "#008443",
  foodlandGreenDark: "#2F673D",
  foodlandGreenMid: "#387746",

  // Maikaʻi loyalty brand
  maikaiTeal: "#00746F",
  maikaiTealDeep: "#006566",
  maikaiTealDark: "#1B4A4E",
  maikaiTealLight: "#A4BCBC",
  maikaiLime: "#9BC539",
  mint: "#92C7AD",

  // Surfaces
  canvas: "#F7F4EB",
  surface: "#FFFFFF",
  surfaceSubtle: "#F1F4F6",

  // Text and borders
  textPrimary: "#231F20",
  textSecondary: "#6C757D",
  gray: "#A2A2A2",
  border: "#CACACA",
  white: "#FFFFFF",

  // Feedback
  error: "#D92D20",
  errorDark: "#B42318",
  warning: "#F79009",
  warningSurface: "#FFFAEB",
  highlightYellow: "#FFEA82",
} as const;

export type ColorToken = keyof typeof colors;
