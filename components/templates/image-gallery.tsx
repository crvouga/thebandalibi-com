import Typography from "@material-ui/core/Typography";
import React from "react";
import { routes } from "../../constants/routes";
import { IImageGallery } from "../../lib/domain/image-gallery";
import { ISettings } from "../../lib/domain/settings";
import { ClickableLink } from "../@shared/clickable";
import { Container } from "../@shared/container";
import { Header } from "../@shared/header";
import { ItemGrid } from "../@shared/item-grid";
import { DocumentTitle } from "../app/meta";
import { PageLayout } from "../app/page-layout";
import { ImageGalleryCard } from "../image/image-gallery-card";
import { Reveal } from "../@shared/reveal-animation";

export type IImageGalleryProps = {
  settings: ISettings;
  imageGalleries: IImageGallery[];
};

export const ImageGallery = (props: IImageGalleryProps) => {
  const { imageGalleries, settings } = props;

  return (
    <PageLayout
      title={DocumentTitle("Photos", settings.band.name)}
      settings={settings}
    >
      <Container>
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
              <Reveal>
                <ImageGalleryCard imageGallery={imageGallery} />
              </Reveal>
            </ClickableLink>
          )}
        />
      </Container>
    </PageLayout>
  );
};
