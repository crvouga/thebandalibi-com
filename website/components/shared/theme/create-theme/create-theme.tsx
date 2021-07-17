import {
  createTheme as createThemeDefault,
  responsiveFontSizes,
  ThemeOptions,
} from "@material-ui/core/styles";
import merge from "deepmerge";
import { MdNavigateNext } from "react-icons/md";

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

export const createTheme = ({
  mode,
  headingFont,
  bodyFont,
  primaryColor,
  hideFont,
}: {
  mode: "light" | "dark" | "system";
  headingFont: string;
  bodyFont: string;
  primaryColor: string;
  hideFont: boolean;
}) => {
  const baseDynamicOptions: ThemeOptions = {
    palette: {
      mode: mode === "system" ? "light" : mode,

      primary: {
        main: primaryColor,
      },
    },

    typography: {
      fontWeightRegular: "bold",

      fontFamily: bodyFont,

      h1: {
        fontFamily: headingFont,
      },

      h2: {
        fontFamily: headingFont,
      },

      h3: {
        fontFamily: headingFont,
      },

      h4: {
        fontFamily: headingFont,
      },
    },
  };

  const dynamicOptions = merge(
    baseDynamicOptions,
    hideFont ? hideFontsOptions : {}
  );

  const options = merge(baseOptions, dynamicOptions);

  const theme = responsiveFontSizes(createThemeDefault(options));

  return theme;
};
