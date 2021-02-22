import Hidden from "@material-ui/core/Hidden";
import React from "react";
import { NavigationBarLarge } from "./navigation-bar-large";
import { NavigationBarSmall } from "./navigation-bar-small";

export const NavigationBar = () => {
  return (
    <React.Fragment>
      <Hidden smDown>
        <NavigationBarLarge />
      </Hidden>

      <Hidden mdUp>
        <NavigationBarSmall />
      </Hidden>
    </React.Fragment>
  );
};
