type IEventLocation = {
  country: string;
  city: string;
  latitude: string;
  name: string;
  location: string;
  region: string;
  longitude: string;
};

export type IEvent = {
  eventId: string;
  name: string;
  datetime: string;
  offers: {
    type: string;
    url: string;
  }[];
};

type IDateRange = string & { type: "DateRange" };

export type IEvents = {
  getAll: (params: {
    date: "upcoming" | "past" | "all" | IDateRange;
  }) => Promise<IEvent[]>;
};
