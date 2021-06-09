import { ISettings } from "@data-access";
import Box from "@material-ui/core/Box";
import { Image, Link } from "@ui";
import React from "react";
import { routes } from "../../../routes";
import { NavigationBar } from "../navigation/navigation-bar";
import { Footer } from "./page-footer";
import { SEO } from "./page-seo";

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
      <SEO pageTitle={pageTitle} settings={settings} />

      <NavigationBar
        logo={
          <Link href={routes.landing()}>
            <Box width="7em">
              <Image
                priority
                src={settings.band.logo.url}
                aspectRatio={settings.band.logo.metadata.dimensions.aspectRatio}
                alt={settings.band.name}
              />
            </Box>
          </Link>
        }
      />

      {pageComponent}

      <Footer
        platformLinks={settings.band.platformLinks}
        websiteAuthor={{
          name: settings.website.author,
          url: settings.website.authorLink,
        }}
      />
    </>
  );
};
