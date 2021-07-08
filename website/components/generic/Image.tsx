import { AspectRatio } from "@components/generic";
import NextImage from "next/image";
import React from "react";

export const Image = ({
  src,
  alt,
  aspectRatio,
  priority = false,
  onClick,
}: {
  onClick?: () => void;
  aspectRatio: number;
  src: string;
  alt: string;
  priority?: boolean;
}) => {
  return (
    <AspectRatio
      ratio={aspectRatio}
      style={{
        position: "relative",
        width: "100%",
      }}
    >
      <NextImage
        onClick={onClick}
        priority={priority}
        objectFit="cover"
        layout="fill"
        src={src}
        alt={alt}
      />
    </AspectRatio>
  );
};
