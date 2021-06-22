import Hidden from "@material-ui/core/Hidden";
import { Gutter } from "generic-components";
import React from "react";
import { NAVIGATION_LINKS } from "routes";
import {
  VideoPlayerModal,
  VideoPlayerMinimizedModal,
} from "../../content/video/video-player";
import {
  NavigationDrawer,
  NavigationDrawerIconButton,
  NavigationBarBottom,
  NavigationBarTop,
  NavigationLinks,
} from "../navigation";
import { NAVIGATION_BAR_HEIGHT } from "../navigation/navigation-constants";
import { AppLogo } from "./app-logo";
import { ShoppingCartIconButton } from "../../shop";
import { Theme, useMediaQuery } from "@material-ui/core";
import { useRouter } from "next/router";

const AppLayoutSmall = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}

      <VideoPlayerMinimizedModal bottom={NAVIGATION_BAR_HEIGHT} />

      <NavigationDrawer links={NAVIGATION_LINKS} />

      <NavigationBarBottom
        left={<NavigationDrawerIconButton />}
        center={<AppLogo />}
        right={<ShoppingCartIconButton />}
      />

      <Gutter height={NAVIGATION_BAR_HEIGHT} />
    </>
  );
};

const AppLayoutLarge = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  return (
    <>
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

      {children}

      <VideoPlayerMinimizedModal bottom={0} />
    </>
  );
};

export const AppLayout = ({ children }: React.PropsWithChildren<{}>) => {
  const isScreenSmall = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("xs")
  );

  return (
    <>
      <VideoPlayerModal />

      {isScreenSmall ? (
        <AppLayoutSmall>{children}</AppLayoutSmall>
      ) : (
        <AppLayoutLarge>{children}</AppLayoutLarge>
      )}
    </>
  );
};
