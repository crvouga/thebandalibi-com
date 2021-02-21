import { AppProps } from "next/dist/next-server/lib/router/router";
import React from "react";
import { AppLayout } from "../components/layout/app-layout";
import { ThemeProvider } from "../components/theme";

const App = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <ThemeProvider>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ThemeProvider>
  );
};

export default App;
