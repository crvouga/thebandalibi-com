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
    <React.Fragment>
      <Meta
        author={settings.website.author}
        keywords={settings.website.keywords}
        title={title}
        description={settings.band.description}
        url={settings.website.url}
        iconPng={settings.website.icon}
        image={settings.website.image}
      />

      {children}

      <Footer platformsLinks={settings.band.platformLinks} />
    </React.Fragment>
  );
};
