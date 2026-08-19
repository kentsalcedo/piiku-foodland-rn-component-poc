import "react-native";

declare module "@storybook/react-native" {
  interface Parameters {
    previewLayout?: "wide" | "mobile";
  }
}
