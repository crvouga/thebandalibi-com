import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import { MdMenu } from "react-icons/md";
import { INavigationBarProps } from "./navigation-bar-interface";
import { useNavigationState } from "./navigation-state";
import { NavigationDrawer } from "./navigation-drawer";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    justifyContent: "space-between",
  },

  appBar: {
    top: "auto",
    bottom: 0,
    color: theme.palette.getContrastText(theme.palette.background.default),
    backgroundColor: theme.palette.primary.main,
  },
}));

export const NavigationBarBottom = React.forwardRef<any, INavigationBarProps>(
  ({ logo, links }, ref) => {
    const classes = useStyles();

    const navigationState = useNavigationState();

    return (
      <>
        <NavigationDrawer links={links} />

        <AppBar elevation={6} ref={ref} className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              aria-label="open navigation bar"
              onClick={() => {
                navigationState.setDrawerState("opened");
              }}
            >
              <MdMenu />
            </IconButton>

            {logo}

            <Box width="32px" height="32px" />
          </Toolbar>
        </AppBar>
      </>
    );
  }
);
