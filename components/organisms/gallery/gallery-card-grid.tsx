import Link from "next/link";
import React from "react";
import { IGallery } from "../../../lib/contracts";
import { GridContainer } from "../../atoms/grid-container";
import { GridItem } from "../../atoms/grid-item";
import { GalleryCard } from "./gallery-card";
import { Reveal } from "../../molecules/reveal-animation";

export const GalleryCardGrid = (props: { galleries: IGallery[] }) => {
  const { galleries } = props;

  return (
    <GridContainer>
      {galleries.map((gallery) => (
        <Link key={gallery.id} href={`/gallery/${gallery.slug}`}>
          <GridItem
            layoutId={gallery.id}
            whileHover={{ scale: 0.95 }}
            whileTap={{ scale: 0.9 }}
          >
            <Reveal>
              <GalleryCard gallery={gallery} />
            </Reveal>
          </GridItem>
        </Link>
      ))}
    </GridContainer>
  );
};
