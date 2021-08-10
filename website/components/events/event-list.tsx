import { IEvent } from "@data-access";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
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
        flexDirection: {
          xs: "column",
          md: "row",
        },
        p: 2,
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          justifyContent: "flex-start",
          alignItems: "center",
          textAlign: {
            xs: "center",
            md: "left",
          },
        }}
      >
        <Typography color="text.secondary" variant="h4">
          {date}
        </Typography>

        <Box
          sx={{
            flex: 1,
            paddingX: { xs: 0, md: 2 },
            marginBottom: { xs: 2, md: 0 },
          }}
        >
          <Typography variant="h4">{event.eventName}</Typography>

          <Typography sx={{ color: "text.secondary" }}>
            {event.venueName}
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: {
                xs: "center",
                md: "flex-start",
              },
              color: "text.secondary",
            }}
          >
            <LocationOnIcon sx={{ fontSize: "1em", marginRight: 1 / 2 }} />
            <Typography>{location}</Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          fullWidth
          target="_blank"
          rel="noopener noreferrer"
          href={event.ticketUrl}
          sx={{ marginBottom: 2 }}
        >
          Tickets
        </Button>

        <Button
          variant="outlined"
          fullWidth
          target="_blank"
          rel="noopener noreferrer"
          href={event.eventUrl}
        >
          Details
        </Button>
      </Box>
    </Card>
  );
};

export const EventList = ({ events }: { events: IEvent[] }) => {
  return (
    <Container maxWidth="sm" disableGutters>
      {events.map((event) => (
        <Box
          sx={{ width: "100%", height: "100%", marginBottom: 2 }}
          key={event.eventId}
        >
          <EventCard event={event} />
        </Box>
      ))}
    </Container>
  );
};
