import { createTheme } from "./create-theme";
import { Fonts } from "./fonts";

const BLACK = "#111";
const WHITE = "#fff";

export const darkTheme = createTheme({
  mode: "dark",

  color: {
    primary: WHITE,
    secondary: BLACK,
  },

  font: {
    heading: Fonts.BebasNeue,
    body: Fonts.Roboto,
  },
});
