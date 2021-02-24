import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import React from "react";
import { IGallery } from "../../lib/contracts";
import { GridContainer } from "../atoms/grid-container";
import { GridItem } from "../atoms/grid-item";
import { Reveal } from "../atoms/reveal-animation";
import { GalleryCard } from "../molecules/gallery-card";

const useStyles = makeStyles(() => ({
  pointer: {
    cursor: "pointer",
  },
}));

export const GalleryCardGrid = (props: { galleries: IGallery[] }) => {
  const { galleries } = props;

  const classes = useStyles();

  return (
    <GridContainer>
      {galleries.map((gallery) => (
        <Link key={gallery.id} href={`/gallery/${gallery.slug}`}>
          <GridItem
            className={classes.pointer}
            layoutId={gallery.slug}
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
