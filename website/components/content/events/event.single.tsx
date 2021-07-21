import { Button, Link, UniformGrid } from "@components/generic";
import { EventSort, IEvent, IEventSort, ISettings } from "@data-access";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {
  createEventEmitter,
  INonNegativeNumber,
  NonNegativeNumber,
} from "@utility";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import { PageWrapper, routes } from "../../shared";
import { ImageGalleryCard } from "../cards";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { IVideoPlayerEvents, VideoPlayerCard } from "../video-player";
import { useEventsQuery } from "./event-state";

export type IEventSingleProps = {
  settings: ISettings;
};

const Loaded = ({
  event,
  previousEvent,
  nextEvent,
  sort,
  index,
}: {
  event: IEvent;
  previousEvent?: IEvent;
  nextEvent?: IEvent;
  sort: IEventSort;
  index: INonNegativeNumber;
}) => {
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
              <VideoPlayerCard
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
  const previousEvent = events[eventIndex - 1];
  const nextEvent = events[eventIndex + 1];

  return (
    <PageWrapper pageTitle={["Events"]} settings={settings}>
      <Container sx={{ paddingY: 2 }}>
        <Breadcrumbs sx={{ overflowX: "hidden" }}>
          <Link href={routes.landing()}>Home</Link>
          <Link href={routes.allEvents({ sort })}>Events</Link>
        </Breadcrumbs>

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
      </Container>

      {!eventsQuery.data && <Loading />}
      {event && (
        <Loaded
          sort={sort}
          index={index}
          event={event}
          previousEvent={previousEvent}
          nextEvent={nextEvent}
        />
      )}
    </PageWrapper>
  );
};
