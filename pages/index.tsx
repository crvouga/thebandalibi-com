import { Button, makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import { motion } from "framer-motion";
import { GetStaticProps } from "next";
import Link from "next/link";
import { GalleryCardGrid } from "../components/gallery/gallery-card-grid";
import { Hero } from "../components/hero/hero";
import { Meta } from "../components/meta";
import { ReleaseCardGrid } from "../components/release/release-card-grid";
import { SocialMediaCardGrid } from "../components/social-media/social-media-card-grid";
import { useGlobalStyles } from "../components/styles";
import { VideoCardGrid } from "../components/videos/video-card-grid";
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
  header: {
    padding: theme.spacing(2, 0),
  },
}));

const Index = (props: IIndexProps) => {
  const { heros, videos, socialMedia, galleries, releases } = props;

  const classes = useStyles();
  const globalClasses = useGlobalStyles();

  const SocialMedia = () => {
    return (
      <motion.div
        layoutId="social-media"
        className={clsx(globalClasses.container, classes.section)}
      >
        <div className={clsx(globalClasses.header, classes.header)}>
          <Typography variant="h3">Find Us Here</Typography>
        </div>
        <SocialMediaCardGrid socialMedia={socialMedia} />
      </motion.div>
    );
  };

  const Video = () => {
    return (
      <motion.div
        layoutId="video"
        className={clsx(globalClasses.container, classes.section)}
      >
        <div className={clsx(globalClasses.header, classes.header)}>
          <Typography variant="h3">Video</Typography>
          <Link href="/video">
            <Button size="large">See All</Button>
          </Link>
        </div>

        <VideoCardGrid videos={videos.slice(0, 3)} />
      </motion.div>
    );
  };

  const Gallery = () => {
    return (
      <motion.div
        layoutId="gallery"
        className={clsx(globalClasses.container, classes.section)}
      >
        <div className={clsx(globalClasses.header, classes.header)}>
          <Typography variant="h3">Gallery</Typography>
          <Link href="/gallery">
            <Button size="large">See All</Button>
          </Link>
        </div>

        <GalleryCardGrid galleries={galleries.slice(0, 3)} />
      </motion.div>
    );
  };

  const Release = () => {
    return (
      <motion.div
        layoutId="release"
        className={clsx(globalClasses.container, classes.section)}
      >
        <div className={clsx(globalClasses.header, classes.header)}>
          <Typography variant="h3">Music</Typography>
          <Link href="/music">
            <Button size="large">See All</Button>
          </Link>
        </div>

        <ReleaseCardGrid releases={releases.slice(0, 3)} />
      </motion.div>
    );
  };

  return (
    <div>
      <Meta />

      <Hero hero={heros[0]} />

      <SocialMedia />

      <Video />

      <Release />

      <Gallery />
    </div>
  );
};

export default Index;
