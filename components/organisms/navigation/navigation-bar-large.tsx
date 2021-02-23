import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import { Logo } from "../../atoms/logo";
import { NavigationTabs } from "./navigation-tabs";
import { useStyles } from "./styles";

export const NavigationBarLarge = () => {
  const classes = useStyles();

  return (
    <AppBar variant="outlined" position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Logo />

        <div className={classes.space} />

        <NavigationTabs />
      </Toolbar>
    </AppBar>
  );
};
