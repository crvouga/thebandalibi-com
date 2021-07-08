import { yellow } from "@material-ui/core/colors";
import { createTheme } from "./create-theme";
import { Fonts } from "./fonts";

export const theme = createTheme({
  primaryColor: yellow[600],
  headingFont: Fonts.BebasNeue,
  bodyFont: Fonts.Roboto,
});
