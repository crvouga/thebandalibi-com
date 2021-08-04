/* 

docs: https://app.swaggerhub.com/apis-docs/Bandsintown/PublicAPI/3.0.1

*/

export type IBandsInTownArtist = {
  id: string;
  name: string;
  url: string;
  image_url: string;
  thumb_url: string;
  facebook_page_url: string;
  mbid: string;
  tracker_count: number;
  upcoming_event_count: number;
};

type IVenue = {
  name: string;
  latitude: string;
  longitude: string;
  city: string;
  region: string;
  country: string;
};

type IOffer = {
  type: string;
  url: string;
  status: string;
};

export type IBandsInTownEvent = {
  id: string;
  artist_id: string;
  url: string;
  on_sale_datetime: string;
  datetime: string;
  description: string;
  title: string;
  venue: IVenue;
  offers: IOffer[];
  lineup: string[];
};

type IDateRange = string & { type: "DateRange" };

export type IBandsInTownClient = {
  artists: {
    getOne: (params: {
      appId: string;
      artistId: string;
    }) => Promise<IBandsInTownArtist>;
  };
  events: {
    getAll: (params: {
      date: "upcoming" | "past" | "all" | IDateRange;
      artistId: string;
      appId: string;
    }) => Promise<IBandsInTownEvent[]>;
  };
};

const PROTOCOL = "https://";
const BASE_URL = "rest.bandsintown.com";

export const BandsInTownClient = (): IBandsInTownClient => {
  return {
    artists: {
      async getOne({ appId, artistId }) {
        const endpoint = `/artists/id_${artistId}?app_id=${appId}`;

        const url = `${PROTOCOL}${BASE_URL}${endpoint}`;

        const response = await fetch(url);

        const data: IBandsInTownArtist = await response.json();

        return data;
      },
    },

    events: {
      async getAll({ appId, date, artistId }) {
        const endpoint = `/artists/id_${artistId}/events?app_id=${appId}&date=${date}`;

        const url = `${PROTOCOL}${BASE_URL}${endpoint}`;

        const response = await fetch(url);

        const data: IBandsInTownEvent[] = await response.json();

        return data;
      },
    },
  };
};
