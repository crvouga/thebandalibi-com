import { IImageGallery, ISettings } from "@core";
import Box from "@material-ui/core/Box";
import CardActionArea from "@material-ui/core/CardActionArea";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import React from "react";
import { routes } from "../../lib/routes";
import { PageLayout } from "../app/layout";
import { ResponsiveUniformGrid } from "../shared/uniform-grid";
import { ImageGalleryCard } from "./image-gallery-card";

export type IImageGalleryProps = {
  settings: ISettings;
  imageGalleries: IImageGallery[];
};

export const ImageGallery = (props: IImageGalleryProps) => {
  const { imageGalleries, settings } = props;

  return (
    <PageLayout pageTitle={[settings.band.name, "Photos"]} settings={settings}>
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
            <Link
              key={imageGallery.slug}
              href={routes.singleImageGallery(imageGallery.slug)}
            >
              <CardActionArea>
                <ImageGalleryCard imageGallery={imageGallery} />
              </CardActionArea>
            </Link>
          ))}
        </ResponsiveUniformGrid>
      </Container>
    </PageLayout>
  );
};
