import { CardActionArea, Image } from "@components/generic";
import { CardLayout } from "@components/shared";

import { IRelease } from "@data-access";
import React from "react";
import { ROUTES } from "@config";

export const ReleaseCard = ({ release }: { release: IRelease }) => {
  return (
    <CardActionArea href={ROUTES.singleRelease(release.slug)}>
      <CardLayout
        background={
          <Image aspectRatio={1} src={release.artwork} alt={release.title} />
        }
        title={release.title}
        subtitle={new Date(release.releaseDate).getFullYear()}
      />
    </CardActionArea>
  );
};
