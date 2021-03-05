import { Grid, makeStyles, Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import React from "react";
import { IRelease, ISettings } from "../../lib/domain";
import { ClickableLink } from "../@shared/clickable";
import { UniformGrid } from "../@shared/uniform-grid";
import { DocumentTitle } from "../app/meta";
import { PageLayout } from "../app/page-layout";
import { PlatformCard } from "../platform/platform-card";
import { ReleaseArtworkCard } from "../release/release-card";

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

  return (
    <PageLayout
      title={DocumentTitle(settings.band.name, "Music", release.title)}
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
            <Typography variant="h3" gutterBottom>
              Listen
            </Typography>
            <UniformGrid ItemProps={{ sm: 12, md: 12 }}>
              {release.platformLinks.map((platformLink) => (
                <ClickableLink
                  key={platformLink.url}
                  style={{ width: "100%" }}
                  href={platformLink.url}
                >
                  <PlatformCard
                    platform={platformLink.platform}
                    CardHeaderProps={{
                      subheader: `Listen On`,
                    }}
                  />
                </ClickableLink>
              ))}
            </UniformGrid>
          </Grid>
        </Grid>
      </Container>
    </PageLayout>
  );
};
