import { addons } from "storybook/manager-api";
import { create } from "storybook/theming";

addons.setConfig({
  theme: create({
    base: "light",
    brandTitle: "Foodland Hawaiʻi Mobile Design System",
    brandUrl: "./",
    colorPrimary: "#008443",
    colorSecondary: "#008443",
    appBg: "#F7F4EB",
    appContentBg: "#FFFFFF",
    appBorderColor: "#CACACA",
    appBorderRadius: 8,
    barBg: "#FFFFFF",
    barTextColor: "#231F20",
    barSelectedColor: "#008443",
    textColor: "#231F20",
    textInverseColor: "#FFFFFF",
    fontBase:
      '"Work Sans", "WorkSans_400Regular", ui-sans-serif, system-ui, sans-serif',
  }),
});
