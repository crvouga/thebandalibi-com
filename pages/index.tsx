import { motion } from "framer-motion";
import { GetStaticProps } from "next";
import { GalleryCardGrid } from "../components/gallery/gallery-card-grid";
import { Meta } from "../components/meta";
import { ShowcaseSection } from "../components/showcase";
import { SocialMediaCardGrid } from "../components/social-media/social-media-card-grid";
import { useGlobalStyles } from "../components/styles";
import { VideoCardGrid } from "../components/videos/video-card-grid";
import { cms } from "../lib/cms";
import {
  IGallery,
  IShowcase,
  ISocialMedia,
  IVideo,
  IRelease,
} from "../lib/contracts";
import { makeStyles, Typography, Button } from "@material-ui/core";
import clsx from "clsx";
import Link from "next/link";
import { ReleaseCardGrid } from "../components/release/release-card-grid";

type IIndexProps = {
  showcases: IShowcase[];
  videos: IVideo[];
  socialMedia: ISocialMedia[];
  galleries: IGallery[];
  releases: IRelease[];
};

export const getStaticProps: GetStaticProps<IIndexProps> = async () => {
  return {
    props: {
      showcases: await cms.getShowcases(),
      videos: await cms.getVideos(),
      socialMedia: await cms.getSocialMedia(),
      galleries: await cms.getGalleries(),
      releases: await cms.getReleases(),
    },
  };
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
  const { showcases, videos, socialMedia, galleries, releases } = props;

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

      <ShowcaseSection showcases={showcases} />

      <SocialMedia />

      <Release />

      <Video />

      <Gallery />
    </div>
  );
};

export default Index;
