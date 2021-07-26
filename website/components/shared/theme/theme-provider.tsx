import { CacheProvider } from "@emotion/react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import React, { useMemo } from "react";
import { cache } from "./cache";
import { createTheme } from "./create-theme";
import { THEME_CONFIG } from "./theme-config";
import { useFontsState } from "./use-font-state";

export const ThemeProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const fontsState = useFontsState();

  const theme = useMemo(() => {
    if (fontsState === "loading") {
      return createTheme({
        ...THEME_CONFIG,
        hideFont: true,
      });
    }

    return createTheme({
      ...THEME_CONFIG,
      hideFont: false,
    });
  }, [fontsState]);

  return (
    <CacheProvider value={cache}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </CacheProvider>
  );
};
