import Box from "@material-ui/core/Box";
import Image from "next/image";
import React from "react";
import { AspectRatio } from "./AspectRatio";

export const CollectionThumbnail = ({
  aspectRatio,
  priority,
  srcs,
}: {
  priority?: boolean;
  aspectRatio: number;
  srcs: string[];
}) => {
  if (srcs.length < 1) {
    return null;
  }

  if (srcs.length < 4) {
    return (
      <AspectRatio ratio={aspectRatio}>
        <Image
          priority={priority}
          objectFit="cover"
          layout="fill"
          src={srcs[0]}
          alt={"collection thumbnail"}
        />
      </AspectRatio>
    );
  }

  return (
    <AspectRatio ratio={aspectRatio}>
      <Box
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        width="100%"
        height="100%"
      >
        {srcs.slice(0, 4).map((src, index) => (
          <AspectRatio key={src} ratio={aspectRatio} style={{ width: "50%" }}>
            <Image
              priority={priority}
              key={src}
              layout="fill"
              objectFit="cover"
              alt={`collection thumbnial position ${index}`}
              src={src}
            />
          </AspectRatio>
        ))}
      </Box>
    </AspectRatio>
  );
};
