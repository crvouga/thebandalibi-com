import { makeStyles } from "@material-ui/core/styles";
import { NavigationTabs } from "./navigation-tabs";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "sticky",
    top: 0,
    zIndex: theme.zIndex.appBar,
    backgroundColor: theme.palette.background.default,
  },
}));

export const NavigationBar = () => {
  const classes = useStyles();

  return (
    <Paper variant="outlined" className={classes.root}>
      <NavigationTabs />
    </Paper>
  );
};
