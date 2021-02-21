import { AnimateSharedLayout } from "framer-motion";
import { PropsWithChildren } from "react";
import { NavigationBar } from "../navigation/navigation-bar";

export const AppLayout = (props: PropsWithChildren<{}>) => {
  const { children } = props;
  return (
    <AnimateSharedLayout>
      <NavigationBar />
      {children}
    </AnimateSharedLayout>
  );
};
