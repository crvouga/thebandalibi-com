import Typography from "@material-ui/core/Typography";
import React from "react";
import { IImageGallery, IProduct, IRelease } from "../../lib/data-access";
import { ISettings } from "../../lib/data-access/settings";
import { IVideoGallery } from "../../lib/data-access/video-gallery";
import { routes } from "../../lib/routes";
import { PageLayout } from "../app/layout";
import { formatTitle } from "../app/meta";
import { ImageGalleryCard } from "../image/image-gallery-card";
import { ReleaseCard } from "../release/release-card";
import { ButtonLink, CardActionAreaLink } from "../shared/clickable";
import { ResponsiveUniformGrid } from "../shared/uniform-grid";
import { VideoGalleryCard } from "../video/video-gallery-card";
import { Hero } from "./hero";
import { LandingPageSection } from "./landing-page-section";

export type ILandingProps = {
  settings: ISettings;
  imageGalleries: IImageGallery[];
  videoGalleries: IVideoGallery[];
  releases: IRelease[];
  products: IProduct[];
};

export const Landing = (props: ILandingProps) => {
  const { videoGalleries, imageGalleries, releases, settings } = props;

  return (
    <PageLayout
      title={formatTitle(settings.band.name, "Official Site")}
      settings={settings}
    >
      <Hero hero={settings.landingPage.heros[0]} />

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
          {videoGalleries.slice(0, 3).map((videoGallery) => (
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
          {imageGalleries.slice(0, 3).map((imageGallery) => (
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
