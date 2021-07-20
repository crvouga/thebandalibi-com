import { Avatar, Link } from "@components/generic";
import { routes } from "@components/shared";
import { IEvent } from "@data-access";
import Typography from "@material-ui/core/Typography";
import Timeline from "@material-ui/lab/Timeline";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineItem, { TimelineItemProps } from "@material-ui/lab/TimelineItem";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import { toYouTubeThumbnailUrl } from "@utility";
import React from "react";
import { MdEvent } from "react-icons/md";

const eventToThumbnailUrl = (event: IEvent) => {
  if (event?.imageGalleries?.length > 0) {
    return event.imageGalleries[0].thumbnail.url;
  }

  if (event?.videos?.length > 0) {
    return toYouTubeThumbnailUrl(event.videos[0].url);
  }

  return null;
};

export const EventTimelineItem = ({
  event,
  ...props
}: { event: IEvent } & TimelineItemProps) => {
  const thumbnailUrl = eventToThumbnailUrl(event);
  return (
    <TimelineItem {...props}>
      <TimelineOppositeContent color="text.secondary" variant="subtitle2">
        {new Date(event.date).toDateString()}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <Link href={routes.singleEvent(event)}>
          <Avatar
            sx={{ width: "64px", height: "64px" }}
            variant="rounded"
            src={thumbnailUrl ?? undefined}
            alt={event.name}
          >
            <MdEvent style={{ width: "66.66%", height: "66.66%" }} />
          </Avatar>
        </Link>

        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ paddingBottom: 8 }}>
        <Link href={routes.singleEvent(event)}>
          <Typography variant="h4">{event.name}</Typography>
        </Link>
      </TimelineContent>
    </TimelineItem>
  );
};

export const EventTimeline = ({ events }: { events: IEvent[] }) => {
  return (
    <>
      <Timeline position="alternate">
        {events.map((event) => (
          <EventTimelineItem key={event.eventId} event={event} />
        ))}
      </Timeline>
    </>
  );
};
