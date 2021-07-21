import { Link, UniformGrid } from "@components/generic";
import { EventSort, IEvent, ISettings } from "@data-access";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { createEventEmitter, NonNegativeNumber } from "@utility";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import { PageWrapper, routes } from "../../shared";
import { ImageGalleryCard } from "../cards";
import { IVideoPlayerEvents, VideoPlayer } from "../video-player";
import { EventSingleActionBar } from "./event-single-action-bar";
import { useEventsQuery } from "./event-state";

export type IEventSingleProps = {
  settings: ISettings;
};

const Loaded = ({ event }: { event: IEvent }) => {
  const eventEmitterRef = useRef(
    createEventEmitter<IVideoPlayerEvents>({ maxListeners: 1000 })
  );

  return (
    <>
      <Container sx={{ marginBottom: 4 }}>
        <Typography align="center" variant="h1" color="initial">
          {event.name}
        </Typography>

        <Typography align="center" variant="subtitle1" color="text.secondary">
          {new Date(event.date).toDateString()}
        </Typography>
      </Container>

      {event.videos?.length > 0 && (
        <>
          <Typography align="center" variant="h2" sx={{ paddingX: 2 }}>
            Videos
          </Typography>
          <UniformGrid ContainerProps={{ justifyContent: "center" }}>
            {event.videos.map((video) => (
              <VideoPlayer
                key={video.url}
                eventEmitter={eventEmitterRef.current}
                video={video}
              />
            ))}
          </UniformGrid>
        </>
      )}

      {event.imageGalleries?.length > 0 && (
        <>
          <Typography align="center" variant="h2" sx={{ paddingX: 2 }}>
            Photos
          </Typography>
          <UniformGrid ContainerProps={{ justifyContent: "center" }}>
            {event.imageGalleries.map((imageGallery) => (
              <ImageGalleryCard
                key={imageGallery.slug}
                imageGallery={imageGallery}
              />
            ))}
          </UniformGrid>
        </>
      )}
    </>
  );
};

const Loading = () => {
  return (
    <>
      <Container
        sx={{
          height: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress color="inherit" />
      </Container>
    </>
  );
};

export const EventSingle = (props: IEventSingleProps) => {
  const { settings } = props;

  const router = useRouter();

  const eventId = String(router.query.eventId);
  const index = NonNegativeNumber(router.query.index ?? 0);
  const sort = EventSort(router.query.sort);

  const eventsQuery = useEventsQuery({
    sort,
    slice: {
      offset: NonNegativeNumber(index - 1),
      limit: NonNegativeNumber(3),
    },
  });

  const events = eventsQuery.data ?? [];
  const eventIndex = events.findIndex((event) => event.eventId === eventId);
  const event = events[eventIndex];

  return (
    <PageWrapper pageTitle={["Events"]} settings={settings}>
      <Container sx={{ paddingY: 2 }}>
        <Breadcrumbs sx={{ overflowX: "hidden" }}>
          <Link href={routes.landing()}>Home</Link>
          <Link href={routes.allEvents({ sort })}>Events</Link>
        </Breadcrumbs>

        <EventSingleActionBar
          previousEvent={events[eventIndex - 1]}
          nextEvent={events[eventIndex + 1]}
          index={index}
          sort={sort}
        />
      </Container>

      {!event && <Loading />}
      {event && <Loaded event={event} />}
    </PageWrapper>
  );
};
