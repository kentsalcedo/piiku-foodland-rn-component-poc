const jiti = require("jiti")(__filename);
const { colors } = jiti("./src/foundations/colors.ts");
const { spacing } = jiti("./src/foundations/spacing.ts");
const { radii } = jiti("./src/foundations/radii.ts");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        "primary-pressed": "var(--color-primary-pressed)",
        accent: "var(--color-accent)",
        "on-primary": "var(--color-on-primary)",
        canvas: "var(--color-canvas)",
        surface: "var(--color-surface)",
        "surface-subtle": "var(--color-surface-subtle)",
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        border: "var(--color-border)",
        error: "var(--color-error)",
        "foodland-green": colors.foodlandGreen,
        "foodland-green-dark": colors.foodlandGreenDark,
        "foodland-green-mid": colors.foodlandGreenMid,
        "maikai-teal": colors.maikaiTeal,
        "maikai-teal-deep": colors.maikaiTealDeep,
        "maikai-teal-dark": colors.maikaiTealDark,
        "maikai-teal-light": colors.maikaiTealLight,
        "maikai-lime": colors.maikaiLime,
        mint: colors.mint,
        gray: colors.gray,
        warning: colors.warning,
        "warning-surface": colors.warningSurface,
        "highlight-yellow": colors.highlightYellow,
        "error-dark": colors.errorDark,
      },
      spacing: {
        xs: `${spacing.xs}px`,
        sm: `${spacing.sm}px`,
        md: `${spacing.md}px`,
        base: `${spacing.base}px`,
        lg: `${spacing.lg}px`,
        xl: `${spacing.xl}px`,
        xxl: `${spacing.xxl}px`,
        section: `${spacing.section}px`,
      },
      borderRadius: {
        small: `${radii.small}px`,
        medium: `${radii.medium}px`,
        large: `${radii.large}px`,
        pill: `${radii.pill}px`,
      },
    },
  },
  plugins: [],
};
