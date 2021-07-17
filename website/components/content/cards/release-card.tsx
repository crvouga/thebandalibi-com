import { CardActionArea, CardLayout, Image } from "@components/generic";
import { IRelease } from "@data-access";
import { dateToYear } from "@utility";
import React from "react";
import { routes } from "../../shared";

export const ReleaseCard = ({ release }: { release: IRelease }) => {
  return (
    <CardActionArea href={routes.singleRelease(release.slug)}>
      <CardLayout
        background={
          <Image aspectRatio={1} src={release.artwork} alt={release.title} />
        }
        title={release.title}
        subtitle={`${dateToYear(release.releaseDate)}`}
      />
    </CardActionArea>
  );
};
