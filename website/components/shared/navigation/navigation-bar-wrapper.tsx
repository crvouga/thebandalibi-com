import { Gutter } from "@components/generic";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import React from "react";
import { OpenCartIconButton } from "../../commerce/cart";
import { routes } from "../routes";
import { Fonts } from "../theme";
import { NAVIGATION_BAR_HEIGHT, NAVIGATION_LINKS } from "./constants";
import { NavigationBarTop } from "./navigation-bar-top";
import { NavigationLinks } from "./navigation-links";
import { OpenNavigationDrawerButton } from "./open-navigation-drawer-button";

export const NavigationBarWrapper = ({
  logo,
  children,
}: React.PropsWithChildren<{
  logo: React.ReactNode;
}>) => {
  return (
    <>
      <NavigationBarTop
        left={logo}
        right={
          <Box display="flex" alignItems="center">
            <Hidden smDown implementation="css">
              <NavigationLinks
                orientation="horizontal"
                links={NAVIGATION_LINKS}
              />
            </Hidden>

            <OpenCartIconButton />

            <Hidden smUp implementation="css">
              <OpenNavigationDrawerButton />
            </Hidden>
          </Box>
        }
      />

      <Gutter height={NAVIGATION_BAR_HEIGHT} />

      {children}
    </>
  );
};
