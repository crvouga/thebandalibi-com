import {
  createTheme as createThemeDefault,
  responsiveFontSizes,
  ThemeOptions,
} from "@material-ui/core/styles";
import merge from "deepmerge";
import { MdNavigateNext } from "react-icons/md";
import { IThemeConfig } from "./theme-config";

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

// problem and solution: https://stackoverflow.com/questions/60682426/material-ui-adds-padding-to-the-body-tag-when-a-dialog-is-opened
const disableScrollLockOptions: ThemeOptions = {
  components: {
    MuiDrawer: {
      defaultProps: {
        disableScrollLock: true,
      },
    },
    MuiSelect: {
      defaultProps: {
        MenuProps: {
          disableScrollLock: true,
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
}: IThemeConfig) => {
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

  const options = [
    baseOptions,
    dynamicOptions,
    // disableScrollLockOptions,
  ].reduce<ThemeOptions>((y, x) => merge(y, x), {});

  const theme = responsiveFontSizes(createThemeDefault(options));

  return theme;
};
