import { useTheme } from "@material-ui/core";

export const useNavColor = () => {
  const theme = useTheme();

  const backgroundColor = theme.palette.secondary.main;
  const color = theme.palette.getContrastText(backgroundColor);

  return {
    color,
    backgroundColor,
  };
};
