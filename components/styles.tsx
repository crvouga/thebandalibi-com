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

  cover: {
    objectFit: "cover",
  },

  cardGridContainer: {
    display: "flex",
    flexWrap: "wrap",
  },

  cardGridItemWrapper: {
    padding: theme.spacing(1 / 2),

    width: "33.33%",

    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },

    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
}));
