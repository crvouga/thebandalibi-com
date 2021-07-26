import { CartIdContext } from "@components/commerce/cart/cart-state";
import { appEventEmitter, useRouterEvents } from "@data-access";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { CartDrawer } from "../../commerce/cart";
import { NavDrawer } from "../navigation";
import { TOP_LEVEL_LINKS } from "../routes";
import { ThemeProvider } from "../theme";

export const queryClient = new QueryClient();

export const AppWrapper = ({ children }: React.PropsWithChildren<{}>) => {
  useRouterEvents({
    eventEmitter: appEventEmitter,
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <CartIdContext>
          <CartDrawer eventEmitter={appEventEmitter} />

          <NavDrawer eventEmitter={appEventEmitter} links={TOP_LEVEL_LINKS} />

          {children}
        </CartIdContext>
      </ThemeProvider>
    </QueryClientProvider>
  );
};
