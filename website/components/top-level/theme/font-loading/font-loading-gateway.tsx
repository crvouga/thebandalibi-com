import {
  ThemeOptions,
  ThemeProvider as MuiThemeProvider,
  useTheme,
} from "@material-ui/core/styles";
import mergeRight from "deepmerge";
import React from "react";
import { useFontLoadingState } from "./font-loading-state";

const hideFontsOptions: ThemeOptions = {
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
};

export const FontLoadingGateway = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const fontLoadingState = useFontLoadingState();

  const theme = useTheme();

  if (fontLoadingState === "loading") {
    const newTheme = mergeRight(theme, hideFontsOptions);
    return <MuiThemeProvider theme={newTheme}>{children}</MuiThemeProvider>;
  }

  return <>{children}</>;
};
