import CssBaseline from "@material-ui/core/CssBaseline";
import {
  createMuiTheme,
  MuiThemeProvider,
  responsiveFontSizes,
  ThemeOptions,
} from "@material-ui/core/styles";
import { PropsWithChildren, useEffect } from "react";

const themeOptions: ThemeOptions = {
  palette: {
    type: "light",
  },
  typography: {
    fontWeightRegular: "bold",
    fontFamily: ["Inter", "sans-serif"].join(","),
  },
  props: {
    MuiLink: {
      variant: "inherit",
      color: "inherit",
      underline: "none",
    },

    MuiCard: {
      elevation: 6,
    },
  },
  overrides: {
    MuiChip: {
      label: {
        fontWeight: "bold",
      },
    },
    MuiButton: {
      label: {
        fontWeight: "bolder",
      },
    },
    MuiCssBaseline: {
      "@global": {
        html: {
          scrollBehavior: "smooth",
        },
      },
    },
  },
};

const createTheme = () => {
  return responsiveFontSizes(createMuiTheme(themeOptions));
};

//why?: https://itnext.io/next-js-with-material-ui-7a7f6485f671
const useServerSideStylesMaterialUi = () => {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
};

export const ThemeProvider = (props: PropsWithChildren<{}>) => {
  const { children } = props;

  useServerSideStylesMaterialUi();

  return (
    <MuiThemeProvider theme={createTheme()}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
