import { ThemeOptions } from "@material-ui/core/styles";

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

export const overridesOptions: ThemeOptions = {
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
        size: "large",
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
};
