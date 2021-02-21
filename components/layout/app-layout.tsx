import { AnimateSharedLayout } from "framer-motion";
import { PropsWithChildren } from "react";
import { NavigationBar } from "../navigation/navigation-bar";
import { PageLoadBar } from "../page-load-bar";
import { Footer } from "../footer";
import { ISocialMedia } from "../../lib/contracts";

export const AppLayout = (
  props: PropsWithChildren<{
    socialMedia: ISocialMedia[];
  }>
) => {
  const { socialMedia, children } = props;
  return (
    <AnimateSharedLayout>
      <PageLoadBar />
      <NavigationBar />

      {children}
      <Footer socialMedia={socialMedia} />
    </AnimateSharedLayout>
  );
};
