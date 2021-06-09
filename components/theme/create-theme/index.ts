import {
  createMuiTheme,
  responsiveFontSizes,
  Theme,
  ThemeOptions,
} from "@material-ui/core";
import { overridesOptions } from "./overrides";
import { toPaletteOptions } from "./palette";
import { propsOptions } from "./props";
import { toTypographyOptions } from "./typography";

export const createTheme = ({
  headingFont,
  bodyFont,
  primaryColor,
  backgroundColor,
}: {
  headingFont: string;
  bodyFont: string;
  primaryColor: string;
  backgroundColor: string;
}): Theme => {
  const paletteOptions = toPaletteOptions({ primaryColor, backgroundColor });

  const typographyOptions = toTypographyOptions({ headingFont, bodyFont });

  const defaultThemeOptions: ThemeOptions = {
    ...paletteOptions,
    ...typographyOptions,
    ...overridesOptions,
    ...propsOptions,
  };

  return responsiveFontSizes(createMuiTheme(defaultThemeOptions));
};
