import { Link } from "@components/generic";
import { PageWrapper } from "@components/shared";
import { LABELS, ROUTES } from "@config";
import { IEvent, ISettings } from "@data-access";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import { EventList } from "./event-list";

export type IEventPageProps = {
  settings: ISettings;
  upcomingEvents: IEvent[];
};

export const EventPage = ({ settings, upcomingEvents }: IEventPageProps) => {
  return (
    <PageWrapper
      pageTitle={[LABELS.event]}
      settings={settings}
      breadcrumbs={
        <Breadcrumbs>
          <Link href={ROUTES.home()}>{LABELS.home}</Link>
          <Link color="text.primary">{LABELS.event}</Link>
        </Breadcrumbs>
      }
    >
      <Typography
        variant="h1"
        sx={{ marginX: 2, marginBottom: 2 }}
        align="center"
      >
        {LABELS.event}
      </Typography>
      <EventList events={upcomingEvents} />
    </PageWrapper>
  );
};
