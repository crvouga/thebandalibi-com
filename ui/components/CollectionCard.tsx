import Box from "@material-ui/core/Box";
import { CollectionThumbnail } from "@ui";
import { abbreviateNumber, plural } from "@utility";
import React from "react";
import { CardHeader } from "./CardHeader";

export const CollectionCard = ({
  srcs,
  title,
  count,
  singularWord,
}: {
  srcs: string[];
  title: string;
  count: number;
  singularWord: string;
}) => {
  return (
    <Box display="flex" flexDirection="column">
      <CollectionThumbnail aspectRatio={16 / 9} srcs={srcs} />

      <CardHeader
        titleTypographyProps={{ noWrap: true }}
        title={title}
        subheader={plural({
          count: abbreviateNumber(count),
          singularWord: singularWord,
        })}
      />
    </Box>
  );
};
