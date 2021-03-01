import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { ISettings, IVideo } from "../../lib/domain";
import { ITag } from "../../lib/domain/tag";
import { store } from "../../lib/store";
import { DocumentTitle } from "../app/meta";
import { PageLayout } from "../app/page-layout";
import { TagChipGroup } from "../tag/tag-chip";
import {
  VideoCardGridSkeleton,
  VideoCardGridWithPlayer,
} from "../video/video-card-grid-with-player";

export type IVideoGalleryProps = {
  initialVideos: IVideo[];
  tags: ITag[];
  settings: ISettings;
};

const useStyles = makeStyles((theme) => ({
  tagGroup: {
    paddingBottom: theme.spacing(2),
  },
}));

export const VideoGallery = (props: IVideoGalleryProps) => {
  const { initialVideos, tags, settings } = props;

  const classes = useStyles();

  const [selected, setSelected] = useState<ITag | null>(null);

  const toggle = (tag: ITag) => {
    setSelected((selected) => (tag.slug === selected?.slug ? null : tag));
  };

  const query = useQuery(selected?.slug ?? "", async () => {
    if (selected) {
      return store.video.getAllByTagSlug(selected.slug);
    } else {
      return initialVideos;
    }
  });

  const videos = query.data;

  return (
    <PageLayout
      title={DocumentTitle("Video", settings.band.name)}
      settings={settings}
    >
      <Container>
        <Box paddingTop={2}>
          <Typography gutterBottom variant="h3">
            Videos
          </Typography>
        </Box>
      </Container>

      <Container disableGutters>
        <TagChipGroup
          className={classes.tagGroup}
          onClick={toggle}
          selected={selected ? [selected] : []}
          tags={tags}
        />
      </Container>

      <Container>
        {query.isLoading || !videos ? (
          <VideoCardGridSkeleton count={3} />
        ) : (
          <VideoCardGridWithPlayer videos={videos} />
        )}
      </Container>
    </PageLayout>
  );
};
