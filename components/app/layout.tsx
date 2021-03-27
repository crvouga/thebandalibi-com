import { CssBaseline, Paper } from "@material-ui/core";
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
}: React.PropsWithChildren<{
  title: string;
  settings: ISettings;
}>) => {
  const classes = useStyles();

  return (
    <>
      <Hidden xsDown implementation="css">
        <NavigationBarLarge settings={settings} className={classes.top} />
        <Gutter />
      </Hidden>

      <Meta settings={settings} />

      <Head>
        <title>{title}</title>
      </Head>

      {children}

      <Footer settings={settings} />
    </>
  );
};

const queryClient = new QueryClient();

export const AppLayout = ({ children }: React.PropsWithChildren<{}>) => {
  const classes = useStyles();

  return (
    <QueryClientProvider client={queryClient}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <VideoPlayerModal />
        {children}
        <Hidden smUp implementation="css">
          <Paper>
            <NavigationActionBar className={classes.bottom} />
          </Paper>
          <Gutter />
        </Hidden>
      </MuiThemeProvider>
    </QueryClientProvider>
  );
};
