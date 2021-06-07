import { ThemeOptions } from "@material-ui/core/styles";

export const toPaletteOptions = ({
  primaryColor,
}: {
  primaryColor: string;
}): ThemeOptions => {
  return {
    palette: {
      type: "light",

      primary: {
        main: primaryColor,
      },
    },
  };
};
