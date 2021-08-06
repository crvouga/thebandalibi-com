import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AspectRatio } from "./AspectRatio";

export type ILogoProps = {
  src: string;
  aspectRatio: number;
  alt: string;
};

export const LogoImage = ({
  src,
  aspectRatio,
  alt,
  href,
}: {
  href: string;
  src: string;
  aspectRatio: number;
  alt: string;
}) => {
  return (
    <Link passHref href={href}>
      <Box style={{ cursor: "pointer" }} width="7em">
        <AspectRatio ratio={aspectRatio}>
          <Image priority layout="fill" src={src} alt={alt} />
        </AspectRatio>
      </Box>
    </Link>
  );
};

export const LogoTypography = ({
  title,
  href,
}: {
  href: string;
  title: string;
}) => {
  return (
    <Link passHref href={href}>
      <Box style={{ cursor: "pointer" }} width="7em">
        <Typography variant="h1" style={{ fontSize: "2.7em" }}>
          {title}
        </Typography>
      </Box>
    </Link>
  );
};
