import { Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { motion } from "framer-motion";
import { GetStaticProps } from "next";
import { GalleryGrid } from "../components/gallery/gallery-grid";
import { cms } from "../lib/cms";
import { IGallery } from "../lib/contracts";
import { PAGE_VARIANTS } from "../components/layout/animation-layout";
import { Reveal } from "../components/reveal-animation";

type IGalleryProps = {
  galleries: IGallery[];
};

export const getStaticProps: GetStaticProps<IGalleryProps> = async () => {
  return {
    props: {
      galleries: await cms.getGalleries(),
    },
  };
};

const Gallery = (props: IGalleryProps) => {
  const { galleries } = props;
  return (
    <motion.div layoutId="gallery">
      <Container maxWidth="lg">
        <Reveal>
          <Typography variant="h1" color="initial">
            Gallery
          </Typography>
        </Reveal>
        <GalleryGrid galleries={galleries} />
      </Container>
    </motion.div>
  );
};

export default Gallery;
