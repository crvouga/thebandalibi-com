import { Colors } from "./colors";
import { createTheme } from "./create-theme";
import { Fonts } from "./fonts";

export const theme = createTheme({
  primaryColor: Colors.orange,
  backgroundColor: Colors.orange,
  headingFont: Fonts.BebasNeue,
  bodyFont: Fonts.Roboto,
});
