import Typography from "@material-ui/core/Typography";
import React, { useRef } from "react";
import "react-photoswipe/lib/photoswipe.css";
import { IGallery, IImage, IPlatform } from "../../lib/contracts";
import { Container } from "../atoms/container";
import { Header } from "../atoms/header";
import { useBoolean } from "../atoms/use-boolean";
import { ImageCard } from "../molecules/image-card";
import { Meta } from "../molecules/meta";
import { ImageSwiper } from "../organisms/image-swiper";
import { ItemGrid } from "../organisms/item-grid";
import { PageLayout } from "./layout.tsx/page-layout";
import { Clickable } from "../atoms/clickable";

export type IGallerySingleProps = {
  gallery: IGallery;
  platforms: IPlatform[];
};

export const GallerySingle = (props: IGallerySingleProps) => {
  const { gallery, platforms } = props;

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

        <Header layoutId={gallery.slug}>
          <div>
            <Typography variant="h3">{gallery.name}</Typography>

            <Typography variant="subtitle1">
              {`${gallery.images.length} Photos`}
            </Typography>
          </div>
        </Header>

        <ItemGrid
          items={gallery.images}
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
        images={gallery.images}
      />
    </PageLayout>
  );
};
