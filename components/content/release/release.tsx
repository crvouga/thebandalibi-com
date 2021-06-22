import { IRelease, ISettings } from "@data-access";
import { Box } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { ResponsiveUniformGrid, useBreakpoint } from "generic-components";
import React from "react";
import { PageWrapper } from "../../top-level";
import { ReleaseCard } from "./release-card";

export type IReleaseProps = {
  releases: IRelease[];
  settings: ISettings;
};

export const Release = (props: IReleaseProps) => {
  const { releases, settings } = props;
  const isSmallScreen = useBreakpoint("xs");

  return (
    <PageWrapper pageTitle={["Release"]} settings={settings}>
      <Container>
        <Box paddingY={2}>
          <Typography variant="h1">Releases</Typography>
        </Box>
      </Container>

      <Container disableGutters>
        <ResponsiveUniformGrid ItemProps={{ md: 3 }}>
          {releases.map((release) => (
            <ReleaseCard key={release.slug} release={release} />
          ))}
        </ResponsiveUniformGrid>
      </Container>
    </PageWrapper>
  );
};
