import Card from "@material-ui/core/Card";
import Image from "next/image";
import React from "react";
import { IImage } from "../../lib/domain";
import { AspectRatio } from "../@shared/aspect-ratio";
import { SEO_KEYWORD } from "../app/meta";

export const ImageCard = ({ image }: { image: IImage }) => {
  return (
    <Card>
      <AspectRatio ratio={[1, 1]}>
        <Image
          objectFit="cover"
          layout="fill"
          src={image.url}
          alt={SEO_KEYWORD}
        />
      </AspectRatio>
    </Card>
  );
};
