import { GetStaticProps } from "next";
import React from "react";
import { Container } from "../../components/atoms/container";
import { Header } from "../../components/atoms/header";
import { MotionTypography } from "../../components/atoms/typography";
import { Meta } from "../../components/molecules/meta";
import { GalleryCardGrid } from "../../components/organisms/gallery-card-grid";
import { PageLayout } from "../../components/templates/layout.tsx/page-layout";
import { cms } from "../../lib/cms";
import { IGallery, ISocialMedia } from "../../lib/contracts";

type IGalleryProps = {
  socialMedia: ISocialMedia[];
  galleries: IGallery[];
};

export const getStaticProps: GetStaticProps<IGalleryProps> = async () => {
  return {
    props: {
      socialMedia: await cms.getSocialMedia(),
      galleries: await cms.getGalleries(),
    },
  };
};

const Gallery = (props: IGalleryProps) => {
  const { galleries, socialMedia } = props;

  return (
    <PageLayout socialMedia={socialMedia}>
      <Container layoutId="gallery">
        <Meta />
        <Header>
          <MotionTypography layoutId="gallery-title" variant="h3">
            Gallery
          </MotionTypography>
        </Header>

        <GalleryCardGrid galleries={galleries} />
      </Container>
    </PageLayout>
  );
};

export default Gallery;
