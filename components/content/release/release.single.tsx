import { IRelease, ISettings } from "@data-access";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { CardActionArea, Image, UniformGrid } from "generic-components";
import React from "react";
import { PlatformCard } from "../../../generic-components/components/PlatformCard";
import { PageWrapper } from "../../top-level";
import { VideoCardGrid } from "../video/video-card-grid";
import { useVideoState } from "../video/video-state";

export type IReleaseSingleProps = {
  release: IRelease;
  settings: ISettings;
};

export const ReleaseSingle = (props: IReleaseSingleProps) => {
  const { release, settings } = props;

  const videoState = useVideoState();

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
    </PageWrapper>
  );
};
