import { ThemeOptions } from "@material-ui/core/styles";

export const toPaletteOptions = ({
  primaryColor,
  backgroundColor,
  paperColor,
}: {
  primaryColor: string;
  backgroundColor: string;
  paperColor: string;
}): ThemeOptions => {
  return {
    palette: {
      type: "light",

      primary: {
        main: primaryColor,
      },

      background: {
        default: backgroundColor,
        paper: paperColor,
      },
    },
  };
};
