import { useFonts } from "expo-font";
import { vars } from "nativewind";
import {
  createContext,
  useContext,
  useMemo,
  type PropsWithChildren,
} from "react";
import { ActivityIndicator, View } from "react-native";

import {
  resolveTheme,
  themeToCssVars,
  type BrandMode,
  type SemanticTheme,
  type ThemeOverrides,
} from "../foundations/themes";
import { cn } from "../utils/cn";
import {
  WorkSans_300Light,
  WorkSans_400Regular,
  WorkSans_500Medium,
  WorkSans_600SemiBold,
  WorkSans_700Bold,
} from "./workSansFonts";

export type DesignSystemContextValue = {
  brand: BrandMode;
  theme: SemanticTheme;
};

const DesignSystemContext = createContext<DesignSystemContextValue | null>(
  null,
);

export type DesignSystemProviderProps = PropsWithChildren<{
  brand?: BrandMode;
  tokens?: ThemeOverrides;
  className?: string;
}>;

export function DesignSystemProvider({
  brand = "foodland",
  tokens,
  className,
  children,
}: DesignSystemProviderProps) {
  const [fontsLoaded] = useFonts({
    WorkSans_300Light,
    WorkSans_400Regular,
    WorkSans_500Medium,
    WorkSans_600SemiBold,
    WorkSans_700Bold,
  });

  const theme = useMemo(
    () => resolveTheme(brand, tokens),
    [brand, tokens],
  );

  const value = useMemo(
    () => ({
      brand,
      theme,
    }),
    [brand, theme],
  );

  if (!fontsLoaded) {
    return (
      <View className="flex-1 items-center justify-center bg-canvas">
        <ActivityIndicator
          accessibilityLabel="Loading fonts"
          color={theme.primary}
        />
      </View>
    );
  }

  return (
    <DesignSystemContext.Provider value={value}>
      <View
        className={cn("flex-1 bg-canvas", className)}
        style={vars(themeToCssVars(theme))}
      >
        {children}
      </View>
    </DesignSystemContext.Provider>
  );
}

export function useDesignSystem(): DesignSystemContextValue {
  const context = useContext(DesignSystemContext);

  if (!context) {
    throw new Error(
      "useDesignSystem must be used within a DesignSystemProvider.",
    );
  }

  return context;
}
