import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import {
  IGallery,
  IHero,
  IRelease,
  ISocialMedia,
  IVideo,
} from "../../lib/contracts";
import { ButtonLink } from "../atoms/button-link";
import { Container } from "../atoms/container";
import { Header } from "../atoms/header";
import { GalleryCardGrid } from "../organisms/gallery-card-grid";
import { Hero } from "../organisms/hero";
import { Meta } from "../molecules/meta";
import { ReleaseCardGrid } from "../organisms/release-card-grid";
import { SocialMediaCardGrid } from "../organisms/social-media-card-grid";
import { VideoCardGrid } from "../organisms/video-card-grid";

export type ILandingPageProps = {
  heros: IHero[];
  videos: IVideo[];
  socialMedia: ISocialMedia[];
  galleries: IGallery[];
  releases: IRelease[];
};

const useStyles = makeStyles((theme) => ({
  section: {
    paddingBottom: theme.spacing(4),
  },
}));

export const LandingPage = (props: ILandingPageProps) => {
  const { heros, videos, socialMedia, galleries, releases } = props;

  const classes = useStyles();

  return (
    <React.Fragment>
      <Meta />

      <Hero hero={heros[0]} />

      <Container layoutId="social-media" className={classes.section}>
        <Header>
          <Typography variant="h3">Find Us Here</Typography>
        </Header>

        <SocialMediaCardGrid socialMedia={socialMedia} />
      </Container>

      <Container layoutId="video" className={classes.section}>
        <Header>
          <Typography variant="h3">Video</Typography>
          <ButtonLink href="/video">See All</ButtonLink>
        </Header>

        <VideoCardGrid videos={videos.slice(0, 3)} />
      </Container>

      <Container layoutId="music" className={classes.section}>
        <Header>
          <Typography variant="h3">Music</Typography>
          <ButtonLink href="/music">See All</ButtonLink>
        </Header>

        <ReleaseCardGrid releases={releases.slice(0, 3)} />
      </Container>

      <Container layoutId="gallery" className={classes.section}>
        <Header>
          <Typography variant="h3">Gallery</Typography>
          <ButtonLink href="/gallery">See All</ButtonLink>
        </Header>

        <GalleryCardGrid galleries={galleries.slice(0, 3)} />
      </Container>
    </React.Fragment>
  );
};
