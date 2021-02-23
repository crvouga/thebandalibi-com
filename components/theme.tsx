import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  createMuiTheme,
  MuiThemeProvider,
  responsiveFontSizes,
  ThemeOptions,
} from "@material-ui/core/styles";
import { PropsWithChildren, useEffect } from "react";

const HIDE_SCROLL_BAR_STYLES = {
  //source: https://stackoverflow.com/questions/43186015/css-hide-scroll-bar-but-have-element-scrollable

  "-ms-overflow-style": "none" /* IE and Edge */,

  "scrollbar-width": "none" /* Firefox */,

  "& ::-webkit-scrollbar": {
    display: "none",
  },
};

const GoogleFontLink = ({ href }: { href: string }) => {
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

const INTER =
  "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap";

const ROCK_N_ROLL =
  "https://fonts.googleapis.com/css2?family=RocknRoll+One&display=swap";

export const Fonts = () => {
  return (
    <React.Fragment>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <GoogleFontLink href={ROCK_N_ROLL} />
    </React.Fragment>
  );
};

const themeOptions: ThemeOptions = {
  palette: {
    type: "dark",
    background: {
      default: "#101010",
      paper: "#212121",
    },
  },
  typography: {
    fontWeightRegular: "bold",

    fontFamily: ["RocknRoll One", "Inter", "sans-serif"].join(","),
  },
  props: {
    MuiLink: {
      variant: "inherit",
      color: "inherit",
      underline: "none",
    },

    MuiCard: {
      elevation: 6,
      // variant: "outlined",
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
          ...HIDE_SCROLL_BAR_STYLES,
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
