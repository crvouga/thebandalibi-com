import { makeStyles } from "@material-ui/core/styles";
import { NavigationTabs } from "./navigation-tabs";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export const NavigationBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavigationTabs />
    </div>
  );
};
