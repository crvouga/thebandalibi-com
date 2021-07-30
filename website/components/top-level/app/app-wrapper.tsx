import { CartIdContext } from "@components/commerce/cart/cart-state";
import { TOP_LEVEL_LINKS } from "@config";
import { appEventEmitter, useRouterEvents } from "@data-access";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { CartDrawer } from "@components/commerce";
import { NavDrawer } from "@components/shared";
import { ThemeProvider } from "../theme";
import { useFontLoading } from "../font-loading";

export const queryClient = new QueryClient();

export const AppWrapper = ({ children }: React.PropsWithChildren<{}>) => {
  useFontLoading();

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
