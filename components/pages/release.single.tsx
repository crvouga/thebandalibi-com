import { makeStyles, Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import React from "react";
import { IRelease, ISettings } from "../../lib/domain";
import { ClickableLink } from "../@shared/clickable";
import { UniformGrid } from "../@shared/uniform-grid";
import { DocumentTitle } from "../app/meta";
import { PageLayout } from "../app/page-layout";
import { PlatformCard } from "../platform/platform-card";
import { ReleaseArtworkCard } from "../release/release-card";
import Image from "next/image";

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
  item: {
    margin: theme.spacing(1),
    flex: 1,
  },

  backdrop: {
    filter: `blur(${theme.spacing(2)}px)`,
    zIndex: -1,
    position: "absolute",
    top: "0",
    bottom: "auto",
    left: "0",
    right: "auto",
    height: "100%",
    width: "100%",
  },
}));

export const ReleaseSingle = (props: IReleaseSingleProps) => {
  const { release, settings } = props;

  const classes = useStyles();

  return (
    <PageLayout
      title={DocumentTitle(release.title, "Music", settings.band.name)}
      settings={settings}
    >
      <Container component="main" className={classes.main}>
        <Typography className={classes.title} align="center" variant="h1">
          {release.title}
        </Typography>

        <section className={classes.section}>
          <ReleaseArtworkCard
            variant="outlined"
            className={classes.item}
            release={release}
          />

          <div className={classes.item}>
            <UniformGrid ItemProps={{ sm: 12, md: 12 }}>
              {release.platformLinks.map((platformLink) => (
                <ClickableLink
                  key={platformLink.url}
                  style={{ width: "100%" }}
                  href={platformLink.url}
                >
                  <PlatformCard platform={platformLink.platform} />
                </ClickableLink>
              ))}
            </UniformGrid>
          </div>
        </section>
      </Container>
    </PageLayout>
  );
};
