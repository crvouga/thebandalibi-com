import { PropsWithChildren } from "react";
import { Footer } from "../footer";
import { NavigationBar } from "../navigation/navigation-bar";

export const NavigationLayout = (props: PropsWithChildren<{}>) => {
  const { children } = props;

  return (
    <>
      <NavigationBar />

      {children}

      <Footer />
    </>
  );
};
