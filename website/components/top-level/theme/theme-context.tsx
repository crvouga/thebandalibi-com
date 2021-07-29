import { CacheProvider } from "@emotion/react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import React, { useMemo } from "react";
import { cache } from "./cache";
import { createTheme } from "./create-theme";
import { LIGHT_THEME_CONFIG, DARK_THEME_CONFIG } from "./theme-config";
import { useFontsState } from "./use-font-state";
import { useThemeModeContext } from "./theme-mode-context";

export const ThemeProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const fontsState = useFontsState();
  const { themeMode } = useThemeModeContext();

  const theme = useMemo(() => {
    return createTheme({
      ...DARK_THEME_CONFIG, //(themeMode === "light" ? LIGHT_THEME_CONFIG : DARK_THEME_CONFIG),
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
