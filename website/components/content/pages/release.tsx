import { IRelease, ISettings } from "@data-access";
import { Box } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { UniformGrid } from "@components/generic";
import React from "react";
import { PageWrapper } from "../../shared";
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
          <Typography variant="h1">Music</Typography>
        </Box>
      </Container>

      <Container disableGutters>
        <UniformGrid>
          {releases.map((release) => (
            <ReleaseCard key={release.slug} release={release} />
          ))}
        </UniformGrid>
      </Container>
    </PageWrapper>
  );
};
