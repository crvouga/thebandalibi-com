import { IRelease } from "@data-access";
import { dateToYear } from "@utility";
import { CardActionArea, CardLayout, Image } from "@components/generic";
import React from "react";
import { routes } from "../../top-level";

export const ReleaseCard = ({ release }: { release: IRelease }) => {
  return (
    <CardActionArea
      key={release.slug}
      href={routes.singleRelease(release.slug)}
    >
      <CardLayout
        background={
          <Image
            aspectRatio={16 / 9}
            src={release.artwork}
            alt={release.title}
          />
        }
        title={release.title}
        subtitle={`${dateToYear(release.releaseDate)}`}
      />
    </CardActionArea>
  );
};
