import { makeStyles } from "@material-ui/core";

export const useGlobalStyles = makeStyles((theme) => ({
  container: {
    margin: "auto",
    maxWidth: theme.breakpoints.values.lg,
    padding: theme.spacing(0, 2),
  },

  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));
