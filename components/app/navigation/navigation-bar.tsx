import AppBar from "@material-ui/core/AppBar";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import { MdMenu } from "react-icons/md";
import { Logo } from "../logo";
import { useNavigationState } from "./navigation-state";
import { NavigationTabs } from "./navigation-tabs";

export const useStyles = makeStyles((theme) => ({
  toolbar: {
    maxWidth: theme.breakpoints.values.lg,
    margin: "auto",
    width: "100%",
    justifyContent: "space-between",
  },
}));

const NavigationBarSmall = () => {
  const classes = useStyles();

  const navigationState = useNavigationState();

  return (
    <>
      <AppBar color="default">
        <Toolbar className={classes.toolbar}>
          <Logo />
          <IconButton
            aria-label="open navigation bar"
            onClick={navigationState.openDrawer}
          >
            <MdMenu />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

const NavigationBarLarge = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar color="default">
        <Toolbar className={classes.toolbar}>
          <Logo />
          <NavigationTabs />
        </Toolbar>
      </AppBar>
    </>
  );
};

export const NavigationBar = () => {
  return (
    <>
      <Hidden implementation="css" smDown>
        <NavigationBarLarge />
      </Hidden>
      <Hidden implementation="css" mdUp>
        <NavigationBarSmall />
      </Hidden>
    </>
  );
};
