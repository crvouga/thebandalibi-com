import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import {
  IHero,
  IImageGallery,
  IPlatform,
  IRelease,
  IVideo,
} from "../../lib/domain";
import { ButtonLink } from "../@shared/button-link";
import { ClickableLink } from "../@shared/clickable";
import { Container } from "../@shared/container";
import { Header } from "../@shared/header";
import { ImageGalleryCard } from "../image/image-gallery-card";
import { PlatformCard } from "../platform/platform-card";
import { ReleaseCard } from "../release/release-card";
import { Hero } from "../hero/hero";
import { ItemGrid } from "../@shared/item-grid";
import { VideoCardGridWithPlayer } from "../video/video-card-grid-with-player";
import { PageLayout } from "../app/page-layout";
import { routes } from "../../constants/routes";
import { Reveal } from "../@shared/reveal-animation";

export type ILandingProps = {
  heros: IHero[];
  videos: IVideo[];
  platforms: IPlatform[];
  imageGalleries: IImageGallery[];
  releases: IRelease[];
};

const useStyles = makeStyles((theme) => ({
  section: {
    paddingBottom: theme.spacing(4),
  },
}));

export const Landing = (props: ILandingProps) => {
  const { heros, videos, platforms, imageGalleries, releases } = props;

  const classes = useStyles();

  return (
    <PageLayout platforms={platforms}>
      <Hero hero={heros[0]} />

      <Container>
        <section className={classes.section}>
          <Header>
            <Typography variant="h3">Find Us Here</Typography>
          </Header>

          <ItemGrid
            items={platforms}
            getItemKey={(platform) => platform.url}
            renderItem={(platform) => (
              <ClickableLink href={platform.url}>
                <Reveal>
                  <PlatformCard platform={platform} />
                </Reveal>
              </ClickableLink>
            )}
          />
        </section>

        <section className={classes.section}>
          <Header>
            <Typography variant="h3">Videos</Typography>
            <ButtonLink href={routes.allVideoGalleries()}>See All</ButtonLink>
          </Header>

          <VideoCardGridWithPlayer videos={videos.slice(0, 3)} />
        </section>

        <section className={classes.section}>
          <Header>
            <Typography variant="h3">Photos</Typography>
            <ButtonLink href={routes.allImageGalleries()}>See All</ButtonLink>
          </Header>

          <ItemGrid
            items={imageGalleries.slice(0, 3)}
            getItemKey={(imageGallery) => imageGallery.slug}
            renderItem={(imageGallery) => (
              <ClickableLink
                href={routes.singleImageGallery(imageGallery.slug)}
              >
                <Reveal>
                  <ImageGalleryCard imageGallery={imageGallery} />
                </Reveal>
              </ClickableLink>
            )}
          />
        </section>

        <section className={classes.section}>
          <Header>
            <Typography variant="h3">Music</Typography>
            <ButtonLink href={routes.allReleases()}>See All</ButtonLink>
          </Header>

          <ItemGrid
            items={releases.slice(0, 3)}
            getItemKey={(release) => release.slug}
            renderItem={(release) => (
              <ClickableLink href={routes.singleRelease(release.slug)}>
                <Reveal>
                  <ReleaseCard release={release} />
                </Reveal>
              </ClickableLink>
            )}
          />
        </section>
      </Container>
    </PageLayout>
  );
};
