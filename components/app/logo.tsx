import Box from "@material-ui/core/Box";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { routes } from "../../lib/routes";
import { AspectRatio } from "../shared/aspect-ratio";
import { useQuerySettings } from "./settings";

export const Logo = () => {
  const settingsQuery = useQuerySettings();

  if (!settingsQuery.data) {
    return null;
  }

  const settings = settingsQuery.data;

  return (
    <Link href={routes.landing()}>
      <Box style={{ cursor: "pointer" }} width="7em">
        <AspectRatio ratio={settings.band.logo.metadata.dimensions.aspectRatio}>
          <Image layout="fill" src={settings.band.logo.url} />
        </AspectRatio>
      </Box>
    </Link>
  );
};
