import { Fonts } from "./fonts";
import { red, grey, yellow } from "@material-ui/core/colors";

export type IThemeConfig = {
  mode: "light" | "dark" | "system";
  headingFont: string;
  bodyFont: string;
  primaryColor: string;
  hideFont?: boolean;
};

export const THEME_CONFIG: IThemeConfig = {
  mode: "light",
  primaryColor: yellow[600],
  headingFont: Fonts.BebasNeue,
  bodyFont: Fonts.Roboto,
};
