import Typography from "@material-ui/core/Typography";
import React from "react";
import { IPlatform, IRelease } from "../../lib/contracts";
import { ClickableLink } from "../atoms/clickable";
import { Container } from "../atoms/container";
import { Header } from "../atoms/header";
import { ReleaseCard } from "../molecules/release-card";
import { ItemGrid } from "../organisms/item-grid";
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

        <ItemGrid
          items={releases}
          getItemKey={(release) => release.slug}
          renderItem={(release) => (
            <ClickableLink href={`/music/${release.slug}`}>
              <ReleaseCard release={release} />
            </ClickableLink>
          )}
        />
      </Container>
    </PageLayout>
  );
};
