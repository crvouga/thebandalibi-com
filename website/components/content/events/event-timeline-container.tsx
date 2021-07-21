import { EventSort, IEventSort } from "@data-access";
import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Container";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { useRouter } from "next/router";
import React from "react";
import { routes } from "../../shared";
import { useEventsQuery } from "./event-state";
import { EventTimeline } from "./event-timeline";

export const EventTimelineContainer = () => {
  const router = useRouter();

  const sort = EventSort(router.query.sort);

  const setSort = (sort: IEventSort) => {
    router.push({
      query: {
        ...router.query,
        sort,
      },
    });
  };

  const eventsQuery = useEventsQuery({
    sort,
  });

  return (
    <Container disableGutters>
      <Container sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Select
          variant="outlined"
          value={sort}
          onChange={(event) => setSort(event.target.value)}
        >
          <MenuItem value="date-descend">Recent</MenuItem>
          <MenuItem value="date-ascend">Oldest</MenuItem>
        </Select>
      </Container>

      {!eventsQuery.data && (
        <Container
          sx={{
            paddingY: 12,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress color="inherit" />
        </Container>
      )}

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
  );
};
