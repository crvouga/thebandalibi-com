import { PropsWithChildren } from "react";
import { NavigationBar } from "./navigation-bar";
import { Container } from "@material-ui/core";

export const NavigationLayout = (props: PropsWithChildren<{}>) => {
  const { children } = props;

  return (
    <Container maxWidth="lg" disableGutters>
      <NavigationBar />
      {children}
    </Container>
  );
};
