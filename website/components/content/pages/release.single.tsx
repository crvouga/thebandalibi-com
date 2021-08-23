import { Image, PlatformButton, UniformGrid } from "@components/generic";
import { PageHeader, PageWrapper } from "@components/shared";
import { LABELS, ROUTES } from "@config";
import { IRelease, ISettings } from "@data-access";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
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
    >
      <PageHeader
        title={release.title}
        breadcrumbs={[
          {
            href: ROUTES.home(),
            label: LABELS.home,
          },
          {
            href: ROUTES.allReleases(),
            label: LABELS.release,
          },
          {
            label: release.title,
          },
        ]}
      />

      <Container maxWidth="xs">
        <Image aspectRatio={1} alt={release.title} src={release.artwork} />
        <Box sx={{ marginY: 2 }}>
          {release.platformLinks.map((link) => {
            return (
              <PlatformButton
                size="large"
                appIconSrc={link.platform.appIconUrl}
                key={link.url}
                href={link.url}
                doesOpenNewTab
                platformName={link.platform.name}
                sx={{
                  marginBottom: 1,
                }}
              />
            );
          })}
        </Box>
      </Container>

      <Typography sx={{ marginX: 2 }} variant="h2" align="center">
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
