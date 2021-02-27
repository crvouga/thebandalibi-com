import Typography from "@material-ui/core/Typography";
import React from "react";
import { IPlatform } from "../../lib/domain";
import { IImageGallery } from "../../lib/domain/image-gallery";
import { ClickableLink } from "../@shared/clickable";
import { Container } from "../@shared/container";
import { Header } from "../@shared/header";
import { ImageGalleryCard } from "../image/image-gallery-card";
import { Meta } from "../app/meta";
import { ItemGrid } from "../@shared/item-grid";
import { PageLayout } from "../app/page-layout";
import { routes } from "../../constants/routes";

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
            <ClickableLink href={routes.singleImageGallery(imageGallery.slug)}>
              <ImageGalleryCard imageGallery={imageGallery} />
            </ClickableLink>
          )}
        />
      </Container>
    </PageLayout>
  );
};
