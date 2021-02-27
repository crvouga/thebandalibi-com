import Card, { CardProps } from "@material-ui/core/Card";
import { IVideoGallery } from "../../lib/domain";
import { CardHeader, CardHeaderProps } from "../@shared/card-header";
import { VideoThumbnail } from "./video-thumbnail";

export const VideoGalleryCard = (
  props: CardProps & {
    videoGallery: IVideoGallery;
    CardHeaderProps?: CardHeaderProps;
  }
) => {
  const { videoGallery, CardHeaderProps, ...CardProps } = props;

  return (
    <Card {...CardProps}>
      <CardHeader
        titleTypographyProps={{ noWrap: true }}
        title={videoGallery.name}
        subheader={`${videoGallery.videos.length} Videos`}
        {...CardHeaderProps}
      />

      <VideoThumbnail video={videoGallery.videos[0]} />
    </Card>
  );
};
