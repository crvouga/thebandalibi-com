import createEmotionCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { useThemeMode } from "./theme-mode/theme-mode";
import { darkTheme, lightTheme } from "./themes";

export const cache = createEmotionCache({ key: "css" });

cache.compat = true;

export const ThemeProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const { themeMode } = useThemeMode();

  const theme = themeMode === "dark" ? darkTheme : lightTheme;

  return (
    <CacheProvider value={cache}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </CacheProvider>
  );
};
