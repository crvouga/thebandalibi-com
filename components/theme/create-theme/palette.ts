import { ThemeOptions } from "@material-ui/core/styles";

export const toPaletteOptions = ({
  primaryColor,
  backgroundColor,
}: {
  primaryColor: string;
  backgroundColor: string;
}): ThemeOptions => {
  return {
    palette: {
      type: "light",

      primary: {
        main: primaryColor,
      },

      background: {
        default: backgroundColor,
      },
    },
  };
};
