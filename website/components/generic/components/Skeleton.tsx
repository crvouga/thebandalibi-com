import MuiSkeleton from "@material-ui/lab/Skeleton";
import React from "react";
import { AspectRatio } from "./AspectRatio";

export const Skeleton = ({ aspectRatio }: { aspectRatio: number }) => {
  return (
    <AspectRatio ratio={aspectRatio}>
      <MuiSkeleton
        animation="pulse"
        variant="rect"
        width="100%"
        height="100%"
      />
    </AspectRatio>
  );
};
