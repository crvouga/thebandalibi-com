import Box from "@material-ui/core/Box";
import Image from "next/image";
import React from "react";
import { AspectRatio } from "./AspectRatio";

export const CollectionImage = ({
  aspectRatio,
  srcs,
}: {
  aspectRatio: number;
  srcs: string[];
}) => {
  if (srcs.length < 1) {
    return null;
  }

  if (srcs.length < 4) {
    return (
      <AspectRatio ratio={aspectRatio}>
        <Image objectFit="cover" layout="fill" src={srcs[0]} />
      </AspectRatio>
    );
  }

  return (
    <AspectRatio ratio={aspectRatio}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%",
          height: "100%",
        }}
      >
        {srcs.slice(0, 4).map((src, index) => (
          <AspectRatio key={src} ratio={aspectRatio} style={{ width: "50%" }}>
            <Image
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
