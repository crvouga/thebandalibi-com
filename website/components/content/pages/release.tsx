import { Link, UniformGrid } from "@components/generic";
import { IRelease, ISettings } from "@data-access";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { LABELS, ROUTES } from "@config";
import { PageWrapper } from "../../shared";
import { ReleaseCard } from "../cards/release-card";

export type IReleaseProps = {
  releases: IRelease[];
  settings: ISettings;
};

export const Release = (props: IReleaseProps) => {
  const { releases, settings } = props;

  return (
    <PageWrapper pageTitle={[LABELS.release]} settings={settings}>
      <Container sx={{ paddingTop: 2 }}>
        <Breadcrumbs>
          <Link href={ROUTES.landing()}>{LABELS.landingPage}</Link>
          <Link color="text.primary">{LABELS.release}</Link>
        </Breadcrumbs>
        <Typography variant="h1">{LABELS.release}</Typography>
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
