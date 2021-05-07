import { Box } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { IRelease, ISettings } from "@core";
import { routes } from "../../lib/routes";
import { PageLayout } from "../app/layout";
import { CardActionAreaLink } from "../shared/clickable";
import { ResponsiveUniformGrid } from "../shared/uniform-grid";
import { ReleaseCard } from "./release-card";

export type IReleaseProps = {
  releases: IRelease[];
  settings: ISettings;
};

export const Release = (props: IReleaseProps) => {
  const { releases, settings } = props;

  return (
    <PageLayout pageTitle={[settings.band.name, "Release"]} settings={settings}>
      <Container>
        <Box paddingY={2}>
          <Typography variant="h1">Releases</Typography>
        </Box>
      </Container>

      <Container disableGutters>
        <ResponsiveUniformGrid ContainerProps={{ justify: "center" }}>
          {releases.map((release) => (
            <CardActionAreaLink
              key={release.slug}
              href={routes.singleRelease(release.slug)}
            >
              <ReleaseCard release={release} />
            </CardActionAreaLink>
          ))}
        </ResponsiveUniformGrid>
      </Container>
    </PageLayout>
  );
};
