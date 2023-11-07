import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeContextProvider, useTheme } from "../src/hooks/useTheme.jsx";
import { ThemeProvider } from "styled-components";

const ThemedWrap = ({ children }) => {
  const { theme } = useTheme();

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <ThemedWrap>
        <App />
      </ThemedWrap>
    </ThemeContextProvider>
  </React.StrictMode>
);
