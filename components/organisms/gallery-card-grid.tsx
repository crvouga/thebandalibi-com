import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import React from "react";
import { IGallery } from "../../lib/contracts";
import { GridContainer } from "../atoms/grid-container";
import { GridItem } from "../atoms/grid-item";
import { Reveal } from "../atoms/reveal-animation";
import { GalleryCard } from "../molecules/gallery-card";

export const GalleryCardGrid = (props: { galleries: IGallery[] }) => {
  const { galleries } = props;

  return (
    <GridContainer>
      {galleries.map((gallery) => (
        <Link key={gallery.id} href={`/gallery/${gallery.slug}`}>
          <GridItem layoutId={gallery.slug} clickable>
            <Reveal>
              <GalleryCard gallery={gallery} />
            </Reveal>
          </GridItem>
        </Link>
      ))}
    </GridContainer>
  );
};
