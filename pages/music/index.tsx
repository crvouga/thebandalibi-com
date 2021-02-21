import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import { motion } from "framer-motion";
import { GetStaticProps } from "next";
import React from "react";
import { Meta } from "../../components/meta";
import { ReleaseCardGrid } from "../../components/release/release-card-grid";
import { useGlobalStyles } from "../../components/styles";
import { cms } from "../../lib/cms";
import { IRelease } from "../../lib/contracts";

type IReleaseProps = {
  releases: IRelease[];
};

export const getStaticProps: GetStaticProps<IReleaseProps> = async () => {
  return {
    props: {
      releases: await cms.getReleases(),
    },
  };
};

const useStyles = makeStyles((theme) => ({
  header: {
    padding: theme.spacing(2, 0),
  },
}));

const Release = (props: IReleaseProps) => {
  const { releases } = props;

  const classes = useStyles();
  const globalClasses = useGlobalStyles();

  return (
    <motion.div layoutId="release" className={globalClasses.container}>
      <Meta />
      <div className={clsx(globalClasses.header, classes.header)}>
        <Typography variant="h3" color="initial">
          Music
        </Typography>
      </div>
      <ReleaseCardGrid releases={releases} />
    </motion.div>
  );
};

export default Release;
