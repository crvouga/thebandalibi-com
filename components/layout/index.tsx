import { AnimatePresence } from "framer-motion";
import { PropsWithChildren } from "react";
import { AnimationLayout } from "./animation-layout";
import { NavigationLayout } from "./navigation-layout";
import { PageLoadingLayout } from "./page-loading-layout";
import { SizeLayout } from "./size-layout";

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

  return <AnimationLayout>{children}</AnimationLayout>;
};
