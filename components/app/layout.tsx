import Hidden from "@material-ui/core/Hidden";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "../../lib/theme";
import { ISettings } from "../../lib/domain/settings";
import { Gutter } from "../navigation/gutter";
import { NavigationActionBar } from "../navigation/navigation-action-bar";
import { NavigationBarLarge } from "../navigation/navigation-bar-large";
import { VideoPlayerModal } from "../video/video-player-modal";
import { Footer } from "./footer";
import { Meta } from "./meta";
import Head from "next/head";

export const useStyles = makeStyles((theme) => ({
  bottom: {
    position: "fixed",
    top: "auto",
    bottom: 0,
    left: 0,
    width: "100vw",
    zIndex: theme.zIndex.appBar,
  },
  top: {
    zIndex: theme.zIndex.appBar,
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
  },
}));

const NavigationLayout = ({
  settings,
  children,
}: React.PropsWithChildren<{ settings: ISettings }>) => {
  const classes = useStyles();

  return (
    <>
      <Hidden xsDown implementation="css">
        <NavigationBarLarge settings={settings} className={classes.top} />
        <Gutter />
      </Hidden>

      {children}

      <Hidden smUp implementation="css">
        <NavigationActionBar className={classes.bottom} />
        <Gutter />
      </Hidden>
    </>
  );
};

export const AppLayout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <ThemeProvider>
        <VideoPlayerModal />
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export const PageLayout = ({
  children,
  title,
  settings,
}: React.PropsWithChildren<{
  title: string;
  settings: ISettings;
}>) => {
  return (
    <NavigationLayout settings={settings}>
      <Meta settings={settings} />

      <Head>
        <title>{title}</title>
      </Head>

      {children}

      <Footer settings={settings} />
    </NavigationLayout>
  );
};
