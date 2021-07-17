import { IImageGallery, ISettings } from "@data-access";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Link, UniformGrid } from "@components/generic";
import React from "react";
import { PageWrapper, routes } from "../../shared";
import { ImageGalleryCard } from "../cards";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

export type IImageGalleryProps = {
  settings: ISettings;
  imageGalleries: IImageGallery[];
};

export const ImageGallery = (props: IImageGalleryProps) => {
  const { imageGalleries, settings } = props;

  return (
    <PageWrapper pageTitle={["Photos"]} settings={settings}>
      <Container sx={{ paddingY: 2 }}>
        <Breadcrumbs>
          <Link href={routes.landing()}>Home</Link>
          <Link>Photos</Link>
        </Breadcrumbs>

        <Typography variant="h1" color="initial">
          Photos
        </Typography>
      </Container>

      <Container disableGutters>
        <UniformGrid>
          {imageGalleries.map((imageGallery) => (
            <ImageGalleryCard
              key={imageGallery.slug}
              imageGallery={imageGallery}
            />
          ))}
        </UniformGrid>
      </Container>
    </PageWrapper>
  );
};
