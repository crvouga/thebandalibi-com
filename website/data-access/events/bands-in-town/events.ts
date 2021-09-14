import { editDistance } from "@utility";
import { IEvent, IEvents } from "../interface";
import { IBandsInTownClient, IBandsInTownEvent } from "./bands-in-town-client";

const toBandsInTownEventPageUrl = ({ eventId }: { eventId: string }) => {
  return `https://www.bandsintown.com/e/${eventId}`;
};

const toBandsInTownArtistPageUrl = ({ artistId }: { artistId: string }) => {
  return `https://www.bandsintown.com/a/${artistId}`;
};

const MAX_EDIT_DISTANCE = 3;
const toTicketUrl = (event: IBandsInTownEvent) => {
  const ticketOffer = event.offers.find(
    (offer) =>
      editDistance(offer.type.toLowerCase(), "tickets") < MAX_EDIT_DISTANCE
  );

  if (ticketOffer) {
    return ticketOffer.url;
  }

  throw new Error("failed to get ticket url from bands in town event data");
};

const bandsInTownEventToEvent = (event: IBandsInTownEvent): IEvent => {
  return {
    eventId: event.id,
    city: event.venue.city,
    country: event.venue.country,
    region: event.venue.region,
    eventName: event.title,
    datetime: event.datetime,
    venueName: event.venue.name,
    ticketUrl: toTicketUrl(event),
    eventUrl: toBandsInTownEventPageUrl({ eventId: event.id }),
  };
};

export const Events = ({
  artistId,
  appId,
  bandsInTownClient,
}: {
  artistId: string;
  appId: string;
  bandsInTownClient: IBandsInTownClient;
}): IEvents => {
  return {
    async getPlatform() {
      return {
        iconSrc: "/bands-in-town-logo.png",
        href: toBandsInTownArtistPageUrl({ artistId }),
        label: "Band's In Town",
      };
    },

    async getAll({ date }) {
      const response = await bandsInTownClient.events.getAll({
        date,
        artistId,
        appId,
      });

      const events = response.map(bandsInTownEventToEvent);

      return events;
    },
  };
};
