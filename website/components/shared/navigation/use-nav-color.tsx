import { useTheme } from "@material-ui/core";

export const useNavColor = () => {
  const theme = useTheme();

  const backgroundColor = "#020202";
  const color = theme.palette.getContrastText(backgroundColor);

  return {
    color,
    backgroundColor,
  };
};
