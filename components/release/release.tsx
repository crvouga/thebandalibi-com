import { IRelease, ISettings } from "@core";
import { Box } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { CardActionArea, ResponsiveUniformGrid } from "@ui";
import React from "react";
import { routes } from "../../routes";
import { PageLayout } from "../app/layout";
import { ResponsiveReleaseCard } from "./release-card";

export type IReleaseProps = {
  releases: IRelease[];
  settings: ISettings;
};

export const Release = (props: IReleaseProps) => {
  const { releases, settings } = props;

  return (
    <PageLayout pageTitle={["Release"]} settings={settings}>
      <Container>
        <Box paddingY={2}>
          <Typography variant="h1">Releases</Typography>
        </Box>
      </Container>

      <Container disableGutters>
        <ResponsiveUniformGrid ItemProps={{ md: 3 }}>
          {releases.map((release) => (
            <CardActionArea
              key={release.slug}
              href={routes.singleRelease(release.slug)}
            >
              <ResponsiveReleaseCard release={release} />
            </CardActionArea>
          ))}
        </ResponsiveUniformGrid>
      </Container>
    </PageLayout>
  );
};
