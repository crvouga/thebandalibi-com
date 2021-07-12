import { ISettings } from "@data-access";
import React from "react";
import { NavigationBarWrapper } from "../navigation";
import { PageFooter } from "./page-footer";
import { PageSeo } from "./page-seo";

export const PageWrapper = ({
  children: pageComponent,
  pageTitle,
  settings,
}: {
  pageTitle: string[];
  settings: ISettings;
  hideFooter?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <NavigationBarWrapper
      logoImage={{
        src: settings.band.logo.url,
        alt: settings.band.name,
        aspectRatio: settings.band.logo.metadata.dimensions.aspectRatio,
      }}
    >
      <PageSeo pageTitle={pageTitle} settings={settings} />

      {pageComponent}

      <PageFooter
        contactEmailAddress={settings.band.contactEmailAddress}
        adminUrl={settings.contentManagementDashboardUrl}
        platformLinks={settings.band.platformLinks}
        websiteAuthor={{
          name: settings.website.author,
          url: settings.website.authorUrl,
        }}
      />
    </NavigationBarWrapper>
  );
};
