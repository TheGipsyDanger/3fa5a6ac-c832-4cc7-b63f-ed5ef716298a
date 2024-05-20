import * as React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { withChildren } from "@/utils";

export const theme = {
  fontSizes: {
    small: 12,
    default: 14,
    big: 20,
    large: 24,
  },
  colors: {
    transparent: "transparent",
    black: "#000000",
    white: "#FFFFFF",
  },
};

export type IColors = typeof theme.colors;
export type IFontSizes = typeof theme.fontSizes;

export const ThemeProvider = ({ children }: withChildren) => (
  <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
);
