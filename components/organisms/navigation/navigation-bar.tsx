import Hidden from "@material-ui/core/Hidden";
import React from "react";
import { NavigationBarLarge } from "./navigation-bar-large";
import { NavigationBarSmall } from "./navigation-bar-small";
import { useStyles } from "./styles";

export const NavigationBar = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Hidden smDown>
        <NavigationBarLarge />
      </Hidden>

      <Hidden mdUp>
        <NavigationBarSmall />
      </Hidden>

      <div className={classes.gutter} />
    </React.Fragment>
  );
};
