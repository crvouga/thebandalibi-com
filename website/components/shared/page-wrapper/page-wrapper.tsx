import { ISettings } from "@data-access";
import React from "react";
import { Link } from "@components/generic";
import { Logo } from "../logo";
import { NavBar } from "../navigation";
import { PageFooter } from "./page-footer";
import { PageSeo } from "./page-seo";
import { ROUTES } from "@config";
import Container from "@material-ui/core/Container";

export const PageWrapper = ({
  children: pageComponent,
  pageTitle,
  settings,
  breadcrumbs,
  logoHref = ROUTES.home(),
}: {
  pageTitle: string[];
  settings: ISettings;
  hideFooter?: boolean;
  breadcrumbs?: React.ReactNode;
  logoHref?: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <NavBar
        breadcrumbs={breadcrumbs}
        logo={
          <Link href={logoHref}>
            <Logo
              aspectRatio={settings.band.logo.metadata.dimensions.aspectRatio}
              src={settings.band.logo.url}
              alt={settings.band.name}
            />
          </Link>
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
