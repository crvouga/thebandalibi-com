import { makeStyles, Typography } from "@material-ui/core";
import { GetStaticProps } from "next";
import React from "react";
import { ButtonLink } from "../components/atoms/button-link";
import { Container } from "../components/atoms/container";
import { Header } from "../components/atoms/header";
import { GalleryCardGrid } from "../components/organisms/gallery/gallery-card-grid";
import { Hero } from "../components/organisms/hero/hero";
import { Meta } from "../components/organisms/meta";
import { ReleaseCardGrid } from "../components/organisms/release/release-card-grid";
import { SocialMediaCardGrid } from "../components/organisms/social-media/social-media-card-grid";
import { VideoCardGrid } from "../components/organisms/videos/video-card-grid";
import { cms } from "../lib/cms";
import {
  IGallery,
  ILandingPage,
  IRelease,
  ISocialMedia,
} from "../lib/contracts";

type IIndexProps = ILandingPage & {
  socialMedia: ISocialMedia[];
  galleries: IGallery[];
  releases: IRelease[];
};

export const getStaticProps: GetStaticProps<IIndexProps> = async () => {
  const page = await cms.getLandingPage();

  if (page) {
    return {
      props: {
        heros: page.heros,
        videos: page.videos,
        socialMedia: await cms.getSocialMedia(),
        galleries: await cms.getGalleries(),
        releases: await cms.getReleases(),
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
};

const useStyles = makeStyles((theme) => ({
  section: {
    paddingBottom: theme.spacing(4),
  },
}));

const Index = (props: IIndexProps) => {
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

export default Index;
