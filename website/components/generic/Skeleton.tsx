import MuiSkeleton from "@material-ui/core/Skeleton";
import React from "react";
import { AspectRatio } from "./AspectRatio";

export const Skeleton = ({ aspectRatio }: { aspectRatio: number }) => {
  return (
    <AspectRatio ratio={aspectRatio}>
      <MuiSkeleton
        animation="wave"
        variant="rectangular"
        width="100%"
        height="100%"
      />
    </AspectRatio>
  );
};
