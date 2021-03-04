import { blue } from "@material-ui/core/colors";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  createMuiTheme,
  MuiThemeProvider,
  responsiveFontSizes,
  ThemeOptions,
} from "@material-ui/core/styles";
import React, { PropsWithChildren, useEffect } from "react";
import { fontStacks } from "./fonts";

const HIDE_SCROLL_BAR_STYLES = {
  //source: https://stackoverflow.com/questions/43186015/css-hide-scroll-bar-but-have-element-scrollable

  "-ms-overflow-style": "none" /* IE and Edge */,

  "scrollbar-width": "none" /* Firefox */,

  "& ::-webkit-scrollbar": {
    display: "none",
  },
};

const DISABLE_ZOOM_STYLES = {
  "-ms-touch-action": "manipulation",
  "touch-action": "manipulation",
};

const themeOptions: ThemeOptions = {
  palette: {
    type: "dark",
    primary: {
      main: blue[500],
    },
    background: {
      default: "#101010",
      paper: "#323232",
    },
  },

  typography: {
    fontWeightRegular: "bold",
    fontFamily: fontStacks.body,

    h1: {
      fontFamily: fontStacks.heading,
    },

    h2: {
      fontFamily: fontStacks.heading,
    },

    h3: {
      fontFamily: fontStacks.heading,
    },

    h4: {
      fontFamily: fontStacks.heading,
    },
  },

  props: {
    MuiLink: {
      variant: "inherit",
      color: "inherit",
      underline: "none",
    },

    MuiCard: {
      // elevation: 6,
    },

    //@ts-ignore
    MuiSkeleton: {
      animation: "wave",
    },

    MuiContainer: {
      maxWidth: "lg",
    },
  },

  overrides: {
    MuiChip: {
      label: {
        fontWeight: "bolder",
        fontSize: "1.5em",
      },

      root: {
        borderRadius: "3em",
        height: "3em",
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
          ...HIDE_SCROLL_BAR_STYLES,
          ...DISABLE_ZOOM_STYLES,
          scrollBehavior: "smooth",
          overflowX: "hidden",
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
