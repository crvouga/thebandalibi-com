import { PlatformButton } from "@components/generic";
import { PageHeader, PageWrapper } from "@components/shared";
import { LABELS, ROUTES } from "@config";
import { IEvent, ISettings } from "@data-access";
import Container from "@material-ui/core/Container";
import { EventList } from "./event-list";

export type IEventPageProps = {
  settings: ISettings;
  platform: {
    iconSrc: string;
    label: string;
    href: string;
  };
  upcomingEvents: IEvent[];
};

export const EventPage = ({
  settings,
  platform,
  upcomingEvents,
}: IEventPageProps) => {
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

      <Container maxWidth="sm">
        <PlatformButton
          appIconSrc={platform.iconSrc}
          href={platform.href}
          platformName={platform.label}
        />
      </Container>

      <EventList events={upcomingEvents} />
    </PageWrapper>
  );
};
