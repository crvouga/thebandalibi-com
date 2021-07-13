import { CartIdContext } from "@components/commerce/cart/cart-state";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { CartDrawer } from "../../commerce/cart";
import { NavigationDrawer, NAVIGATION_LINKS } from "../navigation";
import { ThemeProvider } from "../theme/theme-provider";
import { AppEventEmitterProvider } from "./app-event-emitter";

export const queryClient = new QueryClient();

export const AppWrapper = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <AppEventEmitterProvider>
          <CartIdContext>
            <CartDrawer />

            <NavigationDrawer links={NAVIGATION_LINKS} />

            {children}
          </CartIdContext>
        </AppEventEmitterProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};
