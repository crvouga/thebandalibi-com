import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { CartDrawer } from "../../commerce/cart";
import { NavigationDrawer, NAVIGATION_LINKS } from "../navigation";
import { ThemeProvider } from "../theme/theme-provider";

const queryClient = new QueryClient();

export const AppWrapper = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <CartDrawer />

        <NavigationDrawer links={NAVIGATION_LINKS} />

        {children}
      </QueryClientProvider>
    </ThemeProvider>
  );
};
