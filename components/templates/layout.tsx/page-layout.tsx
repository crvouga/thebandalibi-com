import React from "react";
import { ISocialMedia } from "../../../lib/contracts";
import { Footer } from "../../organisms/footer";

export const PageLayout = (
  props: React.PropsWithChildren<{ socialMedia: ISocialMedia[] }>
) => {
  const { children, socialMedia } = props;
  return (
    <React.Fragment>
      {children}
      <Footer socialMedia={socialMedia} />
    </React.Fragment>
  );
};
