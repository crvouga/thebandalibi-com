import Typography from "@material-ui/core/Typography";
import React from "react";
import { IPlatform, IRelease } from "../../lib/contracts";
import { Container } from "../atoms/container";
import { Header } from "../atoms/header";
import { ReleaseCardGrid } from "../organisms/release-card-grid";
import { PageLayout } from "./layout.tsx/page-layout";

export type IReleaseProps = {
  releases: IRelease[];
  platforms: IPlatform[];
};

export const Release = (props: IReleaseProps) => {
  const { releases, platforms } = props;

  return (
    <PageLayout platforms={platforms}>
      <Container>
        <Header>
          <Typography variant="h3">Music</Typography>
        </Header>

        <ReleaseCardGrid releases={releases} />
      </Container>
    </PageLayout>
  );
};
