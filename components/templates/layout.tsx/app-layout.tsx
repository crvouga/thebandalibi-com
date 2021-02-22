import { AnimateSharedLayout } from "framer-motion";
import { PropsWithChildren } from "react";
import { Meta } from "../../molecules/meta";
import { Footer } from "../../organisms/footer";
import { NavigationBar } from "../../organisms/navigation/navigation-bar";
import { PageLoadBar } from "./page-load-bar";

export const AppLayout = (props: PropsWithChildren<{}>) => {
  const { children } = props;
  return (
    <AnimateSharedLayout>
      <Meta />

      <PageLoadBar />

      <NavigationBar />

      {children}

      <Footer />
    </AnimateSharedLayout>
  );
};
