import Typography from "@material-ui/core/Typography";
import React, { useRef } from "react";
import "react-photoswipe/lib/photoswipe.css";
import { IImageGallery, IImage, IPlatform } from "../../lib/domain";
import { Container } from "../atoms/container";
import { Header } from "../atoms/header";
import { useBoolean } from "../atoms/use-boolean";
import { ImageCard } from "../molecules/image-card";
import { Meta } from "../molecules/meta";
import { ImageSwiper } from "../organisms/image-swiper";
import { ItemGrid } from "../organisms/item-grid";
import { PageLayout } from "./layout.tsx/page-layout";
import { Clickable } from "../atoms/clickable";

export type IImageGallerySingleProps = {
  imageGallery: IImageGallery;
  platforms: IPlatform[];
};

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
              {`${imageGallery.images.length} Photos`}
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
              <ImageCard image={image} />
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
