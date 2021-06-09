import { useQuerySettings } from "@data-access";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { theme } from "../../theme";
import { VideoPlayerModal } from "../../video/video-player/video-player-modal";
import { NavigationDrawer } from "../navigation/navigation-drawer";

export const AppLayout = ({ children }: React.PropsWithChildren<{}>) => {
  const settingsQuery = useQuerySettings();
  const platformLinks = settingsQuery.data?.band.platformLinks ?? [];

  return (
    <>
      <NavigationDrawer platformLinks={platformLinks} />

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
