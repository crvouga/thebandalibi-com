import "../styles.css";
import { AppProps } from "next/app";
import React from "react";
import { AppWrapper } from "@components/top-level";

const App = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
};

export default App;
