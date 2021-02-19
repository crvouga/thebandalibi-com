import { AnimatePresence } from "framer-motion";
import { PropsWithChildren } from "react";
import { NavigationLayout } from "./navigation-layout";
import { PageLoadingLayout } from "./page-loading-layout";

export const AppLayout = (props: PropsWithChildren<{}>) => {
  const { children } = props;
  return (
    <AnimatePresence>
      <PageLoadingLayout>
        <NavigationLayout>{children}</NavigationLayout>
      </PageLoadingLayout>
    </AnimatePresence>
  );
};

export const PageLayout = (props: PropsWithChildren<{}>) => {
  const { children } = props;

  return <div>{children}</div>;
};
