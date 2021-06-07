import { dataStore, ISettings, ITag, IVideo } from "@core";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useQuery } from "react-query";
import { descend } from "../../utility";
import { PageLayout } from "../app/layout";
import { TagChipGroup } from "./tag-chip";
import { VideoCardGrid, VideoCardGridSkeleton } from "./video-card-grid";
import { useVideoState } from "./video-state";

export type IVideoGalleryProps = {
  initialVideos: IVideo[];
  tags: ITag[];
  settings: ISettings;
};

const useStyles = makeStyles((theme) => ({
  tagGroup: {
    padding: theme.spacing(2, 0),
    paddingLeft: theme.spacing(2),
  },
  tagChipGroupBar: {
    [theme.breakpoints.down("xs")]: {
      zIndex: theme.zIndex.appBar,
      backgroundColor: theme.palette.background.default,
      position: "sticky",
      top: 0,
    },
  },
}));

export const VideoGallery = (props: IVideoGalleryProps) => {
  const { initialVideos, tags, settings } = props;

  const classes = useStyles();

  const videoState = useVideoState();

  const sortedTags = tags.sort(descend((tag) => tag.videoCount));

  const query = useQuery(String(videoState.selectedTag?.slug), () => {
    if (videoState.selectedTag) {
      return dataStore.video.getAllByTagSlug(videoState.selectedTag.slug);
    } else {
      return initialVideos;
    }
  });

  const videos = query.data ?? initialVideos;

  const handleTagClick = (tag: ITag) => {
    window.scrollTo({ top: 0 });
    videoState.toggleTag(tag);
  };

  const videoCardSkeletonCount = Math.min(
    videoState.selectedTag?.videoCount ?? initialVideos.length,
    6
  );

  return (
    <PageLayout pageTitle={["Video"]} settings={settings}>
      <Container>
        <Box paddingTop={2}>
          <Typography variant="h1">Videos</Typography>
        </Box>
      </Container>

      <Container className={classes.tagChipGroupBar} disableGutters>
        <TagChipGroup
          className={classes.tagGroup}
          onClick={handleTagClick}
          selected={videoState.selectedTag ? [videoState.selectedTag] : []}
          tags={sortedTags}
        />
      </Container>

      <Container disableGutters>
        {query.isLoading ? (
          <VideoCardGridSkeleton count={videoCardSkeletonCount} />
        ) : (
          <VideoCardGrid onClick={videoState.openVideo} videos={videos} />
        )}
      </Container>
    </PageLayout>
  );
};
