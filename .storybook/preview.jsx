import React from "react";

import { ThemeProvider } from "styled-components";
import { ThemeContextProvider, useTheme } from "../src/hooks/useTheme";
import DarkModeToggle from "./DarkModeToggle";

const ThemedWrap = ({ children }) => {
  const { theme, toggleMode } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <DarkModeToggle onClick={() => toggleMode()} />
      {children}
    </ThemeProvider>
  );
};

export default {
  decorators: [
    (Story) => (
      <ThemeContextProvider>
        <ThemedWrap>
          <Story />
        </ThemedWrap>
      </ThemeContextProvider>
    ),
  ],
};
