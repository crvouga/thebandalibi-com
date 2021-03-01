import Skeleton from "@material-ui/lab/Skeleton";
import Image from "next/image";
import React from "react";
import { IImage } from "../../lib/domain";
import { AspectRatio } from "../@shared/aspect-ratio";
import { useBoolean } from "../@shared/use-boolean";

export const ImageCard = ({ image, alt }: { image: IImage; alt: string }) => {
  const isLoaded = useBoolean(false);
  return (
    <AspectRatio ratio={[1, 1]}>
      <div>
        <Image
          onLoad={isLoaded.setTrue}
          objectFit="cover"
          layout="fill"
          src={image.url}
          alt={alt}
        />

        {!isLoaded.value && (
          <Skeleton
            animation="pulse"
            variant="rect"
            width="100%"
            height="100%"
          />
        )}
      </div>
    </AspectRatio>
  );
};
