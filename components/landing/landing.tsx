import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { IImageGallery, IProduct, IRelease } from "../../lib/data-access";
import { ISettings } from "../../lib/data-access/settings";
import { routes } from "../../lib/routes";
import { PageLayout } from "../app/layout";
import { formatTitle } from "../app/meta";
import { ImageGalleryCard } from "../image/image-gallery-card";
import { ReleaseCard } from "../release/release-card";
import { ButtonLink, CardActionAreaLink } from "../shared/clickable";
import { ResponsiveUniformGrid } from "../shared/uniform-grid";
import { VideoCardGrid } from "../video/video-card-grid";
import { useVideoState } from "../video/video-state";
import { Hero } from "./hero";

export type ILandingProps = {
  settings: ISettings;
  imageGalleries: IImageGallery[];
  releases: IRelease[];
  products: IProduct[];
};

const Section = ({
  title,
  action,
  children,
}: {
  title: React.ReactNode;
  action: React.ReactNode;
  children: React.ReactChild;
}) => {
  return (
    <Box
      component="section"
      display="flex"
      flexDirection="column"
      marginBottom={2}
    >
      <Container>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          paddingBottom={1}
        >
          {title}
          {action}
        </Box>
      </Container>
      <Container disableGutters>{children}</Container>
    </Box>
  );
};

export const Landing = (props: ILandingProps) => {
  const { imageGalleries, releases, settings } = props;

  const videoState = useVideoState();

  return (
    <PageLayout
      title={formatTitle(settings.band.name, "Official Site")}
      settings={settings}
    >
      <Hero hero={settings.landingPage.heros[0]} />

      <Section
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
      </Section>

      <Section
        title={<Typography variant="h2">Videos</Typography>}
        action={<ButtonLink href={routes.allVideos()}>See All</ButtonLink>}
      >
        <VideoCardGrid
          onClick={videoState.openVideo}
          videos={settings.landingPage.videos.slice(0, 3)}
        />
      </Section>

      <Section
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
      </Section>
    </PageLayout>
  );
};
