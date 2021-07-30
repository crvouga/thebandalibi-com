import {
  createTheme as createMuiTheme,
  ThemeProvider as MuiThemeProvider,
  useTheme,
} from "@material-ui/core/styles";
import merge from "deepmerge";
import React, { useEffect, useState } from "react";

const hiddenFontsTheme = createMuiTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "transparent",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          color: "transparent",
        },
      },
    },
  },
});

export const useFontLoadingState = () => {
  const [state, setState] = useState<"loading" | "loaded">("loading");

  useEffect(() => {
    //@ts-ignore
    document.fonts.ready.finally(() => {
      setState("loaded");
    });

    const FIVE_SECONDS = 5000;

    const timeout = setTimeout(() => {
      setState("loaded");
    }, FIVE_SECONDS);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return state;
};

export const FontLoadingGateway = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const theme = useTheme();

  const fontLoadingState = useFontLoadingState();

  const newTheme =
    fontLoadingState === "loading" ? merge(theme, hiddenFontsTheme) : theme;

  return <MuiThemeProvider theme={newTheme}>{children}</MuiThemeProvider>;
};