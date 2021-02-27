import Typography from "@material-ui/core/Typography";
import React from "react";
import { IPlatform, IRelease } from "../../lib/domain";
import { ClickableLink } from "../@shared/clickable";
import { Container } from "../@shared/container";
import { Header } from "../@shared/header";
import { ReleaseCard } from "../release/release-card";
import { ItemGrid } from "../@shared/item-grid";
import { PageLayout } from "../app/page-layout";
import { routes } from "../../constants/routes";
import { Reveal } from "../@shared/reveal-animation";

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
            <ClickableLink href={routes.singleRelease(release.slug)}>
              <Reveal>
                <ReleaseCard release={release} />
              </Reveal>
            </ClickableLink>
          )}
        />
      </Container>
    </PageLayout>
  );
};
