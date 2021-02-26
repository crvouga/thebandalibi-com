import { Grid, makeStyles, Typography } from "@material-ui/core";
import { motion } from "framer-motion";
import React from "react";
import { IPlatform, IRelease } from "../../lib/contracts";
import { Container } from "../atoms/container";
import { ReleaseArtworkCard } from "../molecules/release-card";
import { PlatformLinkCardList } from "../organisms/platform-link-card-list";
import { PageLayout } from "./layout.tsx/page-layout";

export type IReleaseSingleProps = {
  release: IRelease;
  platforms: IPlatform[];
};

const useStyles = makeStyles((theme) => ({
  content: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
  },
  releaseCardWrapper: {
    flex: 1,
    padding: theme.spacing(1),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  header: {
    justifyContent: "center",
    padding: theme.spacing(4, 0),
  },
}));

export const ReleaseSingle = (props: IReleaseSingleProps) => {
  const { release, platforms } = props;

  const classes = useStyles();

  return (
    <PageLayout platforms={platforms}>
      <Container layoutId="music">
        <div className={classes.header}>
          <Typography align="center" variant="h3" gutterBottom>
            {release.title}
          </Typography>
          <Typography align="center" variant="h6" color="textSecondary">
            {new Date(release.releaseDate).getFullYear()}
          </Typography>
        </div>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <motion.div
              className={classes.releaseCardWrapper}
              layoutId={release.slug}
            >
              <ReleaseArtworkCard release={release} />
            </motion.div>
          </Grid>

          <Grid item xs={12} sm={6}>
            <PlatformLinkCardList platformLinks={release.platformLinks} />
          </Grid>
        </Grid>
      </Container>
    </PageLayout>
  );
};
