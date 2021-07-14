import { CacheProvider } from "@emotion/react";
import { yellow } from "@material-ui/core/colors";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { cache } from "./cache";
import { createTheme } from "./create-theme";
import { Fonts } from "./fonts";

const defaultConfig = {
  mode: "light" as "light",
  primaryColor: yellow[600],
  headingFont: Fonts.BebasNeue,
  bodyFont: Fonts.Roboto,
};

const defaultTheme = createTheme(defaultConfig);

export const ThemeProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [theme, setTheme] = useState(defaultTheme);

  return (
    <CacheProvider value={cache}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </CacheProvider>
  );
};
