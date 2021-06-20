import { useQuerySettings } from "@data-access";
import React from "react";
import { AppLoading } from "./app-loading";
import { useIsFontsLoaded } from "./use-is-fonts-loaded";

export const AppGateway = ({ children }: { children: React.ReactNode }) => {
  const settings = useQuerySettings();
  const isFontsLoaded = useIsFontsLoaded();

  const isDataLoaded = isFontsLoaded && settings.isSuccess;

  if (isDataLoaded) {
    return <>{children}</>;
  }

  return <AppLoading />;
};
