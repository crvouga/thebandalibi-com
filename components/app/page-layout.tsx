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
      <Meta
        keywords={settings.website.keywords}
        author={settings.website.author}
        title={title}
        description={settings.band.description}
        url={settings.website.url}
        icon={settings.website.icon}
        image={settings.website.image}
      />

      {children}

      <Footer settings={settings} />
    </>
  );
};
