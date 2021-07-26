import {
  Image,
  Link,
  PlatformLinkCard,
  UniformGrid,
} from "@components/generic";
import { IRelease, ISettings } from "@data-access";
import Box from "@material-ui/core/Box";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { createEventEmitter } from "@utility";
import React, { useRef } from "react";
import { PageWrapper, routes } from "../../shared";
import { IVideoPlayerEvents, VideoPlayer } from "../video-player";

export type IReleaseSingleProps = {
  release: IRelease;
  settings: ISettings;
};

export const ReleaseSingle = (props: IReleaseSingleProps) => {
  const { release, settings } = props;

  const eventEmitterRef = useRef(createEventEmitter<IVideoPlayerEvents>({}));

  return (
    <PageWrapper pageTitle={["Music", release.title]} settings={settings}>
      <Container sx={{ paddingY: 2 }}>
        <Breadcrumbs>
          <Link href={routes.landing()}>Home</Link>
          <Link href={routes.allReleases()}>Music</Link>
          <Link color="text.primary">{release.title}</Link>
        </Breadcrumbs>

        <Typography variant="h1" align="center">
          {release.title}
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Image aspectRatio={1} alt={release.title} src={release.artwork} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <UniformGrid ItemProps={{ xs: 6, sm: 6, md: 4 }}>
              {release.platformLinks.map((platformLink) => (
                <Box key={platformLink.url} margin="auto" maxWidth="144px">
                  <PlatformLinkCard
                    name={platformLink.platform.name}
                    url={platformLink.url}
                  />
                </Box>
              ))}
            </UniformGrid>
          </Grid>
        </Grid>
      </Container>

      <Box paddingY={2}>
        <Container>
          <Typography variant="h2">Videos</Typography>
        </Container>
        <Container disableGutters>
          <UniformGrid>
            {release.videos.map((video) => (
              <VideoPlayer
                eventEmitter={eventEmitterRef.current}
                key={video.url}
                video={video}
              />
            ))}
          </UniformGrid>
        </Container>
      </Box>
    </PageWrapper>
  );
};
