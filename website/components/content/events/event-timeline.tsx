import { Avatar } from "@components/generic";
import { IEvent } from "@data-access";
import Typography from "@material-ui/core/Typography";
import Timeline from "@material-ui/lab/Timeline";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineItem from "@material-ui/lab/TimelineItem";
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

export const EventTimelineItem = ({ event }: { event: IEvent }) => {
  const thumbnailUrl = eventToThumbnailUrl(event);
  return (
    <TimelineItem>
      <TimelineOppositeContent color="text.secondary" variant="subtitle2">
        {new Date(event.date).toDateString()}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <Avatar
          sx={{ width: "64px", height: "64px" }}
          variant="rounded"
          src={thumbnailUrl ?? undefined}
          alt={event.name}
        >
          <MdEvent style={{ width: "66.66%", height: "66.66%" }} />
        </Avatar>

        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ paddingBottom: 8 }}>
        <Typography variant="h4">{event.name}</Typography>
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
