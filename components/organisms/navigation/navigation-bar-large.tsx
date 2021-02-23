import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import { Logo } from "../../atoms/logo";
import { NavigationTabs } from "./navigation-tabs";

export const NAV_BAR_HEIGHT: string = "64px";

export const useStyles = makeStyles((theme) => ({
  appBar: {
    height: NAV_BAR_HEIGHT,
  },

  toolbar: {
    maxWidth: theme.breakpoints.values.lg,
    margin: "auto",
    width: "100%",
    padding: theme.spacing(0, 2),
    justifyContent: "space-between",
  },
}));

export const NavigationBarLarge = () => {
  const classes = useStyles();

  return (
    <AppBar
      variant="outlined"
      position="fixed"
      color="default"
      className={classes.appBar}
    >
      <Toolbar className={classes.toolbar}>
        <Logo />

        <NavigationTabs />
      </Toolbar>
    </AppBar>
  );
};
