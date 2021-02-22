import { AnimateSharedLayout } from "framer-motion";
import { PropsWithChildren } from "react";
import { Footer } from "./footer";
import { NavigationBar } from "./navigation/navigation-bar";
import { PageLoadBar } from "../molecules/page-load-bar";

export const AppLayout = (props: PropsWithChildren<{}>) => {
  const { children } = props;
  return (
    <AnimateSharedLayout>
      <PageLoadBar />

      <NavigationBar />

      {children}

      <Footer />
    </AnimateSharedLayout>
  );
};
