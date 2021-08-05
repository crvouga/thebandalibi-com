import { ISettings } from "@data-access";
import React from "react";
import { Logo } from "../logo";
import { NavBar } from "../navigation";
import { PageFooter } from "./page-footer";
import { PageSeo } from "./page-seo";

export const PageWrapper = ({
  children: pageComponent,
  pageTitle,
  settings,
  breadcrumbs,
}: {
  pageTitle: string[];
  settings: ISettings;
  hideFooter?: boolean;
  breadcrumbs?: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <>
      <NavBar
        breadcrumbs={breadcrumbs}
        logo={
          <Logo
            aspectRatio={settings.band.logo.metadata.dimensions.aspectRatio}
            src={settings.band.logo.url}
            alt={settings.band.name}
          />
        }
      />

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
    </>
  );
};
