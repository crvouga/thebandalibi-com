import { amber } from "@material-ui/core/colors";
import { createTheme } from "./create-theme";
import { Fonts } from "./fonts";

const backgroundColor = "#efefef";
const mainColor = amber[400];

// complementary color: https://www.sessions.edu/color-calculator/

export const theme = createTheme({
  primaryColor: mainColor,

  backgroundColor: backgroundColor,
  paperColor: backgroundColor,

  headingFont: Fonts.BebasNeue,
  bodyFont: Fonts.Roboto,
});
