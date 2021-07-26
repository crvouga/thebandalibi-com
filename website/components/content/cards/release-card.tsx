import { CardActionArea, Image } from "@components/generic";
import { IRelease } from "@data-access";
import React from "react";
import { ROUTES } from "@config";

export const ReleaseCard = ({ release }: { release: IRelease }) => {
  return (
    <CardActionArea href={ROUTES.singleRelease(release.slug)}>
      <Image aspectRatio={1} src={release.artwork} alt={release.title} />
    </CardActionArea>
  );
};
