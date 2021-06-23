import { Theme, useMediaQuery } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import { Gutter } from "generic-components";
import { useRouter } from "next/router";
import React from "react";
import { NAVIGATION_LINKS } from "routes";
import { ShoppingCartIconButton } from "../../commerce";
import {
  VideoPlayerMinimizedModal,
  VideoPlayerModal,
} from "../../content/video/video-player";
import {
  NavigationBarBottom,
  NavigationBarTop,
  NavigationDrawer,
  NavigationDrawerIconButton,
  NavigationLinks,
} from "../navigation";
import { NAVIGATION_BAR_HEIGHT } from "../navigation/navigation-constants";
import { AppLogo } from "./app-logo";

const TopBar = () => {
  const router = useRouter();

  return (
    <Hidden xsDown implementation="css">
      <NavigationBarTop
        left={<AppLogo />}
        right={
          <NavigationLinks
            selectedPathname={router.pathname}
            orientation="horizontal"
            links={NAVIGATION_LINKS}
          />
        }
      />

      <Gutter height={NAVIGATION_BAR_HEIGHT} />
    </Hidden>
  );
};

const BottomBar = () => {
  return (
    <Hidden smUp implementation="css">
      <NavigationBarBottom
        left={<NavigationDrawerIconButton />}
        center={<AppLogo />}
        right={<ShoppingCartIconButton />}
      />

      <Gutter height={NAVIGATION_BAR_HEIGHT} />
    </Hidden>
  );
};

export const AppLayout = ({
  children: pageComponent,
}: React.PropsWithChildren<{}>) => {
  const isScreenSmall = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("xs")
  );

  return (
    <>
      <VideoPlayerModal />
      <VideoPlayerMinimizedModal
        bottom={isScreenSmall ? NAVIGATION_BAR_HEIGHT : 0}
      />
      <NavigationDrawer links={NAVIGATION_LINKS} />

      <TopBar />

      {pageComponent}

      <BottomBar />
    </>
  );
};
