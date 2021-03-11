import AppBar, { AppBarProps } from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import React, { forwardRef } from "react";
import { Logo } from "../app/logo";

export const useStyles = makeStyles(() => ({
  toolbar: {
    justifyContent: "center",
  },
}));

export const NavigationBarLogo = forwardRef<unknown, AppBarProps>(
  (props, ref) => {
    const classes = useStyles();

    return (
      <AppBar ref={ref} position="fixed" color="default" {...props}>
        <Toolbar className={classes.toolbar}>
          <Logo />
        </Toolbar>
      </AppBar>
    );
  }
);
