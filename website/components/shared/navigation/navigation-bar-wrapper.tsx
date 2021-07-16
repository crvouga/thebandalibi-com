import { Gutter, Image } from "@components/generic";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";
import Link from "next/link";
import React from "react";
import { OpenCartIconButton } from "../../commerce/cart";
import { routes } from "../routes";
import { NAVIGATION_BAR_HEIGHT, NAVIGATION_LINKS } from "./constants";
import { NavigationBarBottom } from "./navigation-bar-bottom";
import { NavigationBarTop } from "./navigation-bar-top";
import { NavigationLinks } from "./navigation-links";
import { OpenNavigationDrawerButton } from "./open-navigation-drawer-button";
import Typography from "@material-ui/core/Typography";
import { Fonts } from "../theme";

export const NavigationBarWrapper = ({
  logoImage,
  children,
}: React.PropsWithChildren<{
  logoImage: {
    src: string;
    alt: string;
    aspectRatio: number;
  };
}>) => {
  const logo = (
    <Link href={routes.landing()}>
      <Typography
        component="h1"
        variant="h2"
        sx={{
          fontFamily: Fonts.Pacifico,
        }}
      >
        Alibi
      </Typography>
      {/* <Box sx={{ width: "100px", cursor: "pointer" }}>
        <Image priority {...logoImage} />
      </Box> */}
    </Link>
  );

  return (
    <>
      <Hidden smDown implementation="css">
        <NavigationBarTop
          left={logo}
          right={
            <Box display="flex" alignItems="center">
              <NavigationLinks
                orientation="horizontal"
                links={NAVIGATION_LINKS}
              />
              <OpenCartIconButton />
            </Box>
          }
        />

        <Gutter height={NAVIGATION_BAR_HEIGHT} />
      </Hidden>

      {children}

      <Hidden smUp implementation="css">
        <NavigationBarBottom
          left={<OpenNavigationDrawerButton />}
          center={logo}
          right={<OpenCartIconButton />}
        />

        <Gutter height={NAVIGATION_BAR_HEIGHT} />
      </Hidden>
    </>
  );
};
