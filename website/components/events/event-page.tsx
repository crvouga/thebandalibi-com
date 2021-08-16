import { PageHeader, PageWrapper } from "@components/shared";
import { LABELS, ROUTES } from "@config";
import { IEvent, ISettings } from "@data-access";
import { EventList } from "./event-list";

export type IEventPageProps = {
  settings: ISettings;
  upcomingEvents: IEvent[];
};

export const EventPage = ({ settings, upcomingEvents }: IEventPageProps) => {
  return (
    <PageWrapper pageTitle={[LABELS.event]} settings={settings}>
      <PageHeader
        breadcrumbs={[
          {
            href: ROUTES.home(),
            label: LABELS.home,
          },
          {
            label: LABELS.event,
          },
        ]}
        title={LABELS.event}
      />

      <EventList events={upcomingEvents} />
    </PageWrapper>
  );
};
