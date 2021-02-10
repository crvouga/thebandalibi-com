import Container from "@material-ui/core/Container";
import { PropsWithChildren } from "react";
import { NavigationBar } from "../navigation/navigation-bar";

export const NavigationLayout = (props: PropsWithChildren<{}>) => {
  const { children } = props;

  return (
    <>
      <NavigationBar />

      {children}
    </>
  );
};
