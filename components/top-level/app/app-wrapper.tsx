import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { theme } from "../theme";
import { AppGateway } from "./app-gateway";
import { AppLayout } from "./app-layout";

export const AppWrapper = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <AppGateway>
          <AppLayout>{children}</AppLayout>
        </AppGateway>
      </MuiThemeProvider>
    </QueryClientProvider>
  );
};
