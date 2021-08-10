import { CartDrawer } from "@components/commerce";
import { CartIdContext } from "@components/commerce/cart/cart-state";
import { NavDrawer } from "@components/shared";
import { TOP_LEVEL_LINKS } from "@config";
import { appEventEmitter, useRouterEvents } from "@data-access";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "../theme";
import { MaxWidthWrapper } from "./max-width-wrapper";

export const queryClient = new QueryClient();

export const AppWrapper = ({ children }: React.PropsWithChildren<{}>) => {
  useRouterEvents({
    eventEmitter: appEventEmitter,
  });

  return (
    <MaxWidthWrapper>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <CartIdContext>
            <CartDrawer eventEmitter={appEventEmitter} />

            <NavDrawer eventEmitter={appEventEmitter} links={TOP_LEVEL_LINKS} />

            {children}
          </CartIdContext>
        </ThemeProvider>
      </QueryClientProvider>
    </MaxWidthWrapper>
  );
};
