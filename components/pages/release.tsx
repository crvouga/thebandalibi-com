import Typography from "@material-ui/core/Typography";
import React from "react";
import { routes } from "../../constants/routes";
import { IRelease, ISettings } from "../../lib/domain";
import { ClickableLink } from "../@shared/clickable";
import { Container } from "../@shared/container";
import { Header } from "../@shared/header";
import { ItemGrid } from "../@shared/item-grid";
import { Reveal } from "../@shared/reveal-animation";
import { DocumentTitle } from "../app/meta";
import { PageLayout } from "../app/page-layout";
import { ReleaseCard } from "../release/release-card";

export type IReleaseProps = {
  releases: IRelease[];
  settings: ISettings;
};

export const Release = (props: IReleaseProps) => {
  const { releases, settings } = props;

  return (
    <PageLayout
      title={DocumentTitle("Music", settings.band.name)}
      settings={settings}
    >
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
