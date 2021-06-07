import { ThemeOptions } from "@material-ui/core/styles";

export const propsOptions: ThemeOptions = {
  props: {
    MuiLink: {
      variant: "inherit",
      color: "inherit",
      underline: "none",
    },

    MuiContainer: {
      maxWidth: "lg",
    },

    MuiAppBar: {
      elevation: 0,
    },
  },
};
