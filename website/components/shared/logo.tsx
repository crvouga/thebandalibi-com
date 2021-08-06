import { Image, Link } from "@components/generic";
import { useTheme } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import React from "react";
import { ROUTES } from "../../config/routes";

import classes from "./logo.module.css";

export const Logo = ({
  aspectRatio,
  src,
  alt,
}: {
  aspectRatio: number;
  src: string;
  alt: string;
}) => {
  const theme = useTheme();
  return (
    <Box sx={{ width: "7em" }}>
      <Link href={ROUTES.home()}>
        <Image
          priority
          aspectRatio={aspectRatio}
          src={src}
          alt={alt}
          className={theme.palette.mode === "dark" ? classes.invert : undefined}
        />
      </Link>
    </Box>
  );
};
