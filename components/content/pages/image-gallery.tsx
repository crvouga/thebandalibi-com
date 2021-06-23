import { IImageGallery, ISettings } from "@data-access";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { ResponsiveUniformGrid } from "generic-components";
import React from "react";
import { PageWrapper } from "../../top-level";
import { ImageGalleryCard } from "../cards";

export type IImageGalleryProps = {
  settings: ISettings;
  imageGalleries: IImageGallery[];
};

export const ImageGallery = (props: IImageGalleryProps) => {
  const { imageGalleries, settings } = props;

  return (
    <PageWrapper pageTitle={["Photos"]} settings={settings}>
      <Container>
        <Box paddingY={2}>
          <Typography variant="h1" color="initial">
            Photos
          </Typography>
        </Box>
      </Container>

      <Container disableGutters>
        <ResponsiveUniformGrid>
          {imageGalleries.map((imageGallery) => (
            <ImageGalleryCard
              key={imageGallery.slug}
              imageGallery={imageGallery}
            />
          ))}
        </ResponsiveUniformGrid>
      </Container>
    </PageWrapper>
  );
};
