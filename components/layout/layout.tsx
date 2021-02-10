import Container from "@material-ui/core/Container";
import { PropsWithChildren } from "react";
import { AnimationLayout } from "./animation-layout";

type ILayoutProps = PropsWithChildren<{}>;

export const Layout = (props: ILayoutProps) => {
  const { children } = props;

  return (
    <Container maxWidth="lg">
      <AnimationLayout>{children}</AnimationLayout>
    </Container>
  );
};
