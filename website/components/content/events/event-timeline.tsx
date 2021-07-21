import {
  Avatar,
  CardActionArea,
  TimelineContainer,
  TimelineItem,
  TimelineLine,
} from "@components/generic";
import { routes } from "@components/shared";
import { IEvent } from "@data-access";
import Typography from "@material-ui/core/Typography";
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

const AVATAR_SIZE = "80px";
const ITEM_SPACING = 4;

export const EventTimeline = ({ events }: { events: IEvent[] }) => {
  return (
    <TimelineContainer>
      <TimelineLine sx={{ paddingY: ITEM_SPACING }} />

      {events.map((event, index) => (
        <CardActionArea key={event.eventId} href={routes.singleEvent(event)}>
          <TimelineItem
            sx={{
              marginY: ITEM_SPACING,
              paddingX: 2,
            }}
            position={index % 2 === 0 ? "left" : "right"}
            primary={<Typography variant="h4">{event.name}</Typography>}
            secondary={
              <Typography color="text.secondary" variant="subtitle2">
                {new Date(event.date).toDateString()}
              </Typography>
            }
            center={
              <Avatar
                sx={{ width: AVATAR_SIZE, height: AVATAR_SIZE, marginX: 2 }}
                variant="rounded"
                src={eventToThumbnailUrl(event) ?? undefined}
                alt={event.name}
              >
                <MdEvent
                  style={{
                    width: "66.66%",
                    height: "66.66%",
                  }}
                />
              </Avatar>
            }
          />
        </CardActionArea>
      ))}
    </TimelineContainer>
  );
};
