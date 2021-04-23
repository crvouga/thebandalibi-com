import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import clsx from "clsx";
import React from "react";
import { MdMenu } from "react-icons/md";
import { Logo } from "../logo";
import { useNavigationState } from "./navigation-state";
import { NavigationTabs } from "./navigation-tabs";

export const useStyles = makeStyles((theme) => ({
  toolbar: {
    width: "100%",
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
  appBar: {
    zIndex: theme.zIndex.appBar,
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    color: theme.palette.getContrastText(theme.palette.background.default),
    backgroundColor: theme.palette.background.default,
  },
}));

const NavigationBarSmall = () => {
  const classes = useStyles();

  const navigationState = useNavigationState();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Box marginRight={1}>
          <IconButton
            edge="start"
            aria-label="open navigation bar"
            onClick={navigationState.openDrawer}
          >
            <MdMenu />
          </IconButton>
        </Box>
        <Logo />
      </Toolbar>
    </AppBar>
  );
};

const NavigationBarLarge = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={clsx(classes.toolbar, classes.spaceBetween)}>
        <Logo />
        <NavigationTabs />
      </Toolbar>
    </AppBar>
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
