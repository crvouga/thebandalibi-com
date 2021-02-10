import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { NavigationTabs } from "./navigation-tabs";

const useStyles = makeStyles((theme) => ({
  root: {
    borderBottom: `solid 2px ${theme.palette.divider}`,
  },
  logo: {
    flex: 1,
  },
}));

export const NavigationBar = () => {
  const classes = useStyles();

  return (
    <div>
      <NavigationTabs />
    </div>
  );
};
