import { Button } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { Logo } from "../logo";
import { NAVIGATION_ACTIONS } from "./constants";

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
        <Container maxWidth="lg">
          <Toolbar>
            <Link href="/">
              <div>
                <Logo />
              </div>
            </Link>
            <div className={classes.space} />
            {NAVIGATION_ACTIONS.map((action) => (
              <Link key={action.pathname} href={action.pathname}>
                <div>
                  <Button>{action.label}</Button>
                </div>
              </Link>
            ))}
          </Toolbar>
        </Container>
      </AppBar>
      <div className={classes.gutter} />
    </React.Fragment>
  );
};
