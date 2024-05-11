import { ThemeProvider } from "styled-components";

import { lightTheme } from "../src/theme/lightTheme";

const withThemeProvider = (component) => (
  <ThemeProvider theme={lightTheme}>{component}</ThemeProvider>
);

export default withThemeProvider;
