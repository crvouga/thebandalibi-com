import { CacheProvider } from "@emotion/react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import React, { useMemo } from "react";
import { cache } from "./cache";
import { createTheme } from "./create-theme";
import { THEME_CONFIG } from "./theme-config";
import { useFontsState } from "./use-font-state";
import { useThemeModeContext } from "./theme-mode-context";

export const ThemeProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const fontsState = useFontsState();
  const { themeMode } = useThemeModeContext();

  const theme = useMemo(() => {
    return createTheme({
      ...THEME_CONFIG,
      mode: themeMode,
      hideFont: fontsState === "loading",
    });
  }, [fontsState, themeMode]);

  return (
    <CacheProvider value={cache}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </CacheProvider>
  );
};
