import { UniformGrid } from "@components/generic";
import {
  IImageGallery,
  IRelease,
  ISettings,
  IVideoGallery,
} from "@data-access";
import Box from "@material-ui/core/Box";
import React from "react";
import {
  ImageGalleriesCard,
  ImageGalleryCard,
  ReleaseCard,
  ReleasesCard,
  VideoGalleriesCard,
  VideoGalleryCard,
} from "../content";
import { PageWrapper, routes } from "../shared";
import { Hero } from "./hero";
import { LandingPageSection } from "./landing-page-section";

export type ILandingProps = {
  settings: ISettings;
  releases: IRelease[];
  videoGalleries: IVideoGallery[];
  imageGalleries: IImageGallery[];
};

export const Landing = (props: ILandingProps) => {
  const { videoGalleries, imageGalleries, releases, settings } = props;

  const sections = [
    {
      title: "Videos",
      action: {
        href: routes.allVideoGalleries(),
        label: `See All`,
      },
      content: (
        <UniformGrid>
          {settings.landingPage.videoGalleries
            .slice(0, 2)
            .map((videoGallery) => (
              <VideoGalleryCard
                key={videoGallery.slug}
                videoGallery={videoGallery}
              />
            ))}
          <VideoGalleriesCard videoGalleries={videoGalleries} />
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
          {settings.landingPage.imageGalleries
            .slice(0, 2)
            .map((imageGallery) => (
              <ImageGalleryCard
                key={imageGallery.slug}
                imageGallery={imageGallery}
              />
            ))}
          <ImageGalleriesCard imageGalleries={imageGalleries} />
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
          {releases.slice(0, 2).map((release) => (
            <ReleaseCard key={release.slug} release={release} />
          ))}
          <ReleasesCard releases={releases} />
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
