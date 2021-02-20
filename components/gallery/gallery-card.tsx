import React from "react";
import { IGallery } from "../../lib/contracts";

import Card from "@material-ui/core/Card";
import { CardHeader } from "@material-ui/core";

type IGalleryCardProps = {
  gallery: IGallery;
};

export const GalleryCard = (props: IGalleryCardProps) => {
  const { gallery } = props;

  return (
    <Card>
      <CardHeader
        title={gallery.name}
        subheader={`${gallery.images.length} Pictures`}
      />
    </Card>
  );
};
