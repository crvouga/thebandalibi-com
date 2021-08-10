import { CardActionArea, Image, Link, UniformGrid } from "@components/generic";
import { PageWrapper } from "@components/shared";
import { LABELS, ROUTES } from "@config";
import { IRelease, ISettings } from "@data-access";
import { useTheme } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
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
  const theme = useTheme();
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

      <Container maxWidth="xs">
        <Image aspectRatio={1} alt={release.title} src={release.artwork} />
        <Box sx={{ marginY: 2 }}>
          {release.platformLinks.map((link) => {
            return (
              <CardActionArea
                doesOpenNewTab
                key={link.url}
                href={link.url}
                sx={{ marginBottom: 2 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    border: `1px solid ${theme.palette.grey[800]}`,
                    borderRadius: theme.spacing(1),
                    overflow: "hidden",
                  }}
                >
                  <Box sx={{ width: "20%", marginRight: 2 }}>
                    <Image
                      aspectRatio={1}
                      src={link.platform.appIconUrl}
                      alt={link.platform.name}
                    />
                  </Box>
                  <Typography fontWeight="bold" fontSize="1.75rem" noWrap>
                    {link.platform.name}
                  </Typography>
                </Box>
              </CardActionArea>
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
