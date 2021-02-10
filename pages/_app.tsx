import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/dist/next-server/lib/router/router";
import React from "react";
import { NavigationLayout } from "../components/layout/navigation-layout";
import { PageLoadingLayout } from "../components/layout/page-loading-layout";
import { ThemeProvider } from "../components/theme";

const App = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <PageLoadingLayout>
      <ThemeProvider>
        <AnimatePresence>
          <NavigationLayout>
            <Component {...pageProps} />
          </NavigationLayout>
        </AnimatePresence>
      </ThemeProvider>
    </PageLoadingLayout>
  );
};

export default App;
