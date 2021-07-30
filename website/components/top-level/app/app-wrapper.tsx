import { CartIdContext } from "@components/commerce/cart/cart-state";
import { TOP_LEVEL_LINKS } from "@config";
import { appEventEmitter, useRouterEvents } from "@data-access";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { CartDrawer } from "@components/commerce";
import { NavDrawer } from "@components/shared";
import { FontLoadingGateway, ThemeProvider } from "../theme";

export const queryClient = new QueryClient();

export const AppWrapper = ({ children }: React.PropsWithChildren<{}>) => {
  useRouterEvents({
    eventEmitter: appEventEmitter,
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <FontLoadingGateway>
          <CartIdContext>
            <CartDrawer eventEmitter={appEventEmitter} />

            <NavDrawer eventEmitter={appEventEmitter} links={TOP_LEVEL_LINKS} />

            {children}
          </CartIdContext>
        </FontLoadingGateway>
      </ThemeProvider>
    </QueryClientProvider>
  );
};
