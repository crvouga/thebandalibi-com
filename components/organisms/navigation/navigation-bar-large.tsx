import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "next/link";
import React from "react";
import { Logo } from "../../atoms/logo";
import { NavigationTabs } from "./navigation-tabs";

export const APP_BAR_HEIGHT = 64;

const useStyles = makeStyles((theme) => ({
  appBar: {
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
