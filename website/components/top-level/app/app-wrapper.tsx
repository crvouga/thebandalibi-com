import { QueryClientProvider } from "@data-access";
import React from "react";
import { ThemeProvider } from "../theme/theme-provider";
import { AppLayout } from "./app-layout";

export const AppWrapper = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <ThemeProvider>
      <QueryClientProvider>
        <AppLayout>{children}</AppLayout>
      </QueryClientProvider>
    </ThemeProvider>
  );
};
