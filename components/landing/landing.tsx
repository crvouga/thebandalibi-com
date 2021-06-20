import { IRelease, ISettings } from "@data-access";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import {
  Button,
  CardActionArea,
  CollectionCard,
  ImageCard,
  ResponsiveUniformGrid,
  useBreakpoint,
} from "generic-components";
import { dateToYear, formatCollectionCount } from "@utility";
import React from "react";
import { routes } from "../../routes";
import { PageWrapper } from "../top-level";
import { VideoGalleryCard } from "../content/video/video-gallery-card";
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
              <CardActionArea
                key={imageGallery.slug}
                href={routes.singleImageGallery(imageGallery.slug)}
              >
                <CollectionCard
                  aspectRatio={16 / 9}
                  srcs={imageGallery.images.map((image) => image.url)}
                  title={imageGallery.name}
                  subheader={formatCollectionCount({
                    singularWord: "Photo",
                    count: imageGallery.imageCount,
                  })}
                />
              </CardActionArea>
            ))}
        </ResponsiveUniformGrid>
      </LandingPageSection>

      <LandingPageSection
        title={<Typography variant="h2">Releases</Typography>}
        action={<Button href={routes.allReleases()}>See All</Button>}
      >
        <ResponsiveUniformGrid ItemProps={{ md: 3 }}>
          {releases.slice(0, 3).map((release) => (
            <CardActionArea
              key={release.slug}
              href={routes.singleRelease(release.slug)}
            >
              <ImageCard
                orientation={isSmallScreen ? "horizontal" : "vertical"}
                src={release.artwork}
                alt={release.title}
                title={release.title}
                subheader={dateToYear(release.releaseDate)}
              />
            </CardActionArea>
          ))}
        </ResponsiveUniformGrid>
      </LandingPageSection>
    </PageWrapper>
  );
};
