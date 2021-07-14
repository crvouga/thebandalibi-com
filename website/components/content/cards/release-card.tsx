import { IRelease } from "@data-access";
import { dateToYear } from "@utility";
import {
  CardActionArea,
  CollectionImage,
  CardLayoutHeadline,
  CardLayout,
  Image,
} from "@components/generic";
import React from "react";
import { routes } from "../../shared";

export const ReleasesCard = ({ releases }: { releases: IRelease[] }) => {
  return (
    <CardActionArea href={routes.allReleases()}>
      <CardLayoutHeadline
        background={
          <CollectionImage
            aspectRatio={16 / 9}
            srcs={releases.map((release) => release.artwork)}
          />
        }
        headline={`See All Releases`}
      />
    </CardActionArea>
  );
};

export const ReleaseCard = ({ release }: { release: IRelease }) => {
  return (
    <CardActionArea href={routes.singleRelease(release.slug)}>
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
