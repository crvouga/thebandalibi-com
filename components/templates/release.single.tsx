import { makeStyles, Typography } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { motion } from "framer-motion";
import React from "react";
import { IPlatform, IRelease } from "../../lib/domain";
import { ClickableLink } from "../@shared/clickable";
import { Container } from "../@shared/container";
import { PlatformLinkCard } from "../platform/platform-link-card";
import { ReleaseArtworkCard } from "../release/release-card";
import { PageLayout } from "../app/page-layout";
import { Reveal } from "../@shared/reveal-animation";

export type IReleaseSingleProps = {
  release: IRelease;
  platforms: IPlatform[];
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
    padding: theme.spacing(1),
    flex: 1,
  },

  list: {},
}));

export const ReleaseSingle = (props: IReleaseSingleProps) => {
  const { release, platforms } = props;

  const classes = useStyles();

  return (
    <PageLayout platforms={platforms}>
      <Container>
        <Typography className={classes.title} align="center" variant="h3">
          {release.title}
        </Typography>

        <div className={classes.container}>
          <motion.div className={classes.item} layoutId={release.slug}>
            <ReleaseArtworkCard release={release} />
          </motion.div>

          <div className={classes.item}>
            <List disablePadding>
              {release.platformLinks.map((platformLink) => (
                <ListItem disableGutters key={platformLink.url}>
                  <ClickableLink
                    style={{ width: "100%" }}
                    href={platformLink.url}
                  >
                    <Reveal>
                      <PlatformLinkCard platformLink={platformLink} />
                    </Reveal>
                  </ClickableLink>
                </ListItem>
              ))}
            </List>
          </div>
        </div>
      </Container>
    </PageLayout>
  );
};
