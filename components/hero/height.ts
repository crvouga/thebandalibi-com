import { Theme } from "@material-ui/core";

export const toHeroHeightStyles = (theme: Theme) => {
  return {
    height: "100vh",
    maxHeight: theme.breakpoints.values.xs,
  };
};
