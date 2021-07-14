import Box from "@material-ui/core/Box";
import { takeCycle } from "@utility";
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
    throw new Error("CollectionImage prop srcs can not be empty");
  }

  if (srcs.length === 1) {
    return (
      <AspectRatio ratio={aspectRatio}>
        <Image layout="fill" objectFit="cover" alt="thumbnail" src={srcs[0]} />
      </AspectRatio>
    );
  }

  const cycled = srcs.length === 2 ? srcs : takeCycle(srcs, 4);

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
        {cycled.map((src) => (
          <AspectRatio key={src} ratio={aspectRatio} style={{ width: "50%" }}>
            <Image
              key={src}
              layout="fill"
              objectFit="cover"
              alt="thumbnail"
              src={src}
            />
          </AspectRatio>
        ))}
      </Box>
    </AspectRatio>
  );
};
