import Box from "@material-ui/core/Box";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { routes } from "../../routes";
import { AspectRatio } from "../shared/aspect-ratio";
import Typography from "@material-ui/core/Typography";

export type ILogoProps = {
  src: string;
  aspectRatio: number;
  alt: string;
};

export const LogoImage = ({
  src,
  aspectRatio,
  alt,
}: {
  src: string;
  aspectRatio: number;
  alt: string;
}) => {
  return (
    <Link href={routes.landing()}>
      <Box style={{ cursor: "pointer" }} width="7em">
        <AspectRatio ratio={aspectRatio}>
          <Image priority layout="fill" src={src} alt={alt} />
        </AspectRatio>
      </Box>
    </Link>
  );
};

export const LogoTypography = ({ title }: { title: string }) => {
  return (
    <Link href={routes.landing()}>
      <Box style={{ cursor: "pointer" }} width="7em">
        <Typography variant="h1" color="initial" style={{ fontSize: "2.7em" }}>
          {title}
        </Typography>
      </Box>
    </Link>
  );
};
