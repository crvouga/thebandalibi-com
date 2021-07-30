import { PageWrapper } from "@components/shared";
import { Button, Link } from "@components/generic";
import { LABELS, ROUTES } from "@config";
import { ISettings, IEvent } from "@data-access";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";

export type IEventPageProps = {
  settings: ISettings;
  upcomingEvents: IEvent[];
};

export const EventPage = ({ settings, upcomingEvents }: IEventPageProps) => {
  return (
    <PageWrapper pageTitle={[LABELS.event]} settings={settings}>
      <Container sx={{ paddingTop: 2 }}>
        <Breadcrumbs>
          <Link href={ROUTES.landing()}>{LABELS.landingPage}</Link>
          <Link color="text.primary">{LABELS.event}</Link>
        </Breadcrumbs>
      </Container>
      <Container>
        <Typography variant="h1">{LABELS.event}</Typography>
      </Container>
      <Container maxWidth="md">
        {upcomingEvents.map((event) => (
          <Box key={event.eventId}>
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
                    <Button variant="contained" size="large" href={offer.url}>
                      {offer.type}
                    </Button>
                  </Box>
                ))}
              </Box>
            </Box>
            <Divider />
          </Box>
        ))}
      </Container>
    </PageWrapper>
  );
};
