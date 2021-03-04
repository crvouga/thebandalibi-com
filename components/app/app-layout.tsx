import Hidden from "@material-ui/core/Hidden";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useStore } from "../../lib/state-store";
import { Gutter } from "./navigation/gutter";
import { NavigationActionBar } from "./navigation/navigation-action-bar";
import { NavigationBarLarge } from "./navigation/navigation-bar-large";

export const useStyles = makeStyles((theme) => ({
  bottom: {
    position: "fixed",
    top: "auto",
    bottom: 0,
    left: 0,
    width: "100vw",
  },
  top: {
    zIndex: theme.zIndex.appBar,
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
  },
}));

export const AppLayout = ({ children }: React.PropsWithChildren<{}>) => {
  const classes = useStyles();

  const isVisible = useStore((state) => state.navigation.isVisible);

  return (
    <React.Fragment>
      <Hidden xsDown>
        <Slide appear={false} direction="down" in={isVisible}>
          <NavigationBarLarge className={classes.top} />
        </Slide>
      </Hidden>

      {children}

      <Hidden smUp>
        <Slide appear={false} direction="up" in={isVisible}>
          <NavigationActionBar className={classes.bottom} />
        </Slide>
      </Hidden>

      <Gutter />
    </React.Fragment>
  );
};
