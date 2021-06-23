import { IRelease, ISettings } from "@data-access";
import { Box } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { ResponsiveUniformGrid } from "generic-components";
import React from "react";
import { PageWrapper } from "../../top-level";
import { ReleaseCard } from "../cards/release-card";

export type IReleaseProps = {
  releases: IRelease[];
  settings: ISettings;
};

export const Release = (props: IReleaseProps) => {
  const { releases, settings } = props;

  return (
    <PageWrapper pageTitle={["Release"]} settings={settings}>
      <Container>
        <Box paddingY={2}>
          <Typography variant="h1">Releases</Typography>
        </Box>
      </Container>

      <Container disableGutters>
        <ResponsiveUniformGrid>
          {releases.map((release) => (
            <ReleaseCard key={release.slug} release={release} />
          ))}
        </ResponsiveUniformGrid>
      </Container>
    </PageWrapper>
  );
};
