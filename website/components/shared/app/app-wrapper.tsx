import { CartIdContext } from "@components/commerce/cart/cart-state";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { CartDrawer } from "../../commerce/cart";
import { NavigationDrawer, NAVIGATION_LINKS } from "../navigation";
import { ThemeProvider } from "../theme/theme-provider";
import { appEventEmitter, useRouterEvents } from "./app-event-emitter";

export const queryClient = new QueryClient();

export const AppWrapper = ({ children }: React.PropsWithChildren<{}>) => {
  useRouterEvents({
    eventEmitter: appEventEmitter,
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <CartIdContext>
          <CartDrawer />

          <NavigationDrawer links={NAVIGATION_LINKS} />

          {children}
        </CartIdContext>
      </ThemeProvider>
    </QueryClientProvider>
  );
};
