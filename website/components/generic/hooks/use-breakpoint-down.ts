import { useTheme } from "@material-ui/core";
import { useWindowSize } from "./use-window-size";

export const useBreakpointDown = ():
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | null => {
  const theme = useTheme();
  const { width } = useWindowSize();

  if (!width) {
    return null;
  }

  const values = theme.breakpoints.values;

  if (width <= values.xs) {
    return "xs";
  }

  if (width <= values.sm) {
    return "sm";
  }

  if (width <= values.md) {
    return "md";
  }

  if (width <= values.lg) {
    return "lg";
  }

  return "xl";
};
