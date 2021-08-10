import { Image, Link, UniformGrid } from "@components/generic";
import { PageWrapper, PlatformIconLinks } from "@components/shared";
import { LABELS, ROUTES } from "@config";
import { IRelease, ISettings } from "@data-access";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { createEventEmitter } from "@utility";
import React, { useRef } from "react";
import { VideoPlayerCard } from "../cards/video-player-card";
import { IVideoPlayerEvents } from "../video-player";

export type IReleaseSingleProps = {
  release: IRelease;
  settings: ISettings;
};

export const ReleaseSingle = (props: IReleaseSingleProps) => {
  const { release, settings } = props;

  const eventEmitterRef = useRef(createEventEmitter<IVideoPlayerEvents>({}));

  return (
    <PageWrapper
      pageTitle={[LABELS.release, release.title]}
      settings={settings}
      breadcrumbs={
        <Breadcrumbs>
          <Link href={ROUTES.home()}>{LABELS.home}</Link>
          <Link href={ROUTES.allReleases()}>{LABELS.release}</Link>
          <Link color="text.primary">{release.title}</Link>
        </Breadcrumbs>
      }
    >
      <Typography variant="h1" align="center" sx={{ marginX: 2 }}>
        {release.title}
      </Typography>

      <Grid container spacing={2} sx={{ marginBottom: 2 }}>
        <Grid item xs={12} sm={4}>
          <Image aspectRatio={1} alt={release.title} src={release.artwork} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h2">Listen</Typography>
          <PlatformIconLinks
            links={release.platformLinks.map((link) => ({
              href: link.url,
              label: link.platform.name,
            }))}
          />
        </Grid>
      </Grid>

      <Typography sx={{ marginX: 2 }} variant="h2">
        Videos
      </Typography>

      <UniformGrid>
        {release.videos.map((video) => (
          <VideoPlayerCard
            eventEmitter={eventEmitterRef.current}
            key={video.url}
            video={video}
          />
        ))}
      </UniformGrid>
    </PageWrapper>
  );
};
