import { Link } from "@components/generic";
import { IEvent, IEventSort, ISettings } from "@data-access";
import Box from "@material-ui/core/Box";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Container";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import { PageWrapper, routes } from "../../shared";
import { EventTimeline, useEventsQuery } from ".";
import { useRouter } from "next/router";

export type IEventProps = {
  settings: ISettings;
};

const Loading = () => {
  return (
    <>
      <Container
        sx={{
          height: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress color="inherit" />
      </Container>
    </>
  );
};

export const Event = (props: IEventProps) => {
  const { settings } = props;

  const router = useRouter();

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
            <MenuItem value="date-descend">Recent</MenuItem>
            <MenuItem value="date-ascend">Oldest</MenuItem>
          </Select>
        </Box>
      </Container>

      <Container disableGutters>
        {!eventsQuery.data && <Loading />}
        {eventsQuery.data && (
          <EventTimeline
            events={eventsQuery.data}
            onClick={(event, index) => {
              router.push(
                routes.singleEvent({
                  eventId: event.eventId,
                  sort,
                  index,
                })
              );
            }}
          />
        )}
      </Container>
    </PageWrapper>
  );
};
