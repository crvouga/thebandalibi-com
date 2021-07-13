import { IRelease, ISettings } from "@data-access";
import Box from "@material-ui/core/Box";
import { UniformGrid } from "@components/generic";
import { routes } from "../top-level";
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
        <UniformGrid>
          {videoGalleries.map((videoGallery) => (
            <VideoGalleryCard
              key={videoGallery.slug}
              videoGallery={videoGallery}
            />
          ))}
        </UniformGrid>
      ),
    },
    {
      title: "Photos",
      action: {
        href: routes.allImageGalleries(),
        label: `See All`,
      },
      content: (
        <UniformGrid>
          {imageGalleries.map((imageGallery) => (
            <ImageGalleryCard
              key={imageGallery.slug}
              imageGallery={imageGallery}
            />
          ))}
        </UniformGrid>
      ),
    },
    {
      title: "Releases",
      action: {
        href: routes.allReleases(),
        label: `See All`,
      },
      content: (
        <UniformGrid>
          {releases.slice(0, 3).map((release) => (
            <ReleaseCard key={release.slug} release={release} />
          ))}
        </UniformGrid>
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
