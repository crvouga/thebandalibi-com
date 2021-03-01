import CssBaseline from "@material-ui/core/CssBaseline";
import {
  createMuiTheme,
  MuiThemeProvider,
  responsiveFontSizes,
  ThemeOptions,
} from "@material-ui/core/styles";
import React, { PropsWithChildren, useEffect } from "react";
import { blue, yellow, red } from "@material-ui/core/colors";

const HIDE_SCROLL_BAR_STYLES = {
  //source: https://stackoverflow.com/questions/43186015/css-hide-scroll-bar-but-have-element-scrollable

  "-ms-overflow-style": "none" /* IE and Edge */,

  "scrollbar-width": "none" /* Firefox */,

  "& ::-webkit-scrollbar": {
    display: "none",
  },
};

const FontStyleSheetLink = ({ href }: { href: string }) => {
  return (
    <link
      href={href}
      as="style"
      rel="stylesheet preload prefetch"
      type="text/css"
      crossOrigin="anonymous"
    />
  );
};

const ROCK_N_ROLL_FONT_URL =
  "https://fonts.googleapis.com/css2?family=RocknRoll+One&display=swap";

export const Fonts = () => {
  return (
    <React.Fragment>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <FontStyleSheetLink href={ROCK_N_ROLL_FONT_URL} />
    </React.Fragment>
  );
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
    fontFamily: ["RocknRoll One", "sans-serif"].join(","),
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
          scrollBehavior: "smooth",
          overflowX: "hidden",
          "-ms-touch-action": "manipulation",
          "touch-action": "manipulation",
          width: "100%",
          height: "100%",
        },
        body: {
          width: "100%",
          height: "100%",
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
