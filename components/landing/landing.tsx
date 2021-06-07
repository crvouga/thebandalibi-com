import { IRelease, ISettings } from "@data-access";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { routes } from "../../routes";
import { PageLayout } from "../app/layout";
import { ImageGalleryCard } from "../image/image-gallery-card";
import { ResponsiveReleaseCard } from "../release/release-card";
import { Button, CardActionArea } from "@ui";
import { ResponsiveUniformGrid } from "@ui";
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
                <ImageGalleryCard imageGallery={imageGallery} />
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
