import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "../theme/theme-provider";
import { AppLayout } from "./app-layout";

const queryClient = new QueryClient();

export const AppWrapper = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <AppLayout>{children}</AppLayout>
      </QueryClientProvider>
    </ThemeProvider>
  );
};
