import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/dist/next-server/lib/router/router";
import React from "react";
import { NavigationLayout } from "../components/layout/navigation-layout";
import { ThemeProvider } from "../components/theme";

const App = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <AnimatePresence>
      <ThemeProvider>
        <NavigationLayout>
          <Component {...pageProps} />
        </NavigationLayout>
      </ThemeProvider>
    </AnimatePresence>
  );
};

export default App;
