import { Image, Link } from "@components/generic";
import { ROUTES } from "@config";
import { ISettings } from "@data-access";
import React from "react";
import { NavBar } from "../navigation";
import { PageFooter } from "./page-footer";
import { PageSeo } from "./page-seo";

export const PageNavBar = ({
  settings,
  logoHref = ROUTES.home(),
}: {
  settings: ISettings;
  logoHref?: string;
}) => {
  return (
    <NavBar
      logo={
        <Link href={logoHref} sx={{ width: "7em" }}>
          <Image
            priority
            aspectRatio={settings.band.logo.metadata.dimensions.aspectRatio}
            src={settings.band.logo.url}
            alt={settings.band.name}
          />
        </Link>
      }
    />
  );
};

export const PageWrapper = ({
  children: pageComponent,
  pageTitle,
  settings,
  logoHref = ROUTES.home(),
}: {
  pageTitle?: string[];
  settings: ISettings;
  logoHref?: string;
  children?: React.ReactNode;
}) => {
  return (
    <>
      <PageNavBar settings={settings} logoHref={logoHref} />

      <PageSeo pageTitle={pageTitle} settings={settings} />

      {pageComponent}

      <PageFooter
        contactEmailAddress={settings.band.contactEmailAddress}
        platformLinks={settings.band.platformLinks}
      />
    </>
  );
};
