import { IVideoGallery } from "@core";
import Box from "@material-ui/core/Box";
import React from "react";
import { abbreviateNumber } from "../../utility";
import { plural } from "../../utility/words";
import { toYouTubeThumbnailUrl } from "../../utility/youtube";
import { CardHeader } from "../shared/card-header";
import { CollectionImage } from "../shared/collection-image";

export const VideoGalleryCard = ({
  videoGallery,
}: {
  videoGallery: IVideoGallery;
}) => {
  return (
    <Box display="flex" flexDirection="column">
      <CollectionImage
        aspectRatio={16 / 9}
        images={videoGallery.videos.map((video) =>
          toYouTubeThumbnailUrl(video.url)
        )}
      />

      <CardHeader
        titleTypographyProps={{ noWrap: true }}
        title={videoGallery.name}
        subheader={plural({
          count: abbreviateNumber(videoGallery.videoCount),
          singularWord: "Video",
        })}
      />
    </Box>
  );
};
