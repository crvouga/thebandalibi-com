import CssBaseline from "@material-ui/core/CssBaseline";
import Hidden from "@material-ui/core/Hidden";
import { MuiThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { NAVIGATION_LINKS } from "routes";
import { theme } from "../../theme";
import {
  VideoPlayerModalMinimized,
  VideoPlayerModalMaximized,
} from "../../video/video-player";
import { NavigationBarBottom, NavigationBarTop } from "../navigation";
import { NAV_BAR_HEIGHT } from "../navigation/navigation-constants";
import { AppLogo } from "./app-logo";

export const AppLayout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <>
      <Hidden xsDown>
        <NavigationBarTop logo={<AppLogo />} links={NAVIGATION_LINKS} />
        <VideoPlayerModalMinimized bottom={0} />
      </Hidden>

      <Hidden smUp>
        <NavigationBarBottom logo={<AppLogo />} links={NAVIGATION_LINKS} />
        <VideoPlayerModalMinimized bottom={NAV_BAR_HEIGHT} />
      </Hidden>

      <VideoPlayerModalMaximized />

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
