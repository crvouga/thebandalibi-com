import { Link, UniformGrid } from "@components/generic";
import { IEvent, ISettings } from "@data-access";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { createEventEmitter } from "@utility";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import { PageWrapper, routes } from "../../shared";
import { ImageGalleryCard } from "../cards";
import { useEventQuery } from "../events";
import { IVideoPlayerEvents, VideoPlayerCard } from "../video-player";

export type IEventSingleProps = {
  settings: ISettings;
};

const Loaded = ({ event }: { event: IEvent }) => {
  const eventEmitterRef = useRef(
    createEventEmitter<IVideoPlayerEvents>({ maxListeners: 1000 })
  );

  return (
    <>
      <Container sx={{ paddingY: 2 }}>
        <Breadcrumbs>
          <Link href={routes.landing()}>Home</Link>
          <Link href={routes.allEvents()}>Events</Link>
          <Link href={routes.singleEvent(event)} color="text.primary">
            {event.name}
          </Link>
        </Breadcrumbs>

        <Typography align="center" variant="h1" color="initial">
          {event.name}
        </Typography>

        <Typography align="center" variant="h5" color="initial">
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
      <Container sx={{ paddingY: 2 }}>
        <Breadcrumbs>
          <Link href={routes.landing()}>Home</Link>
          <Link href={routes.allEvents()}>Events</Link>
        </Breadcrumbs>
      </Container>

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

  const eventId = String(router.query["eventId"]);

  const eventQuery = useEventQuery({
    eventId,
  });

  const event = eventQuery.data;

  return (
    <PageWrapper
      pageTitle={["Events", event ? event.name : "..."]}
      settings={settings}
    >
      {!event && <Loading />}
      {event && <Loaded event={event} />}
    </PageWrapper>
  );
};
