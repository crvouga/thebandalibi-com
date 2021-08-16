import { Link, UniformGrid } from "@components/generic";
import { IRelease, ISettings } from "@data-access";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { LABELS, ROUTES } from "@config";
import { PageWrapper } from "@components/shared";
import { ReleaseCard } from "../cards/release-card";

export type IReleaseProps = {
  releases: IRelease[];
  settings: ISettings;
};

export const Release = (props: IReleaseProps) => {
  const { releases, settings } = props;

  return (
    <PageWrapper
      pageTitle={[LABELS.release]}
      settings={settings}
      breadcrumbs={
        <Breadcrumbs>
          <Link href={ROUTES.home()}>{LABELS.home}</Link>
          <Link color="text.primary">{LABELS.release}</Link>
        </Breadcrumbs>
      }
    >
      <Typography variant="h1" sx={{ marginX: 2 }} align="center">
        {LABELS.release}
      </Typography>

      <UniformGrid
        ContainerProps={{
          justifyContent: "center",
          sx: {
            paddingX: 2,
          },
        }}
        ItemProps={{
          xs: 12,
          sm: 6,
          md: 6,
          lg: 4,
          xl: 3,
        }}
      >
        {releases.map((release) => (
          <ReleaseCard key={release.slug} release={release} />
        ))}
      </UniformGrid>
    </PageWrapper>
  );
};
