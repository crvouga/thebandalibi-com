import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Head from "next/head";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ISettings } from "../../lib/data-access/settings";
import { theme } from "../../lib/theme";
import { VideoPlayerModalAndGutter } from "../video/video-player-modal";
import { Footer } from "./footer";
import { formatTitle, Meta } from "./meta";
import { Gutter } from "./navigation/gutter";
import { NavigationBar } from "./navigation/navigation-bar";
import { NavigationDrawer } from "./navigation/navigation-drawer";

export const PageLayout = ({
  children,
  pageTitle,
  settings,
  hideFooter,
}: React.PropsWithChildren<{
  pageTitle: string[];
  settings: ISettings;
  hideFooter?: boolean;
}>) => {
  return (
    <>
      <Meta settings={settings} />

      <Head>
        <title>{formatTitle(...pageTitle)}</title>
      </Head>

      {children}

      {!hideFooter && <Footer settings={settings} />}
    </>
  );
};

const AppLayout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <>
      <NavigationBar />

      <Gutter />

      {children}

      <VideoPlayerModalAndGutter />

      <NavigationDrawer />
    </>
  );
};

const queryClient = new QueryClient();

export const AppWrapper = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <QueryClientProvider client={queryClient}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <AppLayout>{children}</AppLayout>
      </MuiThemeProvider>
    </QueryClientProvider>
  );
};
