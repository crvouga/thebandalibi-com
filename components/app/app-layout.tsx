import Hidden from "@material-ui/core/Hidden";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { NavigationActionBar } from "./navigation/navigation-action-bar";
import { NavigationBarLarge } from "./navigation/navigation-bar-large";
import { NAV_BAR_HEIGHT } from "./navigation/navigation-constants";

export const useStyles = makeStyles((theme) => ({
  gutter: {
    width: "100vw",
    height: NAV_BAR_HEIGHT,
  },
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
  return (
    <React.Fragment>
      <Hidden xsDown>
        <NavigationBarLarge className={classes.top} />
        <div className={classes.gutter} />
      </Hidden>

      {children}

      <Hidden smUp>
        <NavigationActionBar className={classes.bottom} />
        <div className={classes.gutter} />
      </Hidden>
    </React.Fragment>
  );
};
