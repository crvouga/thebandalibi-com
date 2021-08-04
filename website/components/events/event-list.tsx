import { IEvent } from "@data-access";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

export const EventListItem = ({ event }: { event: IEvent }) => {
  return (
    <Box
      sx={{
        paddingY: 2,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography variant="h4">{event.name}</Typography>
        <Typography color="text.secondary">
          {new Date(event.datetime).toDateString()}
        </Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        {event.offers.map((offer) => (
          <Box key={offer.url} sx={{ marginX: 1 }}>
            <Button
              variant="contained"
              size="large"
              href={offer.url}
              target="_blank"
            >
              {offer.type}
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export const EventList = ({ events }: { events: IEvent[] }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      {events.map((event) => (
        <Box key={event.eventId}>
          <EventListItem event={event} />
          <Divider />
        </Box>
      ))}
    </Box>
  );
};
