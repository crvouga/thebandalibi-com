import Typography from "@material-ui/core/Typography";
import React from "react";
import { IGallery, IPlatform } from "../../lib/contracts";
import { Container } from "../atoms/container";
import { Header } from "../atoms/header";
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
      <Container>
        <Meta />

        <Header>
          <Typography variant="h3" color="initial">
            Gallery
          </Typography>
        </Header>

        <GalleryCardGrid galleries={galleries} />
      </Container>
    </PageLayout>
  );
};
