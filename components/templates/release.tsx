import React from "react";
import { IPlatform, IRelease } from "../../lib/contracts";
import { Container } from "../atoms/container";
import { Header } from "../atoms/header";
import { MotionTypography } from "../atoms/typography";
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
      <Container layoutId="music">
        <Header>
          <MotionTypography layoutId="music-title" variant="h3">
            Music
          </MotionTypography>
        </Header>

        <ReleaseCardGrid releases={releases} />
      </Container>
    </PageLayout>
  );
};
