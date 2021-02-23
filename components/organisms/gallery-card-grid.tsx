import Link from "next/link";
import React from "react";
import { IGallery } from "../../lib/contracts";
import { GridContainer } from "../atoms/grid-container";
import { GridItem } from "../atoms/grid-item";
import { GalleryCard } from "../molecules/gallery-card";
import { Reveal } from "../atoms/reveal-animation";

export const GalleryCardGrid = (props: { galleries: IGallery[] }) => {
  const { galleries } = props;

  return (
    <GridContainer>
      {galleries.map((gallery) => (
        <GridItem
          layoutId={gallery.slug}
          whileHover={{ scale: 0.95 }}
          whileTap={{ scale: 0.9 }}
          key={gallery.id}
        >
          <Reveal>
            <Link href={`/gallery/${gallery.slug}`}>
              <GalleryCard gallery={gallery} />
            </Link>
          </Reveal>
        </GridItem>
      ))}
    </GridContainer>
  );
};
