import { AppProps } from "next/dist/next-server/lib/router/router";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { AppLayout } from "../components/app/app-layout";
import { ThemeProvider } from "../constants/theme";

const queryClient = new QueryClient();

const App = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
