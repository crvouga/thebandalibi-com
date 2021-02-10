import { AppProps } from "next/dist/next-server/lib/router/router";
import React from "react";
import { ThemeProvider } from "../components/theme";
import { Layout } from "../components/layout";
import { NavigationLayout } from "../components/navigation/navigation-layout";

const App = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <ThemeProvider>
      <NavigationLayout>
        <Component {...pageProps} />
      </NavigationLayout>
    </ThemeProvider>
  );
};

export default App;
