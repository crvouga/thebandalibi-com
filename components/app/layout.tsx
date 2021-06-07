import { ISettings } from "@data-access";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Gutter, LogoImage, theme } from "@ui";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { routes } from "../../routes";
import { NavigationBar, NavigationDrawer } from "../navigation";
import { VideoPlayerModal } from "../video/video-player/video-player-modal";
import { useQuerySettings } from "./data-access";
import { Footer } from "./footer";
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
          <LogoImage
            href={routes.landing()}
            alt={settings.band.name}
            aspectRatio={settings.band.logo.metadata.dimensions.aspectRatio}
            src={settings.band.logo.url}
          />
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

      <Gutter height={4} />
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
