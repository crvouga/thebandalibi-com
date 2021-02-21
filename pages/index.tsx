import { motion } from "framer-motion";
import { GetStaticProps } from "next";
import { GalleryGrid } from "../components/gallery/gallery-grid";
import { Meta } from "../components/meta";
import { ShowcaseSection } from "../components/showcase";
import { SocialMediaCardGrid } from "../components/social-media/social-media-card-grid";
import { useGlobalStyles } from "../components/styles";
import { VideoCardGrid } from "../components/videos/video-card-grid";
import { cms } from "../lib/cms";
import { IGallery, IShowcase, ISocialMedia, IVideo } from "../lib/contracts";
import { makeStyles, Typography, Button } from "@material-ui/core";
import clsx from "clsx";
import Link from "next/link";

type IIndexProps = {
  showcases: IShowcase[];
  videos: IVideo[];
  socialMedia: ISocialMedia[];
  galleries: IGallery[];
};

export const getStaticProps: GetStaticProps<IIndexProps> = async () => {
  return {
    props: {
      showcases: await cms.getShowcases(),
      videos: await cms.getVideos(),
      socialMedia: await cms.getSocialMedia(),
      galleries: await cms.getGalleries(),
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
  const { showcases, videos, socialMedia, galleries } = props;

  const classes = useStyles();
  const globalClasses = useGlobalStyles();

  return (
    <div>
      <Meta />

      <ShowcaseSection showcases={showcases} />

      <motion.div
        layoutId="social-media"
        className={clsx(globalClasses.container, classes.section)}
      >
        <div className={clsx(globalClasses.header, classes.header)}>
          <Typography variant="h3">Find Us Here</Typography>
        </div>
        <SocialMediaCardGrid socialMedia={socialMedia} />
      </motion.div>

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

        <GalleryGrid galleries={galleries.slice(0, 3)} />
      </motion.div>
    </div>
  );
};

export default Index;
