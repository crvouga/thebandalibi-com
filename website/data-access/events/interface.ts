export type IEvent = {
  eventId: string;
  eventName: string;
  venueName: string;
  city: string;
  country: string;
  region: string;
  eventUrl: string;
  datetime: string;
  ticketUrl: string;
};

type IDateRange = string & { type: "DateRange" };

export type IEvents = {
  getPlatform: () => Promise<{ iconSrc: string; label: string; href: string }>;
  getAll: (params: {
    date: "upcoming" | "past" | "all" | IDateRange;
  }) => Promise<IEvent[]>;
};
