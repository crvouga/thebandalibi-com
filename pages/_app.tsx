import { AppProps } from "next/dist/next-server/lib/router/router";
import React from "react";
import { AppLayout } from "../components/layout";
import { PageLoadingLayout } from "../components/layout/page-loading-layout";
import { ThemeProvider } from "../components/theme";

const App = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <PageLoadingLayout>
      <ThemeProvider>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ThemeProvider>
    </PageLoadingLayout>
  );
};

export default App;
