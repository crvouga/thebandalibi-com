import {
  createTheme as createThemeDefault,
  responsiveFontSizes,
  Theme,
  ThemeOptions,
} from "@material-ui/core/styles";
import { componentOptions } from "./components";
import { toTypographyOptions } from "./typography";

export const createTheme = ({
  mode,
  headingFont,
  bodyFont,
  primaryColor,
}: {
  mode: "light" | "dark" | "system";
  headingFont: string;
  bodyFont: string;
  primaryColor: string;
}): Theme => {
  const defaultThemeOptions: ThemeOptions = {
    palette: {
      mode: mode === "system" ? "light" : mode,

      primary: {
        main: primaryColor,
      },
    },
    ...toTypographyOptions({ headingFont, bodyFont }),
    ...componentOptions,
  };

  return responsiveFontSizes(createThemeDefault(defaultThemeOptions));
};
