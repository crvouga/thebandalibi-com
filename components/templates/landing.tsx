import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import {
  IHero,
  IImageGallery,
  IPlatform,
  IRelease,
  IVideo,
} from "../../lib/domain";
import { ButtonLink } from "../atoms/button-link";
import { ClickableLink } from "../atoms/clickable";
import { Container } from "../atoms/container";
import { Header } from "../atoms/header";
import { ImageGalleryCard } from "../molecules/image-gallery-card";
import { PlatformCard } from "../molecules/platform-card";
import { ReleaseCard } from "../molecules/release-card";
import { Hero } from "../organisms/hero";
import { ItemGrid } from "../organisms/item-grid";
import { VideoCardGridWithPlayer } from "../organisms/video-card-grid-with-player";
import { PageLayout } from "./layout.tsx/page-layout";

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
                <PlatformCard platform={platform} />
              </ClickableLink>
            )}
          />
        </section>

        <section className={classes.section}>
          <Header>
            <Typography variant="h3">Videos</Typography>
            <ButtonLink href="/video">See All</ButtonLink>
          </Header>

          <VideoCardGridWithPlayer videos={videos.slice(0, 3)} />
        </section>

        <section className={classes.section}>
          <Header>
            <Typography variant="h3">Photos</Typography>
            <ButtonLink href="/photo">See All</ButtonLink>
          </Header>

          <ItemGrid
            items={imageGalleries.slice(0, 3)}
            getItemKey={(imageGallery) => imageGallery.slug}
            renderItem={(imageGallery) => (
              <ClickableLink href={`/photo/${imageGallery.slug}`}>
                <ImageGalleryCard imageGallery={imageGallery} />
              </ClickableLink>
            )}
          />
        </section>

        <section className={classes.section}>
          <Header>
            <Typography variant="h3">Music</Typography>
            <ButtonLink href="/music">See All</ButtonLink>
          </Header>

          <ItemGrid
            items={releases.slice(0, 3)}
            getItemKey={(release) => release.slug}
            renderItem={(release) => (
              <ClickableLink href={`/music/${release.slug}`}>
                <ReleaseCard release={release} />
              </ClickableLink>
            )}
          />
        </section>
      </Container>
    </PageLayout>
  );
};
