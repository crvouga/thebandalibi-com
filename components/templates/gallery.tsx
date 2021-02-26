import React from "react";
import { IGallery, IPlatform } from "../../lib/contracts";
import { Container } from "../atoms/container";
import { Header } from "../atoms/header";
import { MotionTypography } from "../atoms/typography";
import { Meta } from "../molecules/meta";
import { GalleryCardGrid } from "../organisms/gallery-card-grid";
import { PageLayout } from "./layout.tsx/page-layout";

export type IGalleryProps = {
  platforms: IPlatform[];
  galleries: IGallery[];
};

export const Gallery = (props: IGalleryProps) => {
  const { galleries, platforms } = props;

  return (
    <PageLayout platforms={platforms}>
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
