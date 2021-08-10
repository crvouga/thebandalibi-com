import { Image } from "@components/generic";
import React from "react";
import classes from "./AppIcon.module.css";

export const AppIcon = ({ alt, src }: { alt: string; src: string }) => {
  return (
    <Image
      className={classes.borderRadius}
      alt={alt}
      aspectRatio={1}
      src={src}
    />
  );
};
