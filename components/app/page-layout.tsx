import React from "react";
import { ISettings } from "../../lib/domain/settings";
import { Footer } from "./footer";
import { Meta } from "./meta";

export type IPageLayoutProps = {
  title: string;
  settings: ISettings;
};

export const PageLayout = (
  props: React.PropsWithChildren<IPageLayoutProps>
) => {
  const { children, title, settings } = props;
  return (
    <>
      <Meta title={title} settings={settings} />

      {children}

      <Footer settings={settings} />
    </>
  );
};
