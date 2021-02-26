import React, { PropsWithChildren } from "react";
import { Meta } from "../../molecules/meta";
import { NavigationLayout } from "../../organisms/navigation/navigation-layout";
import { PageLoadBar } from "./page-load-bar";

export const AppLayout = (props: PropsWithChildren<{}>) => {
  const { children } = props;
  return (
    <React.Fragment>
      <Meta />

      <PageLoadBar />

      <NavigationLayout>{children}</NavigationLayout>
    </React.Fragment>
  );
};
