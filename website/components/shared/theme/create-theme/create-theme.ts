import {
  createTheme as createThemeDefault,
  responsiveFontSizes,
  Theme,
  ThemeOptions,
} from "@material-ui/core/styles";
import { componentOptions } from "./components";
import { toTypographyOptions } from "./typography";

export const createTheme = ({
  headingFont,
  bodyFont,
  primaryColor,
}: {
  headingFont: string;
  bodyFont: string;
  primaryColor: string;
}): Theme => {
  const defaultThemeOptions: ThemeOptions = {
    palette: {
      mode: "light",

      primary: {
        main: primaryColor,
      },
    },
    ...toTypographyOptions({ headingFont, bodyFont }),
    ...componentOptions,
  };

  return responsiveFontSizes(createThemeDefault(defaultThemeOptions));
};
