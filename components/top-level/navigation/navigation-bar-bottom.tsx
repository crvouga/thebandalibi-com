import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import { CgMenuRound } from "react-icons/cg";
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

    const handleOpen = () => {
      navigationState.setDrawerState("opened");
    };

    return (
      <>
        <NavigationDrawer links={links} />

        <AppBar elevation={6} ref={ref} className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              aria-label="open navigation drawer"
              onClick={handleOpen}
            >
              <CgMenuRound />
            </IconButton>

            {logo}

            <Box width="32px" height="32px" />
          </Toolbar>
        </AppBar>
      </>
    );
  }
);
