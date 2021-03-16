import { blue } from "@material-ui/core/colors";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import "@fontsource/ibm-plex-sans";
import "@fontsource/bebas-neue";

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

const fontStacks = {
  heading: [
    "Bebas Neue",
    "'Roboto'",
    "'Helvetica'",
    "'Arial'",
    "sans-serif",
  ].join(", "),

  body: [
    "IBM Plex Sans",
    "'Roboto'",
    "'Helvetica'",
    "'Arial'",
    "sans-serif",
  ].join(", "),
};

export const theme = responsiveFontSizes(
  createMuiTheme({
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
            fontDisplay: "block",
          },
        },
      },
    },
  })
);
