import { IRelease, ISettings } from "@core";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { routes } from "../../lib/routes";
import { PageLayout } from "../app/layout";
import { ImageGalleryCard } from "../image/image-gallery-card";
import { ReleaseCard } from "../release/release-card";
import { ButtonLink, CardActionAreaLink } from "../shared/clickable";
import { ResponsiveUniformGrid } from "../shared/uniform-grid";
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
        title={<Typography variant="h2">Releases</Typography>}
        action={<ButtonLink href={routes.allReleases()}>See All</ButtonLink>}
      >
        <ResponsiveUniformGrid>
          {releases.slice(0, 3).map((release) => (
            <CardActionAreaLink
              key={release.slug}
              href={routes.singleRelease(release.slug)}
            >
              <ReleaseCard release={release} />
            </CardActionAreaLink>
          ))}
        </ResponsiveUniformGrid>
      </LandingPageSection>

      <LandingPageSection
        title={<Typography variant="h2">Videos</Typography>}
        action={
          <ButtonLink href={routes.allVideoGalleries()}>See All</ButtonLink>
        }
      >
        <ResponsiveUniformGrid>
          {settings.landingPage.videoGalleries
            .slice(0, 3)
            .map((videoGallery) => (
              <CardActionAreaLink
                key={videoGallery.slug}
                href={routes.singleVideoGallery(videoGallery.slug)}
              >
                <VideoGalleryCard videoGallery={videoGallery} />
              </CardActionAreaLink>
            ))}
        </ResponsiveUniformGrid>
      </LandingPageSection>

      <LandingPageSection
        title={<Typography variant="h2">Photos</Typography>}
        action={
          <ButtonLink href={routes.allImageGalleries()}>See All</ButtonLink>
        }
      >
        <ResponsiveUniformGrid>
          {settings.landingPage.imageGalleries
            .slice(0, 3)
            .map((imageGallery) => (
              <CardActionAreaLink
                key={imageGallery.slug}
                href={routes.singleImageGallery(imageGallery.slug)}
              >
                <ImageGalleryCard imageGallery={imageGallery} />
              </CardActionAreaLink>
            ))}
        </ResponsiveUniformGrid>
      </LandingPageSection>
    </PageLayout>
  );
};
