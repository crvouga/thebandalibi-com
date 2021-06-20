import { IImageGallery, ISettings } from "@data-access";
import Box from "@material-ui/core/Box";
import CardActionArea from "@material-ui/core/CardActionArea";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { CollectionCard, ResponsiveUniformGrid } from "generic-components";
import { formatCollectionCount } from "@utility";
import Link from "next/link";
import React from "react";
import { routes } from "../../../routes";
import { PageWrapper } from "../../top-level";

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
            <Link
              key={imageGallery.slug}
              href={routes.singleImageGallery(imageGallery.slug)}
            >
              <CardActionArea>
                <CollectionCard
                  aspectRatio={16 / 9}
                  srcs={imageGallery.images.map((_) => _.url)}
                  title={imageGallery.name}
                  subheader={formatCollectionCount({
                    singularWord: "Photo",
                    count: imageGallery.imageCount,
                  })}
                />
              </CardActionArea>
            </Link>
          ))}
        </ResponsiveUniformGrid>
      </Container>
    </PageWrapper>
  );
};
