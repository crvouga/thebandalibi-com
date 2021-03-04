import AppBar, { AppBarProps } from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import { Logo } from "../logo";

export const useStyles = makeStyles((theme) => ({
  toolbar: {
    justifyContent: "center",
  },
}));

export const NavigationBarSmall = (props: AppBarProps) => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" color="default" {...props}>
      <Toolbar className={classes.toolbar}>
        <Logo />
      </Toolbar>
    </AppBar>
  );
};
