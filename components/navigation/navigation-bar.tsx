import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { NavigationTabs } from "./navigation-tabs";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "sticky",
    top: 0,
    zIndex: theme.zIndex.appBar,
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
