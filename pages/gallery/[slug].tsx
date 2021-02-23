import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { Container } from "../../components/atoms/container";
import { Header } from "../../components/atoms/header";
import { MotionTypography } from "../../components/atoms/typography";
import { Meta } from "../../components/molecules/meta";
import { ImageCardGrid } from "../../components/organisms/image-card-grid";
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
          <MotionTypography layoutId={`${gallery.slug}-title`} variant="h3">
            {gallery.name}
          </MotionTypography>

          <MotionTypography
            layoutId={`${gallery.slug}-subtitle`}
            variant="subtitle1"
          >
            {`${gallery.images.length} Photos`}
          </MotionTypography>
        </div>
      </Header>

      <ImageCardGrid images={gallery.images} />
    </Container>
  );
};

export default Gallery;
