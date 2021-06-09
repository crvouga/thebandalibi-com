import { Colors } from "./colors";
import { createTheme } from "./create-theme";
import { Fonts } from "./fonts";

export const theme = createTheme({
  primaryColor: Colors.pink,
  backgroundColor: Colors.pink,
  paperColor: Colors.pink,
  headingFont: Fonts.BebasNeue,
  bodyFont: Fonts.Roboto,
});
