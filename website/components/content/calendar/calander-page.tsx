import { UniformGrid } from "@components/generic";
import { PageWrapper } from "@components/shared";
import { ISettings } from "@data-access";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import CalendarPickerSkeleton from "@material-ui/lab/CalendarPickerSkeleton";
import PickersDay from "@material-ui/lab/PickersDay";
import StaticDatePicker from "@material-ui/lab/StaticDatePicker";
import {
  createEventEmitter,
  DateISO,
  IDateRange,
  isSameYearMonthDay,
  toMonthDateRange,
} from "@utility";
import * as React from "react";
import { ImageGalleryCard } from "../cards";
import { useEventsQuery } from "../events";
import { IVideoPlayerEvents, VideoPlayer } from "../video-player";
import { LocalizationProvider } from "./localization-provider";

const initialValue = new Date();

export type ICalanderPageProps = {
  settings: ISettings;
};

const MIN_DATE = new Date(2021, 1, 1);

const pageEventEmitter = createEventEmitter<IVideoPlayerEvents>({});

export const CalanderPage = ({ settings }: ICalanderPageProps) => {
  const [value, setValue] = React.useState<Date | null>(initialValue);

  const [dateRange, setDateRange] = React.useState<IDateRange>(
    toMonthDateRange(new Date())
  );

  const eventsQuery = useEventsQuery({
    sort: "date-descend",
    inclusiveDateRange: {
      start: DateISO(dateRange.start),
      end: DateISO(dateRange.end),
    },
  });

  const handleMonthChange = (date: Date) => {
    setDateRange(toMonthDateRange(date));
  };

  const handleYearChange = (date: Date) => {
    setDateRange(toMonthDateRange(date));
  };

  const isDateSelected = (date: Date) => {
    const events = eventsQuery.data ?? [];

    return events.some((event) =>
      isSameYearMonthDay(new Date(event.date), date)
    );
  };

  const selectedEvents = eventsQuery.data?.filter(
    (event) => value && isSameYearMonthDay(new Date(event.date), value)
  );

  return (
    <PageWrapper settings={settings} pageTitle={["Calender"]}>
      <Container>
        <Typography variant="h1" align="center">
          Calender
        </Typography>
      </Container>

      <LocalizationProvider>
        <Container maxWidth="xs" disableGutters>
          <StaticDatePicker
            value={value}
            minDate={MIN_DATE}
            loading={eventsQuery.status === "loading"}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            onMonthChange={handleMonthChange}
            onYearChange={handleYearChange}
            renderInput={(params) => <TextField {...params} />}
            renderLoading={() => <CalendarPickerSkeleton />}
            renderDay={(date, _value, DayComponentProps) => {
              const isSelected =
                !DayComponentProps.outsideCurrentMonth && isDateSelected(date);

              return (
                <Badge
                  key={date.toString()}
                  overlap="circular"
                  badgeContent={isSelected ? "" : undefined}
                  color="primary"
                >
                  <PickersDay {...DayComponentProps} />
                </Badge>
              );
            }}
          />
        </Container>
        {selectedEvents?.map((event) => (
          <Container key={event.eventId}>
            <Typography variant="h3">{event.name}</Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {new Date(event.date).toDateString()}
            </Typography>
            {event.imageGalleries?.length > 0 && (
              <>
                <Typography variant="h4">Photos</Typography>
                <UniformGrid>
                  {event.imageGalleries.map((imageGallery) => (
                    <ImageGalleryCard
                      key={imageGallery.slug}
                      imageGallery={imageGallery}
                    />
                  ))}
                </UniformGrid>
              </>
            )}

            {event.videos?.length > 0 && (
              <>
                <Typography variant="h4">Videos</Typography>
                <UniformGrid>
                  {event.videos.map((video) => (
                    <VideoPlayer
                      key={video.url}
                      video={video}
                      eventEmitter={pageEventEmitter}
                    />
                  ))}
                </UniformGrid>
              </>
            )}
          </Container>
        ))}
      </LocalizationProvider>
    </PageWrapper>
  );
};
