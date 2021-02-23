import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import { Logo } from "../../atoms/logo";
import { NAV_BAR_HEIGHT } from "./navigation-bar-large";

export const useStyles = makeStyles(() => ({
  appBar: {
    height: NAV_BAR_HEIGHT,
  },

  toolbar: {
    justifyContent: "center",
  },
}));

export const NavigationBarSmall = React.forwardRef((_, ref) => {
  const classes = useStyles();

  return (
    <AppBar
      ref={ref}
      variant="outlined"
      position="fixed"
      color="default"
      className={classes.appBar}
    >
      <Toolbar className={classes.toolbar}>
        <Logo />
      </Toolbar>
    </AppBar>
  );
});
