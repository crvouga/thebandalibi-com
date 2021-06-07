import { IImageGallery, ISettings } from "@data-access";
import Box from "@material-ui/core/Box";
import CardActionArea from "@material-ui/core/CardActionArea";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { CollectionCard, ResponsiveUniformGrid } from "@ui";
import Link from "next/link";
import React from "react";
import { routes } from "../../routes";
import { PageLayout } from "../app/layout";

export type IImageGalleryProps = {
  settings: ISettings;
  imageGalleries: IImageGallery[];
};

export const ImageGallery = (props: IImageGalleryProps) => {
  const { imageGalleries, settings } = props;

  return (
    <PageLayout pageTitle={["Photos"]} settings={settings}>
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
                <CollectionCard
                  srcs={imageGallery.images.map((_) => _.url)}
                  title={imageGallery.name}
                  count={imageGallery.imageCount}
                  singularWord={"Photo"}
                />
              </CardActionArea>
            </Link>
          ))}
        </ResponsiveUniformGrid>
      </Container>
    </PageLayout>
  );
};
