import Hidden from "@material-ui/core/Hidden";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { HideOnScroll } from "../../atoms/hide-on-scroll";
import { NavigationActionBar } from "./navigation-action-bar";
import { NavigationBarLarge } from "./navigation-bar-large";
import { NavigationBarSmall } from "./navigation-bar-small";
import { NAV_BAR_HEIGHT } from "./navigation-constants";

export const useStyles = makeStyles(() => ({
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
    // height: NAV_BAR_HEIGHT,
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
  },
}));

export const NavigationLayout = ({ children }: React.PropsWithChildren<{}>) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Hidden smDown>
        <NavigationBarLarge className={classes.top} />
      </Hidden>

      <Hidden mdUp>
        <HideOnScroll>
          <NavigationBarSmall className={classes.top} />
        </HideOnScroll>
      </Hidden>

      <div className={classes.gutter} />

      {children}

      <Hidden mdUp>
        <NavigationActionBar className={classes.bottom} />
        <div className={classes.gutter} />
      </Hidden>
    </React.Fragment>
  );
};
