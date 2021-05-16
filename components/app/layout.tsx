import { ISettings } from "@core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Head from "next/head";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { theme } from "../../lib/theme";
import { VideoPlayerModal } from "../video/video-player/video-player-modal";
import { Footer } from "./footer";
import { Gutter } from "./gutter";
import { formatTitle, Meta } from "./meta";
import { NavigationBar, NavigationDrawer } from "./navigation";
import { useQuerySettings } from "./settings";

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
      <NavigationBar
        logoProps={{
          src: settings.band.logo.url,
          aspectRatio: settings.band.logo.metadata.dimensions.aspectRatio,
        }}
      />

      <Meta settings={settings} />

      <Head>
        <title>{formatTitle(...pageTitle)}</title>
      </Head>

      {children}

      {!hideFooter && (
        <Footer
          platformLinks={settings.band.platformLinks}
          websiteAuthor={{
            name: settings.website.author,
            url: settings.website.authorLink,
          }}
        />
      )}
    </>
  );
};

const MinimizedVideoPlayerGutter = Gutter;

const AppLayout = ({ children }: React.PropsWithChildren<{}>) => {
  const settingsQuery = useQuerySettings();
  const platformLinks = settingsQuery.data?.band.platformLinks ?? [];

  return (
    <>
      <NavigationDrawer platformLinks={platformLinks} />

      <VideoPlayerModal />

      {children}

      <MinimizedVideoPlayerGutter />
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
