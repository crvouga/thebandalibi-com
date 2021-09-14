import createEmotionCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { darkTheme } from "./themes";

export const cache = createEmotionCache({ key: "css" });

cache.compat = true;

export const ThemeProvider = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <CacheProvider value={cache}>
      <MuiThemeProvider theme={darkTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </CacheProvider>
  );
};
