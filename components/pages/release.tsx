import { Box } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { routes } from "../../constants/routes";
import { IRelease, ISettings } from "../../lib/domain";
import { ClickableLink } from "../@shared/clickable";
import { UniformGrid } from "../@shared/uniform-grid";
import { DocumentTitle } from "../app/meta";
import { PageLayout } from "../app/page-layout";
import { ReleaseCard } from "../release/release-card";
import { Gutter } from "../app/navigation/gutter";

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
      <Gutter />
      <Container>
        <Box paddingY={2}>
          <Typography variant="h1">Music</Typography>
        </Box>

        <UniformGrid>
          {releases.map((release) => (
            <ClickableLink href={routes.singleRelease(release.slug)}>
              <ReleaseCard release={release} />
            </ClickableLink>
          ))}
        </UniformGrid>
      </Container>
    </PageLayout>
  );
};
