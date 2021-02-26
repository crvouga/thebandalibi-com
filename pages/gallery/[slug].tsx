import Typography from "@material-ui/core/Typography";
import { GetStaticPaths, GetStaticProps } from "next";
import React, { useRef } from "react";
import "react-photoswipe/lib/photoswipe.css";
import { Container } from "../../components/atoms/container";
import { Header } from "../../components/atoms/header";
import { useBoolean } from "../../components/atoms/use-boolean";
import { Meta } from "../../components/molecules/meta";
import { ImageCardGrid } from "../../components/organisms/image-card-grid";
import { ImageSwiper } from "../../components/organisms/image-swiper";
import { PageLayout } from "../../components/templates/layout.tsx/page-layout";
import { cms } from "../../lib/cms";
import { IGallery, IImage, ISocialMedia } from "../../lib/contracts";

type IGalleryProps = {
  gallery: IGallery;
  socialMedia: ISocialMedia[];
};

const Gallery = (props: IGalleryProps) => {
  const { gallery, socialMedia } = props;

  const isOpen = useBoolean(false);
  const startIndexRef = useRef<number>(0);

  const handleImageClick = (image: IImage, index: number) => {
    isOpen.setTrue();
    startIndexRef.current = index;
  };

  return (
    <PageLayout socialMedia={socialMedia}>
      <Container layoutId={gallery.slug}>
        <Meta />

        <Header>
          <div>
            <Typography variant="h3">{gallery.name}</Typography>

            <Typography variant="subtitle1">
              {`${gallery.images.length} Photos`}
            </Typography>
          </div>
        </Header>

        <ImageCardGrid onClick={handleImageClick} images={gallery.images} />
      </Container>

      <ImageSwiper
        startIndex={startIndexRef.current}
        open={isOpen.value}
        onClose={isOpen.setFalse}
        images={gallery.images}
      />
    </PageLayout>
  );
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
        socialMedia: await cms.getSocialMedia(),
        gallery,
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
};

export default Gallery;
