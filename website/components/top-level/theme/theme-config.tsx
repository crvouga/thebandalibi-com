import { yellow } from "@material-ui/core/colors";
import { Fonts } from "./fonts";
import { IThemeMode } from "./theme-mode-context";

export type IThemeConfig = {
  mode: IThemeMode;

  font: {
    heading: string;
    body: string;
  };

  color: {
    primary: string;
    secondary: string;
  };
};

const BLACK = "#111";
const WHITE = "#fff";

export const LIGHT_THEME_CONFIG: IThemeConfig = {
  mode: "light",

  color: {
    primary: BLACK,
    secondary: WHITE,
  },

  font: {
    heading: Fonts.BebasNeue,
    body: Fonts.Roboto,
  },
};

export const DARK_THEME_CONFIG: IThemeConfig = {
  mode: "dark",

  color: {
    primary: WHITE,
    secondary: BLACK,
  },

  font: {
    heading: Fonts.BebasNeue,
    body: Fonts.Roboto,
  },
};
