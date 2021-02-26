import React from "react";
import { IPlatform } from "../../../lib/contracts";
import { Footer } from "../../organisms/footer";

export const PageLayout = (
  props: React.PropsWithChildren<{ platforms: IPlatform[] }>
) => {
  const { children, platforms } = props;
  return (
    <React.Fragment>
      {children}
      <Footer platforms={platforms} />
    </React.Fragment>
  );
};
