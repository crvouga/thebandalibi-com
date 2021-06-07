import { IRelease, ISettings } from "@data-access";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import {
  Button,
  CardActionArea,
  CollectionCard,
  ResponsiveUniformGrid,
} from "@ui";
import React from "react";
import { routes } from "../../routes";
import { PageLayout } from "../top-level/layout";
import { ResponsiveReleaseCard } from "../release/release-card";
import { VideoGalleryCard } from "../video/video-gallery-card";
import { Hero } from "./hero";
import { LandingPageSection } from "./landing-page-section";

export type ILandingProps = {
  settings: ISettings;
  releases: IRelease[];
};

export const Landing = (props: ILandingProps) => {
  const { releases, settings } = props;

  return (
    <PageLayout pageTitle={["Official Site"]} settings={settings}>
      <Hero hero={settings.landingPage.heros[0]} />

      <Box paddingY={1} />

      <LandingPageSection
        title={<Typography variant="h2">Videos</Typography>}
        action={<Button href={routes.allVideoGalleries()}>See All</Button>}
      >
        <ResponsiveUniformGrid>
          {settings.landingPage.videoGalleries
            .slice(0, 3)
            .map((videoGallery) => (
              <CardActionArea
                key={videoGallery.slug}
                href={routes.singleVideoGallery(videoGallery.slug)}
              >
                <VideoGalleryCard videoGallery={videoGallery} />
              </CardActionArea>
            ))}
        </ResponsiveUniformGrid>
      </LandingPageSection>

      <LandingPageSection
        title={<Typography variant="h2">Photos</Typography>}
        action={<Button href={routes.allImageGalleries()}>See All</Button>}
      >
        <ResponsiveUniformGrid>
          {settings.landingPage.imageGalleries
            .slice(0, 3)
            .map((imageGallery) => (
              <CardActionArea
                key={imageGallery.slug}
                href={routes.singleImageGallery(imageGallery.slug)}
              >
                <CollectionCard
                  srcs={imageGallery.images.map((image) => image.url)}
                  title={imageGallery.name}
                  singularWord="Photo"
                  count={imageGallery.imageCount}
                />
              </CardActionArea>
            ))}
        </ResponsiveUniformGrid>
      </LandingPageSection>

      <LandingPageSection
        title={<Typography variant="h2">Releases</Typography>}
        action={<Button href={routes.allReleases()}>See All</Button>}
      >
        <ResponsiveUniformGrid ItemProps={{ md: 2 }}>
          {releases.slice(0, 3).map((release) => (
            <CardActionArea
              key={release.slug}
              href={routes.singleRelease(release.slug)}
            >
              <ResponsiveReleaseCard release={release} />
            </CardActionArea>
          ))}
        </ResponsiveUniformGrid>
      </LandingPageSection>
    </PageLayout>
  );
};
