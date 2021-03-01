import AppBar, { AppBarProps } from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import { Logo } from "../logo";

export const useStyles = makeStyles((theme) => ({
  toolbar: {
    justifyContent: "center",
  },
  gutter: theme.mixins.toolbar,
}));

export const NavigationBarSmall = React.forwardRef(
  (props: AppBarProps, ref) => {
    const classes = useStyles();

    return (
      <React.Fragment>
        <AppBar ref={ref} position="fixed" color="default" {...props}>
          <Toolbar className={classes.toolbar}>
            <Logo />
          </Toolbar>
        </AppBar>
        <div className={classes.gutter} />
      </React.Fragment>
    );
  }
);
