import { IRelease, ISettings, useVideoPlayerState } from "@data-access";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {
  Image,
  PlatformLinkCard,
  ResponsiveUniformGrid,
  UniformGrid,
} from "generic-components";
import React from "react";
import { PageWrapper } from "../../top-level";
import { VideoCard } from "../cards/video-card";

export type IReleaseSingleProps = {
  release: IRelease;
  settings: ISettings;
};

export const ReleaseSingle = (props: IReleaseSingleProps) => {
  const { release, settings } = props;

  const videoState = useVideoPlayerState();

  return (
    <PageWrapper pageTitle={["Release", release.title]} settings={settings}>
      <Container component="main">
        <Box paddingY={2}>
          <Typography align="center" variant="h1">
            {release.title}
          </Typography>
        </Box>

        <Grid component="section" container>
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
          <ResponsiveUniformGrid>
            {release.videos.map((video) => (
              <VideoCard
                video={video}
                onClick={() => {
                  videoState.openVideo(video);
                }}
              />
            ))}
          </ResponsiveUniformGrid>
        </Container>
      </Box>
    </PageWrapper>
  );
};
