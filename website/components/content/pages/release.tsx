import { UniformGrid } from "@components/generic";
import { PageHeader, PageWrapper } from "@components/shared";
import { LABELS, ROUTES } from "@config";
import { IRelease, ISettings } from "@data-access";
import React from "react";
import { ReleaseCard } from "../cards/release-card";

export type IReleaseProps = {
  releases: IRelease[];
  settings: ISettings;
};

export const Release = (props: IReleaseProps) => {
  const { releases, settings } = props;

  return (
    <PageWrapper pageTitle={[LABELS.release]} settings={settings}>
      <PageHeader
        title={LABELS.release}
        breadcrumbs={[
          {
            href: ROUTES.home(),
            label: LABELS.home,
          },
          {
            label: LABELS.release,
          },
        ]}
      />

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
