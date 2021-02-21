import { AnimateSharedLayout } from "framer-motion";
import { PropsWithChildren } from "react";
import { NavigationBar } from "../navigation/navigation-bar";
import { PageLoadBar } from "../page-load-bar";

export const AppLayout = (props: PropsWithChildren<{}>) => {
  const { children } = props;
  return (
    <AnimateSharedLayout>
      <PageLoadBar />
      <NavigationBar />
      {children}
    </AnimateSharedLayout>
  );
};
