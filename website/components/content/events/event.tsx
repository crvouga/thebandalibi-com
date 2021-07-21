import { Link } from "@components/generic";
import { EventSort, IEventSort, ISettings } from "@data-access";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { useRouter } from "next/router";
import React from "react";
import { useEventsQuery } from ".";
import { PageWrapper, routes } from "../../shared";
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
          <Link href={routes.landing()}>Home</Link>
        </Breadcrumbs>

        <Typography variant="h1">Events</Typography>
      </Container>

      <EventTimelineContainer />
    </PageWrapper>
  );
};
