import Image from "next/image";
import React from "react";
import { IImage } from "../../lib/data-access";
import { AspectRatio } from "../shared/aspect-ratio";
import Paper from "@material-ui/core/Paper";

export const ImageCard = ({ image, alt }: { image: IImage; alt: string }) => {
  return (
    <Paper>
      <AspectRatio ratio={1}>
        <Image objectFit="cover" layout="fill" src={image.url} alt={alt} />
      </AspectRatio>
    </Paper>
  );
};
