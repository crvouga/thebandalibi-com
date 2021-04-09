import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles, MuiThemeProvider } from "@material-ui/core/styles";
import Head from "next/head";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ISettings } from "../../lib/data-access/settings";
import { theme } from "../../lib/theme";
import { Gutter } from "../navigation/gutter";
import { NavigationActionBar } from "../navigation/navigation-action-bar";
import { NavigationBarLarge } from "../navigation/navigation-bar-large";
import { VideoPlayerModalMinimizedGutter } from "../video/video-player-modal-minimized-gutter";
import { VideoPlayerModal } from "../video/video-player-modal";
import { Footer } from "./footer";
import { Meta } from "./meta";

export const useStyles = makeStyles((theme) => ({
  bottom: {
    position: "fixed",
    top: "auto",
    bottom: 0,
    left: 0,
    width: "100vw",
    zIndex: theme.zIndex.appBar,
  },

  dark: {
    backgroundColor: theme.palette.background.default,
  },

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
      <Hidden xsDown implementation="css">
        <div className={classes.top}>
          <NavigationBarLarge className={classes.dark} />
        </div>
        <Gutter />
      </Hidden>

      <VideoPlayerModal />

      {children}

      <VideoPlayerModalMinimizedGutter />

      <Hidden smUp implementation="css">
        <div className={classes.bottom}>
          <Divider />
          <NavigationActionBar className={classes.dark} />
        </div>
        <Gutter />
      </Hidden>
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
