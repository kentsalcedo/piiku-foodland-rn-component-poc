import {
  forwardRef,
  useId,
  useState,
  type ReactNode,
} from "react";
import {
  TextInput as RNTextInput,
  View,
  type TextInputProps as RNTextInputProps,
} from "react-native";

import { colors } from "../../foundations/colors";
import { cn } from "../../utils/cn";
import { AppText } from "../AppText";

export type TextInputProps = Omit<
  RNTextInputProps,
  "editable" | "onChangeText" | "value" | "className"
> & {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  required?: boolean;
  disabled?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
  leading?: ReactNode;
  trailing?: ReactNode;
  className?: string;
};

export const TextInput = forwardRef<RNTextInput, TextInputProps>(
  function TextInput(
    {
      label,
      helperText,
      errorMessage,
      required = false,
      disabled = false,
      value,
      onChangeText,
      leading,
      trailing,
      className,
      placeholder,
      secureTextEntry,
      multiline,
      accessibilityLabel,
      accessibilityHint,
      onFocus,
      onBlur,
      ...rest
    },
    ref,
  ) {
    const generatedId = useId();
    const inputId = rest.nativeID ?? generatedId;
    const [focused, setFocused] = useState(false);
    const hasError = Boolean(errorMessage);
    const filled = Boolean(value && value.length > 0);

    return (
      <View className={cn("w-full gap-xs", className)}>
        {label ? (
          <AppText
            nativeID={`${inputId}-label`}
            variant="caption"
            color="secondary"
          >
            {label}
            {required ? (
              <AppText variant="caption" color="error">
                {" "}
                *
              </AppText>
            ) : null}
          </AppText>
        ) : null}

        <View
          className={cn(
            "min-h-[48px] flex-row items-center rounded-medium border bg-surface px-base",
            multiline && "items-start py-md",
            disabled && "bg-surface-subtle",
            hasError
              ? "border-error"
              : focused
                ? "border-primary"
                : "border-border",
          )}
        >
          {leading ? <View className="mr-sm">{leading}</View> : null}
          <RNTextInput
            {...rest}
            ref={ref}
            nativeID={inputId}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={colors.gray}
            editable={!disabled}
            secureTextEntry={secureTextEntry}
            multiline={multiline}
            accessibilityLabel={accessibilityLabel ?? label}
            accessibilityHint={accessibilityHint ?? helperText}
            accessibilityState={{ disabled }}
            aria-labelledby={label ? `${inputId}-label` : undefined}
            aria-required={required}
            aria-invalid={hasError}
            onFocus={(event) => {
              setFocused(true);
              onFocus?.(event);
            }}
            onBlur={(event) => {
              setFocused(false);
              onBlur?.(event);
            }}
            className={cn(
              "flex-1 py-md text-base text-text-primary",
              multiline && "min-h-[96px]",
              disabled && "text-text-secondary",
              filled && !hasError && "text-text-primary",
            )}
            style={{
              fontFamily: "WorkSans_400Regular",
              fontSize: 16,
              lineHeight: 24,
            }}
          />
          {trailing ? <View className="ml-sm">{trailing}</View> : null}
        </View>

        {hasError ? (
          <AppText variant="caption" color="error" accessibilityLiveRegion="polite">
            {errorMessage}
          </AppText>
        ) : helperText ? (
          <AppText variant="caption" color="secondary">
            {helperText}
          </AppText>
        ) : null}
      </View>
    );
  },
);
