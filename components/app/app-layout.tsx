import React, { PropsWithChildren } from "react";
import { NavigationLayout } from "./navigation/navigation-layout";
import { PageLoadBar } from "./page-load-bar";

export const AppLayout = (props: PropsWithChildren<{}>) => {
  const { children } = props;
  return (
    <React.Fragment>
      <PageLoadBar />

      <NavigationLayout>{children}</NavigationLayout>
    </React.Fragment>
  );
};
