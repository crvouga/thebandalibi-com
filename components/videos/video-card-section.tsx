import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { IVideo } from "../../lib/contracts";
import { VideoCard } from "./video-card";

type IVideosProps = {
  videos: IVideo[];
};

export const VideoCardSection = (props: IVideosProps) => {
  const { videos } = props;

  return (
    <section>
      <Typography variant="h3" color="initial" gutterBottom>
        Videos
      </Typography>
      <Grid container>
        {videos.map((video) => (
          <Grid key={video.url} item xs={12} sm={6} md={4}>
            <VideoCard video={video} />
          </Grid>
        ))}
      </Grid>
    </section>
  );
};
