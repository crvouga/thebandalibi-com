import Typography from "@material-ui/core/Typography";
import React, { useRef } from "react";
import "react-photoswipe/lib/photoswipe.css";
import { IImage, IImageGallery, IPlatform } from "../../lib/domain";
import { pluralize } from "../../lib/utility/words";
import { Clickable } from "../@shared/clickable";
import { Container } from "../@shared/container";
import { Header } from "../@shared/header";
import { useBoolean } from "../@shared/use-boolean";
import { ImageCard } from "../image/image-card";
import { Meta } from "../app/meta";
import { ImageSwiper } from "../@shared/image-swiper";
import { ItemGrid } from "../@shared/item-grid";
import { PageLayout } from "../app/page-layout";
import { Reveal } from "../@shared/reveal-animation";

export type IImageGallerySingleProps = {
  imageGallery: IImageGallery;
  platforms: IPlatform[];
};

export const ImageGallerySingleRoute = (slug: string) => `/photo/${slug}`;

export const ImageGallerySingle = (props: IImageGallerySingleProps) => {
  const { imageGallery, platforms } = props;

  const isOpen = useBoolean(false);
  const startIndexRef = useRef<number>(0);

  const handleImageClick = (image: IImage, index: number) => {
    isOpen.setTrue();
    startIndexRef.current = index;
  };

  return (
    <PageLayout platforms={platforms}>
      <Container>
        <Meta />

        <Header layoutId={imageGallery.slug}>
          <div>
            <Typography variant="h3">{imageGallery.name}</Typography>

            <Typography variant="subtitle1">
              {pluralize(imageGallery.images.length, "Photo")}
            </Typography>
          </div>
        </Header>

        <ItemGrid
          items={imageGallery.images}
          getItemKey={(image) => image.url}
          renderItem={(image, index) => (
            <Clickable
              onClick={() => {
                handleImageClick(image, index);
              }}
            >
              <Reveal>
                <ImageCard image={image} />
              </Reveal>
            </Clickable>
          )}
        />
      </Container>

      <ImageSwiper
        startIndex={startIndexRef.current}
        open={isOpen.value}
        onClose={isOpen.setFalse}
        images={imageGallery.images}
      />
    </PageLayout>
  );
};
