import { ThemeOptions } from "@material-ui/core/styles";

export const toTypographyOptions = ({
  headingFont,
  bodyFont,
}: {
  headingFont: string;
  bodyFont: string;
}): ThemeOptions => {
  return {
    typography: {
      fontWeightRegular: "bold",

      fontFamily: bodyFont,

      h1: {
        fontFamily: headingFont,
      },

      h2: {
        fontFamily: headingFont,
      },

      h3: {
        fontFamily: headingFont,
      },

      h4: {
        fontFamily: headingFont,
      },
    },
  };
};
