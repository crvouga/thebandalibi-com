import { AppProps } from "next/app";
import React from "react";
import { AppWrapper } from "@components/shared";

const App = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
};

export default App;
