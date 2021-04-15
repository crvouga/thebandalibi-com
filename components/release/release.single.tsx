import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { IRelease, ISettings } from "../../lib/data-access";
import { PageLayout } from "../app/layout";
import { formatTitle } from "../app/meta";
import { PlatformCard } from "../shared/platform/platform-card";
import { ReleaseArtworkCard } from "./release-card";
import { CardActionAreaLink } from "../shared/clickable";
import { UniformGrid } from "../shared/uniform-grid";
import { VideoCardGrid } from "../video/video-card-grid";
import { useVideoState } from "../video/video-state";

export type IReleaseSingleProps = {
  release: IRelease;
  settings: ISettings;
};

const useStyles = makeStyles((theme) => ({
  title: {
    padding: theme.spacing(2, 0),
  },

  artworkCard: {
    display: "flex",
    width: "100%",
    height: "100%",

    maxWidth: theme.breakpoints.values.sm,
    paddingBottom: theme.spacing(2),
  },

  main: {
    position: "relative",
  },

  section: {
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
}));

export const ReleaseSingle = (props: IReleaseSingleProps) => {
  const { release, settings } = props;

  const classes = useStyles();

  const videoState = useVideoState();

  return (
    <PageLayout
      title={formatTitle(settings.band.name, "Music", release.title)}
      settings={settings}
    >
      <Container component="main" className={classes.main}>
        <Typography className={classes.title} align="center" variant="h1">
          {release.title}
        </Typography>

        <Grid component="section" container spacing={4}>
          <Grid item xs={12} sm={6}>
            <ReleaseArtworkCard variant="outlined" release={release} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box paddingY={1}>
              <Typography variant="h2">Listen</Typography>
            </Box>
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

      <Container>
        <Box paddingBottom={1} paddingTop={2}>
          <Typography variant="h2">Videos</Typography>
        </Box>
      </Container>
      <Container disableGutters>
        <VideoCardGrid onClick={videoState.openVideo} videos={release.videos} />
      </Container>
    </PageLayout>
  );
};
