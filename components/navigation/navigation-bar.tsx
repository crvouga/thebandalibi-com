import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "next/link";
import React, { useEffect } from "react";
import { CloseIconButton } from "../close-icon-button";
import { Logo } from "../logo";
import { useBoolean } from "../use-boolean";
import { NavigationTabs } from "./navigation-tabs";
import { useRouter } from "next/router";

export const APP_BAR_HEIGHT = 74;

const useStyles = makeStyles((theme) => ({
  appBar: {
    // height: APP_BAR_HEIGHT,
    backgroundColor: theme.palette.background.paper,
  },
  gutter: {
    width: "100vw",
    height: APP_BAR_HEIGHT,
  },
  space: {
    flex: 1,
  },
  toolbar: {
    maxWidth: theme.breakpoints.values.lg,
    margin: "auto",
    width: "100%",
    padding: theme.spacing(0, 2),
  },
  drawer: {
    width: "66.66vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    alignItems: "left",
  },
}));

export const NavigationBarLarge = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar variant="outlined" position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Link href="/">
            <Logo />
          </Link>

          <div className={classes.space} />

          <NavigationTabs />
        </Toolbar>
      </AppBar>
      <div className={classes.gutter} />
    </React.Fragment>
  );
};

export const NavigationBarSmall = () => {
  const classes = useStyles();

  const router = useRouter();
  const isOpen = useBoolean(false);

  useEffect(() => {
    router.events.on("routeChangeComplete", isOpen.setFalse);
    return () => {
      router.events.off("routeChangeComplete", isOpen.setFalse);
    };
  }, []);

  return (
    <React.Fragment>
      <AppBar variant="outlined" position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            aria-label="open navigation menu"
            onClick={isOpen.setTrue}
          >
            <MenuIcon />
          </IconButton>

          <div className={classes.space} />

          <Link href="/">
            <Logo />
          </Link>

          <div className={classes.space} />

          <IconButton
            style={{ opacity: 0 }}
            aria-label="dummy icon button to center logo"
            disabled
            onClick={isOpen.setTrue}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={classes.gutter} />

      <Drawer
        classes={{
          paper: classes.drawer,
        }}
        anchor="left"
        open={isOpen.value}
        onClose={isOpen.setFalse}
      >
        <Toolbar>
          <CloseIconButton onClick={isOpen.setFalse} />
        </Toolbar>
        <NavigationTabs orientation="vertical" />
      </Drawer>
    </React.Fragment>
  );
};

export const NavigationBar = () => {
  return (
    <React.Fragment>
      <Hidden smDown>
        <NavigationBarLarge />
      </Hidden>
      <Hidden mdUp>
        <NavigationBarSmall />
      </Hidden>
    </React.Fragment>
  );
};
