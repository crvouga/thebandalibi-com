import Box from "@material-ui/core/Box";
import CardActionArea from "@material-ui/core/CardActionArea";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import React from "react";
import { IImageGallery } from "../../lib/data-access/image-gallery";
import { ISettings } from "../../lib/data-access/settings";
import { routes } from "../../lib/routes";
import { PageLayout } from "../app/layout";
import { formatTitle } from "../app/meta";
import { ResponsiveUniformGrid } from "../shared/uniform-grid";
import { ImageGalleryCard } from "./image-gallery-card";

export type IImageGalleryProps = {
  settings: ISettings;
  imageGalleries: IImageGallery[];
};

export const ImageGallery = (props: IImageGalleryProps) => {
  const { imageGalleries, settings } = props;

  return (
    <PageLayout
      title={formatTitle(settings.band.name, "Photos")}
      settings={settings}
    >
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
