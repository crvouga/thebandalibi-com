import { ISettings } from "@core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { NextSeo } from "next-seo";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { theme } from "../../lib/theme";
import { VideoPlayerModal } from "../video/video-player/video-player-modal";
import { Footer } from "./footer";
import { Gutter } from "./gutter";
import { NavigationBar, NavigationDrawer } from "./navigation";
import { useQuerySettings } from "./settings";

export const formatTitle = (...words: string[]) => {
  return words.map((word) => word.trim()).join(" — ");
};

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
  const title = formatTitle(settings.band.name, ...pageTitle);
  const description = settings.band.description;

  return (
    <>
      <NextSeo
        title={title}
        defaultTitle={settings.band.name}
        description={description}
        additionalLinkTags={[
          {
            rel: "icon",
            href: settings.band.logo.url,
          },
        ]}
        additionalMetaTags={[
          {
            property: "dc:creator",
            content: settings.website.author,
          },
          {
            property: "image",
            content: settings.band.logo.url,
          },
        ]}
        twitter={{
          cardType: "summary_large_image",
          site: settings.band.name,
        }}
        openGraph={{
          url: settings.website.url,
          type: "website",
          title: title,
          description: description,
          images: [
            {
              url: settings.band.logo.url,
              width: settings.band.logo.metadata.dimensions.width,
              height: settings.band.logo.metadata.dimensions.height,
              alt: settings.band.name,
            },
          ],
          site_name: formatTitle(settings.band.name, "Official Site"),
        }}
      />

      <NavigationBar
        logoProps={{
          src: settings.band.logo.url,
          aspectRatio: settings.band.logo.metadata.dimensions.aspectRatio,
        }}
      />

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
