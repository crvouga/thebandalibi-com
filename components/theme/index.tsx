import { Colors } from "./colors";
import { createTheme } from "./create-theme";
import { Fonts } from "./fonts";

export const theme = createTheme({
  primaryColor: Colors.yellow,
  headingFont: Fonts.BebasNeue,
  bodyFont: Fonts.Roboto,
});
