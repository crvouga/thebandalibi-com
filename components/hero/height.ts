import { Theme } from "@material-ui/core";

export const toHeroHeightStyles = (theme: Theme) => {
  return {
    height: "100vh",
    [theme.breakpoints.down("xs")]: {
      height: theme.breakpoints.values.sm,
    },
  };
};
