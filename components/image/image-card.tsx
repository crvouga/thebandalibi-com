import Card from "@material-ui/core/Card";
import Image from "next/image";
import React from "react";
import { IImage } from "../../lib/domain";
import { AspectRatio } from "../@shared/aspect-ratio";

export const ImageCard = ({ image, alt }: { image: IImage; alt: string }) => {
  return (
    <Card>
      <AspectRatio ratio={[1, 1]}>
        <Image objectFit="cover" layout="fill" src={image.url} alt={alt} />
      </AspectRatio>
    </Card>
  );
};
