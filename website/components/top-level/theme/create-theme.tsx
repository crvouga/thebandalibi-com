import {
  createTheme as createMuiTheme,
  responsiveFontSizes,
  ThemeOptions,
} from "@material-ui/core/styles";
import merge from "deepmerge";
import { MdNavigateNext } from "react-icons/md";
import { IThemeConfig } from "./theme-config";

const baseOptions: ThemeOptions = {
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        html {
          -ms-touch-action: manipulation;
          touch-action: manipulation;
          -ms-overflow-style: none;
          scrollbar-width: none;
          scroll-behavior: smooth;
          overflow-x: hidden;
          font-display: block;
        }
      `,
    },

    MuiLink: {
      defaultProps: {
        variant: "inherit",
        color: "inherit",
        underline: "hover",
      },
    },

    MuiBreadcrumbs: {
      defaultProps: {
        separator: <MdNavigateNext />,
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

export const createTheme = ({ mode, font, color }: IThemeConfig) => {
  const dynamicOptions: ThemeOptions = {
    palette: {
      mode: mode,

      primary: {
        main: color.primary,
      },

      secondary: {
        main: color.secondary,
      },
    },

    typography: {
      fontWeightRegular: "bold",

      fontFamily: font.body,

      h1: {
        fontFamily: font.heading,
      },

      h2: {
        fontFamily: font.heading,
      },

      h3: {
        fontFamily: font.heading,
      },

      h4: {
        fontFamily: font.heading,
      },
    },
  };

  const options = merge(baseOptions, dynamicOptions);

  const theme = responsiveFontSizes(createMuiTheme(options));

  return theme;
};