import { IRelease, ISettings } from "@data-access";
import Box from "@material-ui/core/Box";
import { ResponsiveUniformGrid } from "generic-components";
import { routes } from "lib";
import React from "react";
import { ImageGalleryCard, ReleaseCard, VideoGalleryCard } from "../content";
import { PageWrapper } from "../top-level";
import { Hero } from "./hero";
import { LandingPageSection } from "./landing-page-section";

export type ILandingProps = {
  settings: ISettings;
  releases: IRelease[];
};

export const Landing = (props: ILandingProps) => {
  const { releases, settings } = props;

  const videoGalleries = settings.landingPage.videoGalleries.slice(0, 3);

  const imageGalleries = settings.landingPage.imageGalleries.slice(0, 3);

  const sections = [
    {
      title: "Videos",
      action: {
        href: routes.allVideoGalleries(),
        label: `See All`,
      },
      content: (
        <ResponsiveUniformGrid>
          {videoGalleries.map((videoGallery) => (
            <VideoGalleryCard
              key={videoGallery.slug}
              videoGallery={videoGallery}
            />
          ))}
        </ResponsiveUniformGrid>
      ),
    },
    {
      title: "Photos",
      action: {
        href: routes.allImageGalleries(),
        label: `See All`,
      },
      content: (
        <ResponsiveUniformGrid>
          {imageGalleries.map((imageGallery) => (
            <ImageGalleryCard
              key={imageGallery.slug}
              imageGallery={imageGallery}
            />
          ))}
        </ResponsiveUniformGrid>
      ),
    },
    {
      title: "Releases",
      action: {
        href: routes.allReleases(),
        label: `See All`,
      },
      content: (
        <ResponsiveUniformGrid>
          {releases.slice(0, 3).map((release) => (
            <ReleaseCard key={release.slug} release={release} />
          ))}
        </ResponsiveUniformGrid>
      ),
    },
  ];

  return (
    <PageWrapper pageTitle={["Official Site"]} settings={settings}>
      <Hero hero={settings.landingPage.heros[0]} />

      <Box paddingY={1} />

      {sections.map((section, index) => (
        <LandingPageSection key={index} {...section} />
      ))}
    </PageWrapper>
  );
};
