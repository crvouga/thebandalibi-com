import { IRelease, ISettings } from "@data-access";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import {
  Button,
  CardActionArea,
  ResponsiveUniformGrid,
  useBreakpoint,
} from "generic-components";
import React from "react";
import { routes } from "../../routes";
import { ImageGalleryCard } from "../content/image";
import { ReleaseCard } from "../content/release";
import { VideoGalleryCard } from "../content/video/video-gallery-card";
import { PageWrapper } from "../top-level";
import { Hero } from "./hero";
import { LandingPageSection } from "./landing-page-section";

export type ILandingProps = {
  settings: ISettings;
  releases: IRelease[];
};

export const Landing = (props: ILandingProps) => {
  const { releases, settings } = props;

  const isSmallScreen = useBreakpoint("xs");

  return (
    <PageWrapper pageTitle={["Official Site"]} settings={settings}>
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
              <ImageGalleryCard
                key={imageGallery.slug}
                imageGallery={imageGallery}
              />
            ))}
        </ResponsiveUniformGrid>
      </LandingPageSection>

      <LandingPageSection
        title={<Typography variant="h2">Releases</Typography>}
        action={<Button href={routes.allReleases()}>See All</Button>}
      >
        <ResponsiveUniformGrid>
          {releases.slice(0, 3).map((release) => (
            <ReleaseCard key={release.slug} release={release} />
          ))}
        </ResponsiveUniformGrid>
      </LandingPageSection>
    </PageWrapper>
  );
};
