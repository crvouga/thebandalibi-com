import React from "react";
import { IImage } from "../../lib/contracts";
import { GridContainer } from "../atoms/grid-container";
import { GridItem } from "../atoms/grid-item";
import { Reveal } from "../atoms/reveal-animation";
import { ImageCard } from "../molecules/image-card";

export const ImageCardGrid = (props: {
  images: IImage[];
  onClick?: (image: IImage, index: number) => void;
}) => {
  const { images, onClick } = props;

  return (
    <GridContainer>
      {images.map((image, index) => (
        <GridItem
          clickable={Boolean(onClick)}
          layoutId={image.url}
          key={image.url}
          onClick={() => {
            onClick?.(image, index);
          }}
        >
          <Reveal>
            <ImageCard image={image} />
          </Reveal>
        </GridItem>
      ))}
    </GridContainer>
  );
};
