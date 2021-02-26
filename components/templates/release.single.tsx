import { makeStyles, Typography, Grid } from "@material-ui/core";
import { motion } from "framer-motion";
import React from "react";
import { IRelease, ISocialMedia } from "../../lib/contracts";
import { Container } from "../atoms/container";
import { Header } from "../atoms/header";
import { ReleaseArtworkCard } from "../molecules/release-card";
import { PlatformLinkCardList } from "../organisms/platform-link-card-list";
import { PageLayout } from "./layout.tsx/page-layout";

export type IReleaseSingleProps = {
  release: IRelease;
  socialMedia: ISocialMedia[];
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
  },
  header: {
    justifyContent: "center",
    padding: theme.spacing(4, 0),
  },
}));

export const ReleaseSingle = (props: IReleaseSingleProps) => {
  const { release, socialMedia } = props;

  const classes = useStyles();

  return (
    <PageLayout socialMedia={socialMedia}>
      <Container layoutId="music">
        <div className={classes.header}>
          <Typography align="center" variant="h3" gutterBottom>
            {release.title}
          </Typography>
          <Typography align="center" variant="h6" color="textSecondary">
            {new Date(release.releaseDate).getFullYear()}
          </Typography>
        </div>

        <Grid container spacing={2}>
          <Grid item sm={6}>
            <motion.div
              className={classes.releaseCardWrapper}
              layoutId={release.slug}
            >
              <ReleaseArtworkCard release={release} />
            </motion.div>
          </Grid>

          <Grid item sm={6}>
            <PlatformLinkCardList platformLinks={release.platformLinks} />
          </Grid>
        </Grid>
      </Container>
    </PageLayout>
  );
};
