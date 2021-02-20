import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import { Logo } from "../logo";
import { NavigationTabs } from "./navigation-tabs";
import Link from "next/link";

export const APP_BAR_HEIGHT = 64;

const useStyles = makeStyles((theme) => ({
  appBar: {
    height: APP_BAR_HEIGHT,
    backgroundColor: theme.palette.background.default,
  },
  gutter: {
    width: "100vw",
    height: APP_BAR_HEIGHT,
  },
  space: {
    flex: 1,
  },
}));

export const NavigationBar = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar variant="outlined" position="fixed" className={classes.appBar}>
        <Container maxWidth="lg" disableGutters>
          <Toolbar>
            <Link href="/">
              <Logo />
            </Link>
            <div className={classes.space} />
            <NavigationTabs />
          </Toolbar>
        </Container>
      </AppBar>
      <div className={classes.gutter} />
    </React.Fragment>
  );
};
