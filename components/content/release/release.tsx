import { IRelease, ISettings } from "@data-access";
import { Box } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {
  CardActionArea,
  ImageCard,
  ResponsiveUniformGrid,
  useBreakpoint,
} from "generic-components";
import { dateToYear } from "@utility";
import React from "react";
import { routes } from "../../../routes";
import { PageWrapper } from "../../top-level";

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
            <CardActionArea
              key={release.slug}
              href={routes.singleRelease(release.slug)}
            >
              <ImageCard
                orientation={isSmallScreen ? "horizontal" : "vertical"}
                src={release.artwork}
                alt={release.title}
                title={release.title}
                subheader={dateToYear(release.releaseDate)}
              />
            </CardActionArea>
          ))}
        </ResponsiveUniformGrid>
      </Container>
    </PageWrapper>
  );
};
