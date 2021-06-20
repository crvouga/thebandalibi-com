import CssBaseline from "@material-ui/core/CssBaseline";
import Hidden from "@material-ui/core/Hidden";
import { MuiThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { NAVIGATION_LINKS } from "routes";
import { theme } from "../../theme";
import { VideoPlayerModal } from "../../video/video-player/video-player-modal";
import { NavigationBarBottom, NavigationBarTop } from "../navigation";
import { AppLogo } from "./app-logo";

export const AppLayout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <>
      <Hidden xsDown>
        <NavigationBarTop logo={<AppLogo />} links={NAVIGATION_LINKS} />
      </Hidden>

      <Hidden smUp>
        <NavigationBarBottom logo={<AppLogo />} links={NAVIGATION_LINKS} />
      </Hidden>

      <VideoPlayerModal />

      {children}
    </>
  );
};

export const AppWrapper = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <AppLayout>{children}</AppLayout>
      </MuiThemeProvider>
    </QueryClientProvider>
  );
};
