import { yellow } from "@material-ui/core/colors";
import { createTheme } from "./create-theme";
import { Fonts } from "./fonts";

// complementary color: https://www.sessions.edu/color-calculator/

const backgroundColor = "#ededed";
const paperColor = "#efefef";
const primaryColor = yellow[600];

export const theme = createTheme({
  primaryColor,
  backgroundColor,
  paperColor,

  headingFont: Fonts.BebasNeue,
  bodyFont: Fonts.Roboto,
});
