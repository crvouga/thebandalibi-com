import { UniformGrid } from "@components/generic";
import { IEvent } from "@data-access";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { toThreeCharacterMonth, toTwoCharacterDay } from "@utility";

export const EventCard = ({ event }: { event: IEvent }) => {
  const date = `${toThreeCharacterMonth(event.datetime)} ${toTwoCharacterDay(
    event.datetime
  )}`;

  const location = `${event.city}, ${event.region ?? event.country}`;

  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        p: 2,
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          textAlign: "center",
        }}
      >
        <Typography color="text.secondary" variant="h4">
          {date}
        </Typography>

        <Typography variant="h4">{event.eventName}</Typography>

        <Typography sx={{ color: "text.secondary" }}>
          {event.venueName}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            color: "text.secondary",
            justifyContent: "center",
          }}
        >
          <LocationOnIcon sx={{ fontSize: "1em", marginRight: 1 / 2 }} />
          <Typography>{location}</Typography>
        </Box>
      </Box>

      <Button
        variant="outlined"
        fullWidth
        sx={{ marginY: 2 }}
        target="_blank"
        rel="noopener noreferrer"
        href={event.eventUrl}
      >
        Details
      </Button>

      <Button
        variant="contained"
        fullWidth
        target="_blank"
        rel="noopener noreferrer"
        href={event.ticketUrl}
      >
        Tickets
      </Button>
    </Card>
  );
};

export const EventList = ({ events }: { events: IEvent[] }) => {
  return (
    <UniformGrid ContainerProps={{ spacing: 2 }}>
      {events.map((event) => (
        <Box sx={{ width: "100%", height: "100%" }} key={event.eventId}>
          <EventCard event={event} />
        </Box>
      ))}
    </UniformGrid>
  );
};
