import { Button } from "@components/generic";
import { IEvent, IEventSort } from "@data-access";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { INonNegativeNumber } from "@utility";
import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { routes } from "../../shared";

export const EventSingleActionBar = ({
  sort,
  index,
  previousEvent,
  nextEvent,
}: {
  sort: IEventSort;
  index: INonNegativeNumber;
  previousEvent?: IEvent;
  nextEvent?: IEvent;
}) => {
  return (
    <Container
      disableGutters
      maxWidth="sm"
      sx={{
        display: "flex",
        marginY: 2,
      }}
    >
      <Button
        startIcon={<MdChevronLeft />}
        color="inherit"
        disabled={!Boolean(previousEvent)}
        href={
          previousEvent
            ? routes.singleEvent({
                eventId: previousEvent.eventId,
                sort,
                index: index - 1,
              })
            : undefined
        }
      >
        Prev
      </Button>

      <Box sx={{ flex: 1 }} />

      <Button
        endIcon={<MdChevronRight />}
        color="inherit"
        disabled={!Boolean(nextEvent)}
        href={
          nextEvent
            ? routes.singleEvent({
                eventId: nextEvent.eventId,
                sort,
                index: index + 1,
              })
            : undefined
        }
      >
        Next
      </Button>
    </Container>
  );
};
