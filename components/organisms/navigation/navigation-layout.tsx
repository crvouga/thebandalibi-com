import Hidden from "@material-ui/core/Hidden";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { HideOnScroll } from "../../atoms/hide-on-scroll";
import { NavigationBarBottom } from "./navigation-bar-bottom";
import { NavigationBarLarge } from "./navigation-bar-large";
import { NavigationBarSmall } from "./navigation-bar-small";
import { NAV_BAR_HEIGHT } from "./navigation-constants";

export const useStyles = makeStyles(() => ({
  appBarGutter: {
    width: "100vw",
    height: NAV_BAR_HEIGHT,
  },
}));

export const NavigationLayout = ({ children }: React.PropsWithChildren<{}>) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Hidden smDown>
        <NavigationBarLarge />
      </Hidden>

      <Hidden mdUp>
        <HideOnScroll>
          <NavigationBarSmall />
        </HideOnScroll>
      </Hidden>

      <div className={classes.appBarGutter} />

      {children}

      <Hidden mdUp>
        <NavigationBarBottom />
        <div className={classes.appBarGutter} />
      </Hidden>
    </React.Fragment>
  );
};
