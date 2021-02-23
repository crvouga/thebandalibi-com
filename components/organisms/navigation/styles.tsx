import { makeStyles } from "@material-ui/core/styles";

export const NAV_BAR_HEIGHT: string = "64px";

export const useStyles = makeStyles((theme) => ({
  appBar: {
    height: NAV_BAR_HEIGHT,
    backgroundColor: theme.palette.background.paper,
  },

  gutter: {
    width: "100vw",
    height: NAV_BAR_HEIGHT,
  },

  space: {
    flex: 1,
  },

  toolbar: {
    maxWidth: theme.breakpoints.values.lg,
    margin: "auto",
    width: "100%",
    padding: theme.spacing(0, 2),
  },
}));
