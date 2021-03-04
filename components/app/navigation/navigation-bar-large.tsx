import AppBar, { AppBarProps } from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import React, { forwardRef } from "react";
import { Logo } from "../logo";
import { NavigationActionBar } from "./navigation-action-bar";

export const useStyles = makeStyles((theme) => ({
  toolbar: {
    maxWidth: theme.breakpoints.values.lg,
    margin: "auto",
    width: "100%",
    justifyContent: "space-between",
  },
}));

export const NavigationBarLarge = forwardRef<unknown, AppBarProps>(
  (props, ref) => {
    const classes = useStyles();

    return (
      <AppBar ref={ref} color="default" {...props}>
        <Toolbar className={classes.toolbar}>
          <Logo />
          <NavigationActionBar />
        </Toolbar>
      </AppBar>
    );
  }
);
