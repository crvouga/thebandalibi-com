import { AppProps } from "next/dist/next-server/lib/router/router";
import React from "react";
import { AppLayout } from "../components/app/layout";

const App = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
};

export default App;
