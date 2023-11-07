import React, { useContext, useEffect, useState } from "react";
import { lightTheme } from "../theme/lightTheme";
import { darkTheme } from "../theme/darkTheme";
import { THEME_MODES } from "../helpers/consts";

const ThemeContext = React.createContext();

let themeElement = document.createElement("style");
document.head.appendChild(themeElement);

// TODO: Might be good to add a dev only theme editor

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);
  const [mode, setMode] = useState(THEME_MODES.LIGHT);

  const toggleMode = () => {
    setTheme(mode === THEME_MODES.LIGHT ? lightTheme : darkTheme);
    setMode(mode === THEME_MODES.LIGHT ? THEME_MODES.DARK : THEME_MODES.LIGHT);
  };

  useEffect(() => {
    themeElement.textContent = `
    body{
      background-color: ${theme.colors.background};
      font-family: ${theme.typography.general.fontFamily};
      color: ${theme.typography.general.color};
    }
    `;
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ theme, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeContext.displayName = "ThemeContext";

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeContextConsumer = ThemeContext.Consumer;
