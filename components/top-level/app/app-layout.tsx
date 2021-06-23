import { Theme, useMediaQuery } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";
import { Gutter } from "generic-components";
import { routes } from "lib";
import { useRouter } from "next/router";
import React from "react";
import {
  ShoppingCartDrawer,
  ShoppingCartIconButton,
} from "../../commerce/shopping-cart";
import { VideoPlayerModal, VideoPlayerPopUp } from "../../content";
import {
  NavigationBarBottom,
  NavigationBarTop,
  NavigationDrawer,
  NavigationDrawerIconButton,
  NavigationLinks,
} from "../navigation";
import { NAVIGATION_BAR_HEIGHT } from "../navigation/navigation-constants";
import { AppLogo } from "./app-logo";

const NAVIGATION_LINKS: {
  label: string;
  pathname: string;
}[] = [
  {
    label: "Home",
    pathname: routes.landing(),
  },
  {
    label: "Store",
    pathname: routes.store(),
  },
  {
    label: "Videos",
    pathname: routes.allVideoGalleries(),
  },
  {
    label: "Photos",
    pathname: routes.allImageGalleries(),
  },
  {
    label: "Releases",
    pathname: routes.allReleases(),
  },
];

export const AppLayout = ({
  children: pageComponent,
}: React.PropsWithChildren<{}>) => {
  const router = useRouter();

  const isScreenSmall = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("xs")
  );

  return (
    <>
      <ShoppingCartDrawer />

      <VideoPlayerModal />

      <VideoPlayerPopUp bottom={isScreenSmall ? NAVIGATION_BAR_HEIGHT : 0} />

      <NavigationDrawer links={NAVIGATION_LINKS} />

      <Hidden xsDown implementation="css">
        <NavigationBarTop
          left={<AppLogo />}
          right={
            <Box display="flex" alignItems="center">
              <NavigationLinks
                selectedPathname={router.pathname}
                orientation="horizontal"
                links={NAVIGATION_LINKS}
              />
              <ShoppingCartIconButton />
            </Box>
          }
        />

        <Gutter height={NAVIGATION_BAR_HEIGHT} />
      </Hidden>

      {pageComponent}

      <Hidden smUp implementation="css">
        <NavigationBarBottom
          left={<NavigationDrawerIconButton />}
          center={<AppLogo />}
          right={<ShoppingCartIconButton />}
        />

        <Gutter height={NAVIGATION_BAR_HEIGHT} />
      </Hidden>
    </>
  );
};
