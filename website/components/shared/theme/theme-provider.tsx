import { CacheProvider } from "@emotion/react";
import { yellow } from "@material-ui/core/colors";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import React, { useEffect, useMemo, useState } from "react";
import { cache } from "./cache";
import { createTheme } from "./create-theme";
import { Fonts } from "./fonts";

const baseOptions = {
  mode: "light" as "light",
  primaryColor: yellow[600],
  headingFont: Fonts.BebasNeue,
  bodyFont: Fonts.Roboto,
};

const useFontsState = () => {
  const [state, setState] = useState<"loading" | "loaded">("loading");

  useEffect(() => {
    //@ts-ignore
    document.fonts.ready.finally(() => {
      setState("loaded");
    });
  }, []);

  return state;
};

export const ThemeProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const fontsState = useFontsState();

  const theme = useMemo(() => {
    if (fontsState === "loading") {
      return createTheme({
        ...baseOptions,
        hideFont: true,
      });
    }

    return createTheme({
      ...baseOptions,
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
