import { IEvent, IEvents } from "../interface";
import { IBandsInTownClient, IBandsInTownEvent } from "./bands-in-town-client";

const bandsInTownEventToEvent = (event: IBandsInTownEvent): IEvent => {
  return {
    eventId: event.id,
    name: event.title,
    datetime: event.datetime,
    offers: event.offers,
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
