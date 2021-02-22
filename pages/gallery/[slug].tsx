import Typography from "@material-ui/core/Typography";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { Container } from "../../components/atoms/container";
import { Header } from "../../components/atoms/header";
import { ImageCardGrid } from "../../components/organisms/image-card-grid";
import { Meta } from "../../components/molecules/meta";
import { cms } from "../../lib/cms";
import { IGallery } from "../../lib/contracts";

type IGalleryProps = {
  gallery: IGallery;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const galleries = await cms.getGalleries();

  const paths = galleries.map((gallery) => ({
    params: {
      slug: gallery.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IGalleryProps> = async (
  context
) => {
  const slug = context?.params?.slug?.toString() ?? "";

  const gallery = await cms.getGallery(slug);

  if (gallery) {
    return {
      props: {
        gallery,
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
};

const Gallery = (props: IGalleryProps) => {
  const { gallery } = props;

  return (
    <Container layoutId={gallery.slug}>
      <Meta />

      <Header>
        <div>
          <Typography variant="h3">{gallery.name}</Typography>

          <Typography variant="subtitle1" color="initial">
            {`${gallery.images.length} Photos`}
          </Typography>
        </div>
      </Header>

      <ImageCardGrid images={gallery.images} />
    </Container>
  );
};

export default Gallery;
