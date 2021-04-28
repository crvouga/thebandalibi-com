import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import { MdMenu } from "react-icons/md";
import { Gutter } from "../gutter";
import { Logo } from "../logo";
import { NavigationHorizontalLinks } from "./navigation-links";
import { useNavigationState } from "./navigation-state";

export const useStyles = makeStyles((theme) => ({
  toolbar: {
    width: "100%",
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
  appBar: {
    zIndex: theme.zIndex.appBar,
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    color: theme.palette.getContrastText(theme.palette.background.default),
    backgroundColor: theme.palette.primary.main,
  },
}));

const NavigationBarSmall = React.forwardRef((_, ref) => {
  const classes = useStyles();

  const navigationState = useNavigationState();

  return (
    <AppBar ref={ref} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Box marginRight={1}>
          <IconButton
            edge="start"
            aria-label="open navigation bar"
            onClick={() => {
              navigationState.setDrawerState("opened");
            }}
          >
            <MdMenu />
          </IconButton>
        </Box>
        <Logo />
      </Toolbar>
    </AppBar>
  );
});

const NavigationBarLarge = React.forwardRef((_, ref) => {
  const classes = useStyles();

  return (
    <AppBar ref={ref} className={classes.appBar}>
      <Container maxWidth="lg">
        <Box display="flex" alignItems="center">
          <Box flex={1} paddingY={1.5}>
            <Logo />
          </Box>

          <NavigationHorizontalLinks />
        </Box>
      </Container>
    </AppBar>
  );
});

const NavigationBarSwitch = React.forwardRef((_, ref) => {
  return (
    <>
      <Hidden implementation="css" smDown>
        <NavigationBarLarge ref={ref} />
      </Hidden>
      <Hidden implementation="css" mdUp>
        <NavigationBarSmall ref={ref} />
      </Hidden>
    </>
  );
});

export const NavigationBar = () => {
  const navigationState = useNavigationState();

  return (
    <>
      <Slide in={navigationState.barState === "visible"} direction="down">
        <NavigationBarSwitch />
      </Slide>
      {navigationState.gutterState === "enabled" && <Gutter />}
    </>
  );
};
