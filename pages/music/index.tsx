import { GetStaticProps } from "next";
import React from "react";
import { Container } from "../../components/atoms/container";
import { Header } from "../../components/atoms/header";
import { MotionTypography } from "../../components/atoms/typography";
import { ReleaseCardGrid } from "../../components/organisms/release-card-grid";
import { PageLayout } from "../../components/templates/layout.tsx/page-layout";
import { cms } from "../../lib/cms";
import { IRelease, ISocialMedia } from "../../lib/contracts";

type IReleaseProps = {
  releases: IRelease[];
  socialMedia: ISocialMedia[];
};

export const getStaticProps: GetStaticProps<IReleaseProps> = async () => {
  return {
    props: {
      socialMedia: await cms.getSocialMedia(),
      releases: await cms.getReleases(),
    },
  };
};

const Release = (props: IReleaseProps) => {
  const { releases, socialMedia } = props;

  return (
    <PageLayout socialMedia={socialMedia}>
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

export default Release;
