import Box from "@material-ui/core/Box";
import { Image } from "@components/generic";
import Link from "next/link";
import React from "react";
import { routes } from "..";
import { useQuerySettings } from "@data-access";

export const Logo = () => {
  const settingsQuery = useQuerySettings();

  if (!settingsQuery.data) {
    return null;
  }

  const settings = settingsQuery.data;

  return (
    <Link href={routes.landing()}>
      <Box sx={{ width: "7em" }}>
        <Image
          priority
          src={settings.band.logo.url}
          aspectRatio={settings.band.logo.metadata.dimensions.aspectRatio}
          alt={settings.band.name}
        />
      </Box>
    </Link>
  );
};
