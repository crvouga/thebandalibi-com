import { IVideoGallery } from "@core";
import Card from "@material-ui/core/Card";
import React from "react";
import { abbreviateNumber } from "../../lib/utility";
import { plural } from "../../lib/utility/words";
import { toYouTubeThumbnailUrl } from "../../lib/utility/youtube";
import { CardHeader } from "../shared/card-header";
import { CollectionImage } from "../shared/collection-image";

export const VideoGalleryCard = React.forwardRef(
  (
    {
      videoGallery,
    }: {
      videoGallery: IVideoGallery;
    },
    ref
  ) => {
    return (
      <Card ref={ref}>
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
      </Card>
    );
  }
);
