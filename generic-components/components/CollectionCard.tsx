import Box from "@material-ui/core/Box";
import { CollectionThumbnail } from "generic-components";
import React from "react";
import { CardHeader } from "./CardHeader";

export const CollectionCard = ({
  srcs,
  title,
  subheader,
  aspectRatio,
}: {
  srcs: string[];
  title: string;
  subheader: string;
  aspectRatio: number;
}) => {
  return (
    <Box display="flex" flexDirection="column">
      <CollectionThumbnail aspectRatio={aspectRatio} srcs={srcs} />

      <CardHeader
        titleTypographyProps={{ noWrap: true }}
        title={title}
        subheader={subheader}
      />
    </Box>
  );
};
