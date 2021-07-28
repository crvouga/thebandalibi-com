import { yellow } from "@material-ui/core/colors";
import { Fonts } from "./fonts";

export type IThemeConfig = {
  mode: "light" | "dark" | "system";

  font: {
    heading: string;
    body: string;
  };

  color: {
    primary: string;
    secondary: string;
  };
};

export const THEME_CONFIG: IThemeConfig = {
  mode: "dark",

  color: {
    primary: yellow[600],
    secondary: yellow[600],
  },

  font: {
    heading: Fonts.BebasNeue,
    body: Fonts.Roboto,
  },
};
