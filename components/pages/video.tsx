import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { dataStore } from "../../lib/data-store";
import { ISettings, IVideo } from "../../lib/domain";
import { ITag } from "../../lib/domain/tag";
import { useStore } from "../../lib/state-store";
import { DocumentTitle } from "../app/meta";
import { PageLayout } from "../app/page-layout";
import { TagChipGroup } from "../tag/tag-chip";
import { VideoCardGrid, VideoCardGridSkeleton } from "../video/video-card-grid";

export type IVideoGalleryProps = {
  initialVideos: IVideo[];
  tags: ITag[];
  settings: ISettings;
};

const useStyles = makeStyles((theme) => ({
  tagGroup: {
    padding: theme.spacing(2, 0),
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

const useVideoGalleryState = ({
  initialVideos,
}: {
  initialVideos: IVideo[];
}) => {
  const videoState = useStore((state) => state.video);
  const [selectedTag, setSelectedTag] = useState<ITag | null>(null);
  const query = useQuery(String(selectedTag?.slug), () => {
    if (selectedTag) {
      return dataStore.video.getAllByTagSlug(selectedTag.slug);
    } else {
      return initialVideos;
    }
  });

  const videos = query.data ?? initialVideos;

  const toggleTag = (tag: ITag) => {
    setSelectedTag((selectedTag) =>
      tag.slug === selectedTag?.slug ? null : tag
    );
  };

  const onVideoClick = (video: IVideo) => {
    videoState.setCurrentVideo(video);
    videoState.setPlayerState("open");
  };

  return {
    selectedTag,
    toggleTag,
    isLoadingVideos: query.isLoading,
    videos,
    onVideoClick,
  };
};

export const VideoGallery = (props: IVideoGalleryProps) => {
  const { initialVideos, tags, settings } = props;

  const classes = useStyles();

  const videoGalleryState = useVideoGalleryState({
    initialVideos,
  });

  return (
    <PageLayout
      title={DocumentTitle(settings.band.name, "Video")}
      settings={settings}
    >
      <Container>
        <Box paddingTop={2}>
          <Typography variant="h1">Videos</Typography>
        </Box>
      </Container>

      <Container className={classes.tagChipGroupBar} disableGutters>
        <TagChipGroup
          className={classes.tagGroup}
          onClick={videoGalleryState.toggleTag}
          selected={
            videoGalleryState.selectedTag ? [videoGalleryState.selectedTag] : []
          }
          tags={tags}
        />
      </Container>

      <Container>
        {videoGalleryState.isLoadingVideos ? (
          <VideoCardGridSkeleton count={3} />
        ) : (
          <VideoCardGrid
            onClick={videoGalleryState.onVideoClick}
            videos={videoGalleryState.videos}
          />
        )}
      </Container>
    </PageLayout>
  );
};
