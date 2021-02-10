import { makeStyles } from "@material-ui/core/styles";
import { NavigationTabs } from "./navigation-tabs";

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
    <div className={classes.root}>
      <NavigationTabs />
    </div>
  );
};
