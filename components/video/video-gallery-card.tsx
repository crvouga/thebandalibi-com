import { IVideoGallery } from "@core";
import Box from "@material-ui/core/Box";
import { CardHeader, CollectionThumbnail } from "@ui";
import { abbreviateNumber, plural, toYouTubeThumbnailUrl } from "@utility";
import React from "react";

export const VideoGalleryCard = ({
  videoGallery,
}: {
  videoGallery: IVideoGallery;
}) => {
  return (
    <Box display="flex" flexDirection="column">
      <CollectionThumbnail
        aspectRatio={16 / 9}
        srcs={videoGallery.videos.map((video) =>
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
