import Container from "@material-ui/core/Container";
import { PropsWithChildren } from "react";
import { NavigationBar } from "./navigation/navigation-bar";

type ILayoutProps = PropsWithChildren<{}>;

export const Layout = (props: ILayoutProps) => {
  const { children } = props;

  return (
    <>
      <NavigationBar />
      <Container maxWidth="lg">
        <div>{children}</div>
      </Container>
    </>
  );
};
