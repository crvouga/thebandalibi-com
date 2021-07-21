import { Link } from "@components/generic";
import { IEvent, IEventSort, ISettings } from "@data-access";
import Box from "@material-ui/core/Box";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Container from "@material-ui/core/Container";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import { PageWrapper, routes } from "../../shared";
import {
  EventTimeline,
  EventTimelineSkeleton,
  useEventsQuery,
} from "../events";

export type IEventProps = {
  settings: ISettings;
};

const Loading = () => {
  return (
    <>
      <EventTimelineSkeleton itemCount={6} />
    </>
  );
};

const Loaded = ({ events }: { events: IEvent[] }) => {
  return (
    <>
      <EventTimeline events={events} />
    </>
  );
};

export const Event = (props: IEventProps) => {
  const { settings } = props;

  const [sort, setSort] = useState<IEventSort>("date-descend");

  const eventsQuery = useEventsQuery({
    sort,
  });

  return (
    <PageWrapper pageTitle={["Events"]} settings={settings}>
      <Container sx={{ paddingY: 2 }}>
        <Breadcrumbs>
          <Link href={routes.landing()}>Home</Link>
          <Link href={routes.allEvents()} color="text.primary">
            Events
          </Link>
        </Breadcrumbs>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h1" color="initial">
            Events
          </Typography>
          <Select
            variant="outlined"
            value={sort}
            onChange={(event) => setSort(event.target.value)}
          >
            <MenuItem value="date-descend">Latest</MenuItem>
            <MenuItem value="date-ascend">Oldest</MenuItem>
          </Select>
        </Box>
      </Container>

      <Container>
        {!eventsQuery.data && <Loading />}
        {eventsQuery.data && <Loaded events={eventsQuery.data} />}
      </Container>
    </PageWrapper>
  );
};
