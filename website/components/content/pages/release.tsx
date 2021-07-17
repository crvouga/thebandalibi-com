import { Link, UniformGrid } from "@components/generic";
import { IRelease, ISettings } from "@data-access";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { PageWrapper, routes } from "../../shared";
import { ReleaseCard } from "../cards/release-card";

export type IReleaseProps = {
  releases: IRelease[];
  settings: ISettings;
};

export const Release = (props: IReleaseProps) => {
  const { releases, settings } = props;

  return (
    <PageWrapper pageTitle={["Release"]} settings={settings}>
      <Container sx={{ paddingTop: 2 }}>
        <Breadcrumbs>
          <Link href={routes.landing()}>Home</Link>
          <Link href={routes.allReleases()} color="text.primary">
            Music
          </Link>
        </Breadcrumbs>
        <Typography variant="h1">Music</Typography>
      </Container>

      <Container>
        <UniformGrid>
          {releases.map((release) => (
            <ReleaseCard key={release.slug} release={release} />
          ))}
        </UniformGrid>
      </Container>
    </PageWrapper>
  );
};
