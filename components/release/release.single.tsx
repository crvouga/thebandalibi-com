import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { IRelease, ISettings } from "@data-access";
import { PageLayout } from "../app/layout";
import { CardActionArea } from "@ui";
import { PlatformCard } from "../../ui/components/PlatformCard";
import { UniformGrid } from "@ui";
import { VideoCardGrid } from "../video/video-card-grid";
import { useVideoState } from "../../features/content/data-access/video-state";
import { ReleaseArtworkCard } from "./release-card";

export type IReleaseSingleProps = {
  release: IRelease;
  settings: ISettings;
};

export const ReleaseSingle = (props: IReleaseSingleProps) => {
  const { release, settings } = props;

  const videoState = useVideoState();

  return (
    <PageLayout pageTitle={["Release", release.title]} settings={settings}>
      <Container component="main">
        <Box paddingY={2}>
          <Typography align="center" variant="h1">
            {release.title}
          </Typography>
        </Box>

        <Grid component="section" container>
          <Grid item xs={12} sm={6}>
            <ReleaseArtworkCard variant="outlined" release={release} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <UniformGrid ItemProps={{ xs: 6, sm: 6, md: 4 }}>
              {release.platformLinks.map((platformLink) => (
                <CardActionArea
                  key={platformLink.url}
                  style={{ width: "100%" }}
                  href={platformLink.url}
                >
                  <PlatformCard name={platformLink.platform.name} />
                </CardActionArea>
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
          <VideoCardGrid
            onClick={videoState.openVideo}
            videos={release.videos}
          />
        </Container>
      </Box>
    </PageLayout>
  );
};
