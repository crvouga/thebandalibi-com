import { Link } from "@components/generic";
import { IEvent, ISettings } from "@data-access";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { PageWrapper, routes } from "../../shared";

export type IEventSingleProps = {
  settings: ISettings;
  event: IEvent;
};

export const EventSingle = (props: IEventSingleProps) => {
  const { settings, event } = props;

  return (
    <PageWrapper pageTitle={["Events", event.name]} settings={settings}>
      <Container sx={{ paddingY: 2 }}>
        <Breadcrumbs>
          <Link href={routes.landing()}>Home</Link>
          <Link href={routes.allEvents()}>Events</Link>
          <Link href={routes.singleEvent(event)} color="text.primary">
            {event.name}
          </Link>
        </Breadcrumbs>

        <Typography variant="h1" color="initial">
          {event.name}
        </Typography>
      </Container>
    </PageWrapper>
  );
};
