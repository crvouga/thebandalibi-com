import Typography from "@material-ui/core/Typography";
import { GetStaticProps } from "next";
import React from "react";
import { Container } from "../../components/atoms/container";
import { Header } from "../../components/atoms/header";
import { GalleryCardGrid } from "../../components/organisms/gallery-card-grid";
import { Meta } from "../../components/molecules/meta";
import { cms } from "../../lib/cms";
import { IGallery } from "../../lib/contracts";

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
    <Container layoutId="gallery">
      <Meta />
      <Header>
        <Typography variant="h3">Gallery</Typography>
      </Header>

      <GalleryCardGrid galleries={galleries} />
    </Container>
  );
};

export default Gallery;
