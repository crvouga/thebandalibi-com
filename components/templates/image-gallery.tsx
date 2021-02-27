import Typography from "@material-ui/core/Typography";
import React from "react";
import { IPlatform } from "../../lib/domain";
import { IImageGallery } from "../../lib/domain/image-gallery";
import { ClickableLink } from "../atoms/clickable";
import { Container } from "../atoms/container";
import { Header } from "../atoms/header";
import { ImageGalleryCard } from "../molecules/image-gallery-card";
import { Meta } from "../molecules/meta";
import { ItemGrid } from "../organisms/item-grid";
import { PageLayout } from "./layout.tsx/page-layout";

export type IImageGalleryProps = {
  platforms: IPlatform[];
  imageGalleries: IImageGallery[];
};

export const ImageGallery = (props: IImageGalleryProps) => {
  const { imageGalleries, platforms } = props;

  return (
    <PageLayout platforms={platforms}>
      <Container>
        <Meta />

        <Header>
          <Typography variant="h3" color="initial">
            Photos
          </Typography>
        </Header>

        <ItemGrid
          items={imageGalleries}
          getItemKey={(imageGallery) => imageGallery.slug}
          renderItem={(imageGallery) => (
            <ClickableLink href={`/photo/${imageGallery.slug}`}>
              <ImageGalleryCard imageGallery={imageGallery} />
            </ClickableLink>
          )}
        />
      </Container>
    </PageLayout>
  );
};
