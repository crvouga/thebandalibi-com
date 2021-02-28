import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import { ISettings, IVideo } from "../../lib/domain";
import { ITag } from "../../lib/domain/tag";
import { Container } from "../@shared/container";
import { Header } from "../@shared/header";
import { DocumentTitle } from "../app/meta";
import { PageLayout } from "../app/page-layout";
import { TagChipGroup } from "../tag/tag-chip";
import { VideoCardGridWithPlayer } from "../video/video-card-grid-with-player";
import { makeStyles } from "@material-ui/core";
import { useQuery } from "react-query";
import { store } from "../../lib/store";

export type IVideoGalleryProps = {
  initialVideos: IVideo[];
  tags: ITag[];
  settings: ISettings;
};

export const VideoGallery = (props: IVideoGalleryProps) => {
  const { initialVideos, tags, settings } = props;

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
      <Container>
        <Header>
          <div>
            <Typography gutterBottom variant="h3">
              Videos
            </Typography>
            <TagChipGroup
              onClick={toggle}
              selected={selected ? [selected] : []}
              tags={tags}
            />
          </div>
        </Header>

        <VideoCardGridWithPlayer videos={videos} />
      </Container>
    </PageLayout>
  );
};
