import { AppProps } from "next/dist/next-server/lib/router/router";
import React from "react";
import { AppLayout } from "../components/app/app-layout";
import { ThemeProvider } from "../constants/theme";

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
