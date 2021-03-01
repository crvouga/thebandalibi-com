import Card from "@material-ui/core/Card";
import Skeleton from "@material-ui/lab/Skeleton";
import Image from "next/image";
import React from "react";
import { IImage } from "../../lib/domain";
import { AspectRatio } from "../@shared/aspect-ratio";
import { useBoolean } from "../@shared/use-boolean";
import { Fade } from "@material-ui/core";

export const ImageCard = ({ image, alt }: { image: IImage; alt: string }) => {
  const isLoaded = useBoolean(false);
  return (
    <Card>
      <AspectRatio ratio={[1, 1]}>
        <div>
          <Image
            onLoad={isLoaded.setTrue}
            objectFit="cover"
            layout="fill"
            src={image.url}
            alt={alt}
          />

          <Fade in={!isLoaded.value}>
            <Skeleton variant="rect" width="100%" height="100%" />
          </Fade>
        </div>
      </AspectRatio>
    </Card>
  );
};
