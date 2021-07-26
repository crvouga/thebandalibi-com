import React from "react";
import { CardActionArea, Image } from "@components/generic";
import classes from "./AppIcon.module.css";

export const AppIcon = ({
  alt,
  href,
  src,
}: {
  alt: string;
  href?: string;
  src: string;
}) => {
  return (
    <CardActionArea className={classes.borderRadius} href={href}>
      <Image
        className={classes.borderRadius}
        alt={alt}
        aspectRatio={1}
        src={src}
      />
    </CardActionArea>
  );
};
