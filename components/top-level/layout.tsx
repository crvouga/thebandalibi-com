import { ISettings, useQuerySettings } from "@data-access";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Image } from "@ui";
import Link from "next/link";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { routes } from "../../routes";
import { theme } from "../theme";
import { VideoPlayerModal } from "../video/video-player/video-player-modal";
import { Footer } from "./footer";
import { NavigationBar } from "./navigation-bar";
import { NavigationDrawer } from "./navigation-drawer";
import { SEO } from "./seo";

export const PageLayout = ({
  children: pageComponent,
  pageTitle,
  settings,
}: {
  pageTitle: string[];
  settings: ISettings;
  hideFooter?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <>
      <SEO pageTitle={pageTitle} settings={settings} />

      <NavigationBar
        logo={
          <Link href={routes.landing()}>
            <Box width="7em">
              <Image
                src={settings.band.logo.url}
                aspectRatio={settings.band.logo.metadata.dimensions.aspectRatio}
                alt={settings.band.name}
              />
            </Box>
          </Link>
        }
      />

      {pageComponent}

      <Footer
        platformLinks={settings.band.platformLinks}
        websiteAuthor={{
          name: settings.website.author,
          url: settings.website.authorLink,
        }}
      />
    </>
  );
};

const AppLayout = ({ children }: React.PropsWithChildren<{}>) => {
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
