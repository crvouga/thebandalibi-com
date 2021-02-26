import React from "react";
import { IPlatform } from "../../../lib/domain";
import { Footer } from "../../organisms/footer";

export type IPageLayoutProps = {
  platforms: IPlatform[];
};

export const PageLayout = (
  props: React.PropsWithChildren<IPageLayoutProps>
) => {
  const { children, platforms } = props;
  return (
    <React.Fragment>
      {children}
      <Footer platforms={platforms} />
    </React.Fragment>
  );
};
