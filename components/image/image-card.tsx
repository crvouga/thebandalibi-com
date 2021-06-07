import { IImage } from "@data-access";
import Image from "next/image";
import React from "react";
import { AspectRatio } from "@ui";

export const ImageCard = ({ image, alt }: { image: IImage; alt: string }) => {
  return (
    <AspectRatio ratio={1}>
      <Image objectFit="cover" layout="fill" src={image.url} alt={alt} />
    </AspectRatio>
  );
};
