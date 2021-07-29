import { Link } from "@components/generic";
import { ISettings } from "@data-access";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { LABELS, ROUTES } from "@config";
import { PageWrapper } from "@components/shared";
import { EventTimelineContainer } from "./event-timeline-container";

export type IEventProps = {
  settings: ISettings;
};

export const Event = (props: IEventProps) => {
  const { settings } = props;

  return (
    <PageWrapper pageTitle={["Events"]} settings={settings}>
      <Container sx={{ paddingY: 2 }}>
        <Breadcrumbs>
          <Link href={ROUTES.landing()}>Home</Link>
        </Breadcrumbs>

        <Typography variant="h1">Events</Typography>
      </Container>

      <EventTimelineContainer />
    </PageWrapper>
  );
};
