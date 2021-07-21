import {
  TimelineLine,
  CardActionArea,
  Avatar,
  TimelineContainer,
  TimelineItem,
} from "@components/generic";
import NextLink from "next/link";
import { routes } from "@components/shared";
import { IEvent } from "@data-access";
import Box from "@material-ui/core/Box";
import Skeleton from "@material-ui/core/Skeleton";
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
                <MdEvent style={{ width: "66.66%", height: "66.66%" }} />
              </Avatar>
            }
          />
        </CardActionArea>
      ))}
    </TimelineContainer>
  );
};

export const EventTimelineSkeleton = ({ itemCount }: { itemCount: number }) => {
  return (
    <>
      <Box>
        {[...Array(itemCount)].map((_, index) => (
          <Box key={index}>
            <TimelineItem
              sx={{
                marginY: ITEM_SPACING,
                paddingX: 2,
              }}
              position={index % 2 === 0 ? "left" : "right"}
              primary={
                <Skeleton variant="rectangular" width="6em" height="1.5em" />
              }
              secondary={
                <Skeleton variant="rectangular" width="3em" height="1em" />
              }
              center={
                <Skeleton
                  variant="rectangular"
                  width={AVATAR_SIZE}
                  height={AVATAR_SIZE}
                  sx={{ marginX: 2 }}
                />
              }
            />
          </Box>
        ))}
      </Box>
    </>
  );
};
