import Container from "@material-ui/core/Container";
import { PropsWithChildren } from "react";

type ILayoutProps = PropsWithChildren<{}>;

export const SizeLayout = (props: ILayoutProps) => {
  const { children } = props;

  return (
    <Container maxWidth="lg">
      <div>{children}</div>
    </Container>
  );
};
