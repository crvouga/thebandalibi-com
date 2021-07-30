import { CacheProvider } from "@emotion/react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { cache } from "./cache";
import { darkTheme, lightTheme } from "./theme-config";
import { useThemeMode } from "./theme-mode/theme-mode";

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
