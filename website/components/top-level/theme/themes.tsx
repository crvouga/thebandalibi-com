import { createTheme } from "./create-theme";
import { FontStacks } from "./fonts";

const COLORS = {
  BLACK: "#111",
  WHITE: "#fff",
  YELLOW: "#E6BB11",
  CREAM: "#EAE08D",
};

export const darkTheme = createTheme({
  mode: "light",

  color: {
    primary: COLORS.CREAM,
    secondary: COLORS.YELLOW,
  },

  font: {
    heading: FontStacks["PT Mono"],
    body: FontStacks["PT Mono"],
  },
});
