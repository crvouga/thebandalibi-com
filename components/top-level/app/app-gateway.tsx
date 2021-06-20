import React from "react";
import { AppLoading } from "./app-loading";
import { useIsFontsLoaded } from "./use-is-fonts-loaded";

export const AppGateway = ({ children }: { children: React.ReactNode }) => {
  const isFontsLoaded = useIsFontsLoaded();

  const isLoaded = isFontsLoaded;

  if (isLoaded) {
    return <>{children}</>;
  }

  return <AppLoading />;
};
