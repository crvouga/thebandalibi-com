import React from "react";
import { GridContainer } from "../atoms/grid-container";
import { GridItem } from "../atoms/grid-item";
import { Reveal } from "../atoms/reveal-animation";
import { ImageCard } from "../molecules/image-card";

export const ImageCardGrid = (props: {
  images: string[];
  onClick?: (image: string, index: number) => void;
}) => {
  const { images, onClick } = props;

  return (
    <GridContainer layoutId="images">
      {images.map((image, index) => (
        <GridItem
          clickable={Boolean(onClick)}
          layoutId={image}
          key={image}
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
