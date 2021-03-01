import { makeStyles, Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { motion } from "framer-motion";
import React from "react";
import { IRelease, ISettings } from "../../lib/domain";
import { ClickableLink } from "../@shared/clickable";
import { DocumentTitle } from "../app/meta";
import { PageLayout } from "../app/page-layout";
import { PlatformLinkCard } from "../platform/platform-link-card";
import { ReleaseArtworkCard } from "../release/release-card";
import { UniformGrid } from "../@shared/uniform-grid";

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

  platformLinkCardList: {
    maxWidth: theme.breakpoints.values.sm,
    margin: "auto",
  },

  container: {
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  item: {
    margin: theme.spacing(1),
    flex: 1,
  },

  list: {},
}));

export const ReleaseSingle = (props: IReleaseSingleProps) => {
  const { release, settings } = props;

  const classes = useStyles();

  return (
    <PageLayout
      title={DocumentTitle(release.title, "Music", settings.band.name)}
      settings={settings}
    >
      <Container>
        <Typography className={classes.title} align="center" variant="h3">
          {release.title}
        </Typography>

        <div className={classes.container}>
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
                  <PlatformLinkCard platformLink={platformLink} />
                </ClickableLink>
              ))}
            </UniformGrid>
            {/* <List disablePadding>
              {release.platformLinks.map((platformLink) => (
                <ListItem disableGutters key={platformLink.url}>
                  <ClickableLink
                    style={{ width: "100%" }}
                    href={platformLink.url}
                  >
                    <PlatformLinkCard platformLink={platformLink} />
                  </ClickableLink>
                </ListItem>
              ))}
            </List> */}
          </div>
        </div>
      </Container>
    </PageLayout>
  );
};
