import { Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { motion } from "framer-motion";
import { GetStaticProps } from "next";
import { GalleryGrid } from "../components/gallery/gallery-grid";
import { cms } from "../lib/cms";
import { IGallery } from "../lib/contracts";

import { Reveal } from "../components/reveal-animation";
import { SectionLayout } from "../components/section";

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
    <SectionLayout layoutId="gallery">
      <Reveal>
        <Typography variant="h1" color="initial">
          Gallery
        </Typography>
      </Reveal>
      <GalleryGrid galleries={galleries} />
    </SectionLayout>
  );
};

export default Gallery;
