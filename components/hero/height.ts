import { Theme } from "@material-ui/core/styles";

export const toHeroHeightStyles = (theme: Theme) => {
  return {
    height: "100vh",

    [theme.breakpoints.down("sm")]: {
      height: theme.breakpoints.values.md,
    },

    [theme.breakpoints.down("xs")]: {
      height: theme.breakpoints.values.sm,
    },
  };
};
