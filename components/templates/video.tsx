import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { ISettings, IVideo } from "../../lib/domain";
import { ITag } from "../../lib/domain/tag";
import { store } from "../../lib/store";
import { DocumentTitle } from "../app/meta";
import { PageLayout } from "../app/page-layout";
import { TagChipGroup } from "../tag/tag-chip";
import { VideoCardGridWithPlayer } from "../video/video-card-grid-with-player";
import classes from "*.module.css";
import { makeStyles } from "@material-ui/core";

export type IVideoGalleryProps = {
  initialVideos: IVideo[];
  tags: ITag[];
  settings: ISettings;
};

const useStyles = makeStyles((theme) => ({
  tagGroup: {
    paddingBottom: theme.spacing(2),
  },
  title: {
    paddingTop: theme.spacing(2),
  },
}));

export const VideoGallery = (props: IVideoGalleryProps) => {
  const { initialVideos, tags, settings } = props;

  const classes = useStyles();

  const [selected, setSelected] = useState<ITag | null>(null);

  const toggle = (tag: ITag) => {
    setSelected((selected) => (tag.slug === selected?.slug ? null : tag));
  };

  const query = useQuery(selected?.slug ?? "", () =>
    selected ? store.video.getAllByTagSlug(selected.slug) : initialVideos
  );

  const videos = query.data ?? initialVideos;

  return (
    <PageLayout
      title={DocumentTitle("Video", settings.band.name)}
      settings={settings}
    >
      <Container maxWidth="lg">
        <Typography className={classes.title} gutterBottom variant="h3">
          Videos
        </Typography>
      </Container>

      <Container maxWidth="lg" disableGutters>
        <TagChipGroup
          className={classes.tagGroup}
          onClick={toggle}
          selected={selected ? [selected] : []}
          tags={tags}
        />
      </Container>

      <Container maxWidth="lg">
        <VideoCardGridWithPlayer videos={videos} />
      </Container>
    </PageLayout>
  );
};
