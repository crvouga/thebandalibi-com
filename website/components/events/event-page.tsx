import { Link } from "@components/generic";
import { PageWrapper } from "@components/shared";
import { LABELS, ROUTES } from "@config";
import { IEvent, ISettings } from "@data-access";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { EventList } from "./event-list";

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
        <EventList events={upcomingEvents} />
      </Container>
    </PageWrapper>
  );
};
