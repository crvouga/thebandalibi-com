import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { routes } from "../../constants/routes";
import { IImageGallery } from "../../lib/domain/image-gallery";
import { ISettings } from "../../lib/domain/settings";
import { ClickableLink } from "../@shared/clickable";

import { UniformGrid } from "../@shared/uniform-grid";
import { DocumentTitle } from "../app/meta";
import { PageLayout } from "../app/page-layout";
import { ImageGalleryCard } from "../image/image-gallery-card";
import { Box } from "@material-ui/core";

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
        <Box paddingY={2}>
          <Typography variant="h3" color="initial">
            Photos
          </Typography>
        </Box>

        <UniformGrid>
          {imageGalleries.map((imageGallery) => (
            <ClickableLink
              key={imageGallery.slug}
              href={routes.singleImageGallery(imageGallery.slug)}
            >
              <ImageGalleryCard imageGallery={imageGallery} />
            </ClickableLink>
          ))}
        </UniformGrid>
      </Container>
    </PageLayout>
  );
};
