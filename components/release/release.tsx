import { Box } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { IRelease, ISettings } from "../../lib/data-access";
import { routes } from "../../lib/routes";
import { PageLayout } from "../app/layout";
import { formatTitle } from "../app/meta";
import { ReleaseCard } from "./release-card";
import { CardActionAreaLink } from "../shared/clickable";
import { UniformGrid } from "../shared/uniform-grid";

export type IReleaseProps = {
  releases: IRelease[];
  settings: ISettings;
};

export const Release = (props: IReleaseProps) => {
  const { releases, settings } = props;

  return (
    <PageLayout
      title={formatTitle(settings.band.name, "Music")}
      settings={settings}
    >
      <Container>
        <Box paddingY={2}>
          <Typography variant="h1">Music</Typography>
        </Box>
      </Container>

      <Container disableGutters>
        <UniformGrid>
          {releases.map((release) => (
            <CardActionAreaLink
              key={release.slug}
              href={routes.singleRelease(release.slug)}
            >
              <ReleaseCard release={release} />
            </CardActionAreaLink>
          ))}
        </UniformGrid>
      </Container>
    </PageLayout>
  );
};
