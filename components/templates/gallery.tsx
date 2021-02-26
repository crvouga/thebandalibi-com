import React from "react";
import { Container } from "../atoms/container";
import { Header } from "../atoms/header";
import { MotionTypography } from "../atoms/typography";
import { Meta } from "../molecules/meta";
import { GalleryCardGrid } from "../organisms/gallery-card-grid";
import { PageLayout } from "./layout.tsx/page-layout";
import { IGallery, ISocialMedia } from "../../lib/contracts";

export type IGalleryProps = {
  socialMedia: ISocialMedia[];
  galleries: IGallery[];
};

export const Gallery = (props: IGalleryProps) => {
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
