import AppBar from "@material-ui/core/AppBar";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import { Logo } from "../logo";
import IconButton from "@material-ui/core/IconButton";
import { useNavigationState } from "./navigation-state";
import { MdMenu } from "react-icons/md";

export const useStyles = makeStyles((theme) => ({
  toolbar: {
    maxWidth: theme.breakpoints.values.lg,
    margin: "auto",
    width: "100%",
    justifyContent: "space-between",
  },
}));

export const NavigationBar = ({ ...props }) => {
  const classes = useStyles();

  const navigationState = useNavigationState();

  return (
    <AppBar position="relative" color="default" {...props}>
      <Toolbar className={classes.toolbar}>
        <Logo />
        <Hidden smUp implementation="css">
          <IconButton
            aria-label="open navigation bar"
            onClick={navigationState.openDrawer}
          >
            <MdMenu />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};
