import { ISettings } from "@data-access";
import React from "react";
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
    <>
      <PageSeo pageTitle={pageTitle} settings={settings} />

      {pageComponent}

      <PageFooter
        adminUrl={settings.contentManagementDashboardUrl}
        platformLinks={settings.band.platformLinks}
        websiteAuthor={{
          name: settings.website.author,
          url: settings.website.authorUrl,
        }}
      />
    </>
  );
};
