import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles, MuiThemeProvider } from "@material-ui/core/styles";
import Head from "next/head";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ISettings } from "../../lib/data-access/settings";
import { theme } from "../../lib/theme";
import { VideoPlayerModalAndGutter } from "../video/video-player-modal";
import { Footer } from "./footer";
import { Meta } from "./meta";
import { Gutter } from "./navigation/gutter";
import { NavigationBar } from "./navigation/navigation-bar";
import { NavigationDrawer } from "./navigation/navigation-drawer";

export const useStyles = makeStyles((theme) => ({
  top: {
    zIndex: theme.zIndex.appBar,
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
  },
}));

export const PageLayout = ({
  children,
  title,
  settings,
  hideFooter,
}: React.PropsWithChildren<{
  title: string;
  settings: ISettings;
  hideFooter?: boolean;
}>) => {
  return (
    <>
      <Meta settings={settings} />

      <Head>
        <title>{title}</title>
      </Head>

      {children}

      {!hideFooter && <Footer settings={settings} />}
    </>
  );
};

const queryClient = new QueryClient();

const AppLayout = ({ children }: React.PropsWithChildren<{}>) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.top}>
        <NavigationBar />
      </div>

      <Gutter />

      {children}

      <VideoPlayerModalAndGutter />

      <NavigationDrawer />
    </>
  );
};

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
