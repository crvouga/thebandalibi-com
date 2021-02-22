import Typography from "@material-ui/core/Typography";
import { GetStaticProps } from "next";
import React from "react";
import { Container } from "../../components/atoms/container";
import { Header } from "../../components/atoms/header";
import { Meta } from "../../components/molecules/meta";
import { ReleaseCardGrid } from "../../components/organisms/release-card-grid";
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

const Release = (props: IReleaseProps) => {
  const { releases } = props;

  return (
    <Container layoutId="music">
      <Meta />

      <Header>
        <Typography variant="h3">Music</Typography>
      </Header>

      <ReleaseCardGrid releases={releases} />
    </Container>
  );
};

export default Release;
