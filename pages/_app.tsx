import { AppProps } from "next/dist/next-server/lib/router/router";
import React, { useEffect } from "react";
import { AppLayout } from "../components/app/layout";
import "@fontsource/ibm-plex-sans";
import "@fontsource/bebas-neue";

const useRemoveServerSideStyles = () => {
  //why?: https://itnext.io/next-js-with-material-ui-7a7f6485f671
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");

    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
};

const App = (props: AppProps) => {
  const { Component, pageProps } = props;

  useRemoveServerSideStyles();

  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
};

export default App;
