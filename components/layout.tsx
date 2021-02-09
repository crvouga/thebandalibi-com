import Container from "@material-ui/core/Container";
import { PropsWithChildren } from "react";

type ILayoutProps = PropsWithChildren<{}>;

export const Layout = (props: ILayoutProps) => {
  const { children } = props;

  return <Container maxWidth="lg">{children}</Container>;
};
