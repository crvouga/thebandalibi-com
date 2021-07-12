import { useBreakpointDown } from "@utility";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { CartDrawer } from "../../commerce/cart";
import { VideoPlayerModal, VideoPlayerPopUp } from "../../content";
import {
  NavigationDrawer,
  NAVIGATION_BAR_HEIGHT,
  NAVIGATION_LINKS,
} from "../navigation";
import { ThemeProvider } from "../theme/theme-provider";

const AppWrapperInner = ({ children }: React.PropsWithChildren<{}>) => {
  const breakpointDown = useBreakpointDown();

  return (
    <>
      <CartDrawer />

      <VideoPlayerModal />

      <VideoPlayerPopUp
        bottom={breakpointDown === "sm" ? NAVIGATION_BAR_HEIGHT : 0}
      />

      <NavigationDrawer links={NAVIGATION_LINKS} />

      {children}
    </>
  );
};

const queryClient = new QueryClient();

export const AppWrapper = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <AppWrapperInner>{children}</AppWrapperInner>
      </QueryClientProvider>
    </ThemeProvider>
  );
};
