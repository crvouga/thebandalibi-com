import { ThemeOptions } from "@material-ui/core/styles";

const globalStyles = `
html {
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  -ms-overflow-style: none;
  scrollbar-width: none;
  scroll-behavior: smooth;
  overflow-x: hidden;
  font-display: block;
}
`;

export const componentOptions: ThemeOptions = {
  components: {
    MuiCssBaseline: {
      styleOverrides: globalStyles,
    },

    MuiLink: {
      defaultProps: {
        variant: "inherit",
        color: "inherit",
        underline: "none",
      },
    },

    MuiContainer: {
      defaultProps: {
        maxWidth: "xl",
      },
    },

    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: "bolder",
          size: "large",
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        label: {
          fontWeight: "bolder",
          fontSize: "1.5em",
        },

        root: {
          borderRadius: "3em",
          height: "3em",
        },
      },
    },
  },
};
