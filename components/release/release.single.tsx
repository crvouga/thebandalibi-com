import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { IRelease, ISettings } from "../../lib/data-access";
import { PageLayout } from "../app/layout";
import { formatTitle } from "../app/meta";
import { CardActionAreaLink } from "../shared/clickable";
import { PlatformCard } from "../shared/platform/platform-card";
import { UniformGrid } from "../shared/uniform-grid";
import { VideoCardGrid } from "../video/video-card-grid";
import { useVideoState } from "../video/video-state";
import { ReleaseArtworkCard } from "./release-card";

export type IReleaseSingleProps = {
  release: IRelease;
  settings: ISettings;
};

export const ReleaseSingle = (props: IReleaseSingleProps) => {
  const { release, settings } = props;

  const videoState = useVideoState();

  return (
    <PageLayout
      title={formatTitle(settings.band.name, "Release", release.title)}
      settings={settings}
    >
      <Container component="main">
        <Box paddingY={2}>
          <Typography align="center" variant="h1">
            {release.title}
          </Typography>
        </Box>

        <Grid component="section" container spacing={1}>
          <Grid item xs={12} sm={6}>
            <ReleaseArtworkCard variant="outlined" release={release} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <UniformGrid ItemProps={{ xs: 6, sm: 6, md: 4 }}>
              {release.platformLinks.map((platformLink) => (
                <CardActionAreaLink
                  key={platformLink.url}
                  style={{ width: "100%" }}
                  href={platformLink.url}
                >
                  <PlatformCard platform={platformLink.platform} />
                </CardActionAreaLink>
              ))}
            </UniformGrid>
          </Grid>
        </Grid>
      </Container>

      <Container disableGutters>
        <VideoCardGrid onClick={videoState.openVideo} videos={release.videos} />
      </Container>
    </PageLayout>
  );
};
